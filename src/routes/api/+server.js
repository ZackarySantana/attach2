import { getResume } from "$lib/resume";
import { json } from "@sveltejs/kit";

const iconTypes = [
    'rel="apple-touch-icon"',
    'rel="msapplication-TileImage"',
    'rel="icon"',
    'rel="shortcut icon"',
    'rel="icon shortcut"',
];

/**
 * @param {import('$lib/resume').Resume} info
 * @returns {Promise<any>}
 */
async function processLogos(info) {
    /**
     *
     * @param {string} text
     * @param {string} toFind
     * @returns {string=}
     */
    function getHref(text, toFind) {
        const found = text.indexOf(toFind);
        if (found !== -1) {
            // get the link index that is before found
            const linkIndex = text.lastIndexOf("<link", found);
            const href = text
                .substring(linkIndex, text.indexOf('">', found))
                .match(/href="([^"]*)/);
            if (href) {
                return href[1];
            }
        }
        return undefined;
    }
    /**
     * @type {Promise<void>[]}
     */
    const promises = [];
    /**
     * @param {object} item
     * @param {string=} item.logo
     * @param {string=} item.website
     * @param {boolean=} item.get_logo_from_website
     */
    function processLogo(item) {
        if (
            !item.website ||
            (item.get_logo_from_website !== undefined &&
                item.get_logo_from_website === false)
        ) {
            return;
        }
        if (item.logo) {
            return;
        }
        promises.push(
            fetch(item.website)
                .then((res) => res.text())
                .then((site) => {
                    for (const type of iconTypes) {
                        let href = getHref(site, type);
                        if (href) {
                            if (
                                !href.startsWith("https://") &&
                                !href.startsWith("http://")
                            ) {
                                if (!href.startsWith("/")) {
                                    href = "/" + href;
                                }
                                href = item.website + href;
                            }
                            item.logo = href;
                            return fetch(href);
                        }
                    }
                })
                .then((href) => {
                    if (href === undefined || href.status !== 200) {
                        item.logo =
                            new URL(item.website ?? "").origin + "/favicon.ico";
                        return fetch(item.logo);
                    }
                })
                .then((href) => {
                    if (href !== undefined && href.status !== 200) {
                        item.logo = item.website + "/favicon.ico";
                    }
                })
                .catch(() => {
                    item.logo = item.website + "/favicon.ico";
                }),
        );
    }

    info.work_experience.forEach(processLogo);
    info.projects.forEach(processLogo);
    info.education.forEach(processLogo);
    info.games.forEach(processLogo);
    info.apps.forEach(processLogo);
    info.certificates.forEach(processLogo);

    return Promise.all(promises);
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const resume = getResume();
    await processLogos(resume);
    return json(resume);
}
