import { json } from "@sveltejs/kit";

/**
 * @param {import('$lib/resume').Resume} info
 */
async function processLogos(info) {
    /**
     * @param {object} item
     * @param {string=} item.logo
     * @param {string=} item.website
     * @param {boolean=} item.get_logo_from_website
     */
    function processLogo(item) {
        if (item.website && item.get_logo_from_website) {
            const url = item.website + "/favicon.ico";
            item.logo = url;
        }
    }

    info.work_experience.forEach(processLogo);
    info.projects.forEach(processLogo);
    info.education.forEach(processLogo);
    info.games.forEach(processLogo);
    info.apps.forEach(processLogo);
    info.certificates.forEach(processLogo);
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
                website: "https://google.com",
                location: "New York, NY",
                get_logo_from_website: true,
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
                get_logo_from_website: true,
            },
        ],
        certificates: [
            {
                name: "Certificate",
                issuer: "Issuer",
                issue_date: "2021-05-05",
                description: ["Cert desc"],
                website: "https://google.com",
                get_logo_from_website: true,
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
                get_logo_from_website: true,
            },
        ],
        games: [
            {
                name: "Game",
                description: ["Game desc"],
                technologies: ["Godot", "Unity"],
                website: "https://google.com",
                github: "https://github.com/zackarysantana/rpg",
                get_logo_from_website: true,
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
                get_logo_from_website: true,
            },
        ],
    };
    await processLogos(info);
    return json(info);
}
