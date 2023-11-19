import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function GET() {
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
                start_date: new Date("2021-01-01"),
                end_date: new Date("2022-01-01"),
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
                start_date: new Date("2021-01-01"),
                end_date: new Date("2022-01-01"),
                website: "https://google.com",
                location: "New York, NY",
                get_logo_from_website: true,
            },
        ],
        certificates: [
            {
                name: "Certificate",
                issuer: "Issuer",
                issue_date: new Date("2021-05-05"),
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
    };
    return json(info);
}
