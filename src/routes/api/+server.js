import { json } from "@sveltejs/kit";

const iconTypes = [
    'rel="apple-touch-icon"',
    'rel="msapplication-TileImage"',
    'rel="icon"',
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
        const appleIcon = text.indexOf(toFind);
        if (appleIcon !== -1) {
            const href = text
                .substring(appleIcon, text.indexOf('">', appleIcon))
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
        promises.push(
            fetch(item.website)
                .then((res) => res.text())
                .then((site) => {
                    for (const type of iconTypes) {
                        const href = getHref(site, type);
                        if (href) {
                            item.logo = item.website + href;
                            return;
                        }
                    }
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
    /** @type {import('$lib/resume').Resume} */
    const info = {
        personal: {
            first_name: "Zackary",
            last_name: "Santana",
            email: "zsant014@fiu.edu",
        },
        socials: {
            website: "https://zackaryjamessantana.com",
            github: "https://github.com/ZackarySantana",
            linkedin: "https://www.linkedin.com/in/zackary-santana",
            other: {
                Dev: "Twi",
            },
        },
        work_experience: [
            {
                company: "Company",
                position: "Position",
                start_date: "2021-01-01",
                end_date: "2022-01-01",
                description: ["Company Description"],
                website: "https://www.mongodb.com",
                location: "New York, NY",
            },
        ],
        education: [
            {
                school: "School",
                major: "Major",
                degree: "Degree",
                start_date: "2021-01-01",
                end_date: "2022-01-01",
                website: "https://google.com",
                location: "New York, NY",
            },
        ],
        certificates: [
            {
                name: "Certificate",
                issuer: "Issuer",
                issue_date: "2021-05-05",
                description: ["Cert desc"],
                website: "https://google.com",
            },
        ],
        projects: [
            {
                name: "Project",
                description: ["Project desc"],
                type: "Type",
                technologies: ["Go", "TypeScript"],
                website: "https://google.com",
                github: "https://github.com/zackarysantana/howsit",
            },
        ],
        games: [
            {
                name: "Game",
                description: ["Game desc"],
                technologies: ["Godot", "Unity"],
                website: "https://google.com",
                github: "https://github.com/zackarysantana/rpg",
            },
        ],
        apps: [
            {
                name: "App",
                description: ["App desc"],
                playstore: "Android",
                technologies: ["React", "Svelte"],
                website: "https://google.com",
                github: "https://github.com/zackarysantana/rpg",
            },
        ],
    };
    await processLogos(info);
    return json(info);
}
