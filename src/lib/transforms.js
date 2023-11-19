import { formatDate } from "./utils";

/**
 * @typedef DropdownItemProps
 * @type {object}
 * @property {string} title - The title of the dropdown item.
 * @property {string[]} subtitle - The subtitle of the dropdown item.
 * @property {string[]=} description - The description of the dropdown item.
 * @property {string=} icon - The icon of the dropdown item.
 */

/**
 *
 * @param {string} start_date
 * @param {string=} end_date
 * @returns {string}
 */
function subTitleFromDates(start_date, end_date) {
    return `${formatDate(start_date)} - ${formatDate(end_date)}`;
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
    };
}

/**
 * @param {import('$lib/resume.js').Education} education
 * @returns {DropdownItemProps}
 */
export function transformEducation(education) {
    return {
        title: education.school,
        subtitle: [
            education.degree + " in " + education.major,
            subTitleFromDates(education.start_date, education.end_date),
            education.location ?? "",
        ],
        description: ["Courses: " + education.courses?.join(", ")],
        icon: education.logo,
    };
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
    };
}
