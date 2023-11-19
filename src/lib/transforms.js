import DropdownItem from "$components/dropdown_item.svelte";
import { formatDate } from "./utils";

/**
 * @typedef {{
 *    title: string;
 *   subtitle: string[];
 *  description?: string[];
 * icon?: string;
 * }} DropdownItemProps
 */

/**
 * @param {import('$lib/resume.js').WorkExperience} experience
 * @returns {DropdownItemProps}
 */
export function transformWorkExperience(experience) {
    return {
        title: experience.position,
        subtitle: [
            experience.company,
            `${formatDate(experience.start_date)} - ${formatDate(
                experience.end_date,
            )}`,
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
        subtitle: [],
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
