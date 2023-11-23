import { format } from "prettier";
import { formatDate } from "./utils";

/**
 * @typedef DropdownItemProps
 * @type {object}
 * @property {string} title - The title of the dropdown item.
 * @property {string[]} subtitle - The subtitle of the dropdown item.
 * @property {string[]=} description - The description of the dropdown item.
 * @property {string[]=} badges - Related badges of the dropdown item.
 * @property {string=} icon - The icon of the dropdown item.
 * @property {string=} website - The website of the dropdown item.
 */

/**
 *
 * @param {string} start_date
 * @param {string=} end_date
 * @returns {string}
 */
function subTitleFromDates(start_date, end_date) {
    let subtitle = `${formatDate(start_date)} - ${formatDate(end_date)}`;
    if (end_date === undefined) {
        end_date = new Date().toISOString().split("T")[0];
    }
    const monthsBetween =
        Math.round(
            (new Date(end_date).getTime() - new Date(start_date).getTime()) /
                1000 /
                60 /
                60 /
                24 /
                30,
        ) + 1;
    const yearsBetween = Math.floor(monthsBetween / 12);
    if (yearsBetween > 0) {
        return (
            subtitle + ` (${yearsBetween} years, ${monthsBetween % 12} months)`
        );
    }
    return subtitle + ` (${monthsBetween} months)`;
}

/**
 * @param {import('$lib/resume.js').WorkExperience} experience
 * @returns {DropdownItemProps}
 */
export function transformWorkExperience(experience) {
    return {
        title: experience.position,
        subtitle: [
            experience.company,
            subTitleFromDates(experience.start_date, experience.end_date),
            experience.location ?? "",
        ],
        description: experience.description,
        icon: experience.logo,
        badges: experience.technologies,
        website: experience.website,
    };
}

/**
 * @param {import('$lib/resume.js').Project} project
 * @returns {DropdownItemProps}
 */
export function transformProject(project) {
    return {
        title: project.name,
        subtitle: [project.website ?? ""],
        description: project.description,
        icon: project.logo,
        badges: project.technologies,
        website: project.website,
    };
}

/**
 * @param {import('$lib/resume.js').Education} education
 * @returns {DropdownItemProps[]}
 */
export function transformEducation(education) {
    return [
        {
            title: education.school,
            subtitle: [
                education.degree + " in " + education.major,
                subTitleFromDates(education.start_date, education.end_date),
                education.location ?? "",
            ],
            description: ["Courses: " + education.courses?.join(", ")],
            icon: education.logo,
            website: education.website,
        },
        ...(education.additional ?? []).map((a) => ({
            title: "",
            subtitle: [
                a.degree ? `${a.degree} in ${a.major}` : "",
                a.start_date ? subTitleFromDates(a.start_date, a.end_date) : "",
                a.location ?? "",
            ],
            description: ["Courses: " + a.courses?.join(", ")],
            icon: a.no_logo ? "" : a.logo ? a.logo : education.logo,
            website: education.website,
        })),
    ];
}

/**
 * @param {import('$lib/resume.js').Games} game
 * @returns {DropdownItemProps}
 */
export function transformGame(game) {
    return {
        title: game.name,
        subtitle: [game.website ?? ""],
        description: game.description,
        icon: game.logo,
        badges: game.technologies,
        website: game.website,
    };
}

/**
 * @param {import('$lib/resume.js').Apps} app
 * @returns {DropdownItemProps}
 */
export function transformApp(app) {
    return {
        title: app.name,
        subtitle: [app.website ?? ""],
        description: app.description,
        icon: app.logo,
        badges: app.technologies,
        website: app.website,
    };
}

/**
 * @param {import('$lib/resume.js').Certificates} certificate
 * @returns {DropdownItemProps}
 */
export function transformCertificate(certificate) {
    return {
        title: certificate.name,
        subtitle: [certificate.issuer, formatDate(certificate.issue_date)],
        description: certificate.description,
        icon: certificate.logo,
        website: certificate.website,
    };
}
