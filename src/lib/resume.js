/** @returns {import('$lib/resume').Resume} */
export function getResume() {
    return {
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
                company: "MongoDB",
                position: "Software Engineer II",
                start_date: "2023-08-01",
                description: [""],
                technologies: [
                    "Golang",
                    "CI/CD",
                    "TypeScript",
                    "React.js",
                    "Vite",
                    "Rollup",
                    "MongoDB",
                    "REST",
                    "Splunk",
                ],
                website: "https://www.mongodb.com",
                location: "New York, NY",
            },
            {
                company: "Addigy",
                position: "Junior Software Engineer",
                start_date: "2022-01-01",
                end_date: "2022-07-01",
                description: [
                    "Developed among a fleet of microservices that all interconnect and are responsible for a different aspect of the product. This meant a business outcome often affected many microservices, 3-4 on average.",
                    "Developed on 5+ microservices that expose CRUD endpoints and store data via a MongoDB and SQLite databases, deployed in a Kubernetes cluster using Lens to monitor the cluster.",
                    "Created a new webhooks callout consumer service and webhooks manager service in Golang to sync 200 different accounts with around 3000+ users using 3rd party integrations.",
                ],
                technologies: [
                    "Golang",
                    "Gin",
                    "Kubernetes",
                    "Lens",
                    "MongoDB",
                    "SQLite",
                    "SQL",
                    "BigQuery",
                    "JavaScript",
                    "Vue",
                    "Webpack",
                    "REST",
                ],
                website: "https://www.addigy.com",
                location: "Miami, FL",
            },
            {
                company: "4Geeks Academy",
                position: "Fullstack Bootcamp Instructor",
                start_date: "2021-09-01",
                end_date: "2022-01-01",
                description: [
                    "Guided 11 students on HTML, CSS, JavaScript, Node.js/NPM, Jest, React.js, React Flux & Context API, Python, SQLAlchemy, Flask, and REST API's.",
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Jest",
                    "React.js",
                    "Python",
                    "SQLAlchemy",
                    "Flask",
                    "REST",
                ],
                website: "https://4geeksacademy.com",
                location: "Miami, FL",
            },
            {
                company: "MongoDB",
                position: "Software Engineer Intern",
                start_date: "2021-06-01",
                end_date: "2021-08-01",
                description: [
                    "Direct experience working on distributed systems internal facing CI/CD testing tooling, handling 1-2 engineering requests every week from other engineers at MongoDB, dog-feeding and pushing those updates live to increase other team velocities.",
                    "This ranged from changing the CLI to accept new flags, represent new database models, or fix commands under certain conditions like overriding defaults, to creating/adjusting REST endpoints to better align with the docs.",
                    "Concurrently worked on uncoupling archiving and restarting logic for tests to allow for specific grouping of tests to restart only failed- teams often used these groupings with 800+ tests that would run on average for 2 hours. Restarting them before would restart all tests, with my changes it would cut down the restarted tests from 800+ → 1-5, this reduced restart time/machine usage by up to 90%.",
                    "Used tools like Splunk to query and test about the data of restarted tests, creating new pipelines in MongoDB to support the database model changes, Golang as the primary language for the tooling, TypeScript/React.js for UI changes.",
                ],
                technologies: [
                    "Golang",
                    "CI/CD",
                    "TypeScript",
                    "React.js",
                    "Vite",
                    "Rollup",
                    "MongoDB",
                    "REST",
                    "Splunk",
                ],
                website: "https://www.mongodb.com",
                location: "New York, NY",
            },
            {
                company: "MetLife",
                position: "Software Engineer Intern",
                start_date: "2021-06-01",
                end_date: "2021-08-01",
                description: [
                    "Improved the UX (user experience) of the department-wide smoke test website used by 200+ teams. The site previously had blocked executions of similar requests in multiple sections of the site and would not cache responses even on the same client session. Implemented coinciding execution of requests bringing the site from a 10 seconds-30 seconds on a cold start down to 1 second.",
                    "Migrated queries to MongoDB to the backend (Restifiy) and pinging endpoints (JVM’s) to the frontend (Angular.js) which reduced server load, improved overall server response time, and resulted in a fast TTFB (Time-to-first-byte).",
                ],
                technologies: [
                    "Node.js",
                    "Angular.js",
                    "Webpack",
                    "MongoDB",
                    "JVM",
                    "UI/UX",
                ],
                website: "https://www.metlife.com",
                location: "Cary, NC",
            },
        ],
        education: [
            {
                school: "Florida International University",
                major: "Computer Science",
                degree: "Bachelor of Science",
                start_date: "2020-07-01",
                end_date: "2023-08-01",
                courses: [
                    "Advance UNIX Programming",
                    "Algorithm Techniques",
                    "Artificial Intelligence",
                    "Data Mining",
                    "Data Structures",
                    "Database Administration",
                    "Database Management",
                    "Computational Geometry",
                    "Human-Computer Interaction",
                    "Mobile App Dev",
                    "Programming Languages",
                    "Operating Systems",
                    "Software Engineering",
                ],
                additional: [
                    {
                        degree: "Minor",
                        major: "Mathematical Science",
                        courses: [
                            "Calculus I",
                            "Calculus II",
                            "Calculus III",
                            "Differential Equations",
                            "Linear Algebra",
                            "Physics I",
                            "Physics II",
                            "Modern Physics",
                            "Intermediate Physics Lab",
                        ],
                        no_logo: true,
                    },
                ],
                website: "https://www.fiu.edu",
                location: "Miami, FL",
            },
        ],
        certificates: [
            {
                issuer: "CodePath",
                name: "Intermediate iOS Development",
                issue_date: "2022-12-01",
                website: "https://codepath.org",
            },
            {
                issuer: "Stack Overflow",
                name: "Student Ambassador",
                issue_date: "2022-09-01",
                website: "https://stackoverflow.com",
            },
            {
                issuer: "GitHub",
                name: "GitHub Campus Expert",
                issue_date: "2022-09-01",
                website: "https://github.com",
            },
            {
                issuer: "CodePath",
                name: "Android Development Honors",
                issue_date: "2021-11-01",
                website: "https://codepath.org",
            },
            {
                issuer: "University of Colorado School of Medicine",
                name: "Wilderness First Responder",
                issue_date: "2021-05-01",
                website: "https://medschool.cuanschutz.edu",
            },
        ],
        projects: [
            {
                name: "Autumn-Changelog",
                description: ["Autumn-Changelog desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://autumn-cl.com",
                github: "https://github.com/zackarysantana/autumn-cl",
            },
            {
                name: "CI/CD VSCode Extension",
                description: ["CI/CD VSCode Extension desc"],
                type: "VSCode Extension",
                technologies: ["TypeScript"],
                website:
                    "https://marketplace.visualstudio.com/items?itemName=ZackarySantana.grove",
                github: "https://github.com/zackarysantana/grove",
            },
            {
                name: "How's It",
                description: ["How's It desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://howsit.dev",
                github: "https://github.com/zackarysantana/howsit",
            },
            {
                name: "Weekdays",
                description: ["Weekdays desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://weekdays.pro",
            },
            {
                name: "Portfolio",
                description: ["Portfolio desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://zackaryjamessantana.com",
                github: "https://github.com/zackarysantana/portfolio",
            },
            {
                name: "Code Constants",
                description: ["Code Constants desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://codeconstants.com",
                github: "https://github.com/zackarysantana/codeconstants",
            },
            {
                name: "UPE",
                description: ["UPE desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://flow-test.fly.dev",
            },
            {
                name: "Todo",
                description: ["Todo desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://todo.zackaryjamessantana.com",
                github: "https://github.com/zackarysantana/todo",
            },
            {
                name: "Twitter Filter",
                description: ["Twitter Filter desc"],
                type: "Website",
                technologies: ["Svelte"],
                website: "https://twitterst.fly.dev",
            },
        ],
        games: [
            {
                name: "RPG",
                description: ["RPG desc"],
                technologies: ["JavaScript"],
                website:
                    "https://zackaryjamessantana.com/hosted_projects/rpg.html",
            },
            {
                name: "Space Frontier",
                description: ["Space Frontier desc"],
                technologies: ["JavaScript"],
                website:
                    "https://videos.zackaryjamessantana.com/spacefrontier/",
            },
            {
                name: "Chainsaw The Door",
                description: ["Chainsaw The Door desc"],
                technologies: ["JavaScript"],
                website: "https://rachelquijano.itch.io/chainsaw-the-door",
            },
        ],
        apps: [],
    };
}

/**
 * @typedef Resume
 * @type {object}
 * @property {Personal} personal - Your personal information.
 * @property {SocialLinks} socials - Your personal information.
 * @property {WorkExperience[]} work_experience - Your work experience.
 * @property {Project[]} projects - Your projects.
 * @property {Education[]} education - Your education.
 * @property {Games[]} games - Your games.
 * @property {Apps[]} apps - Your apps.
 * @property {Certificates[]} certificates - Your certificates.
 */

/**
 * @typedef Personal
 * @type {object}
 * @property {string} first_name - Your first name.
 * @property {string} last_name - Your last name.
 * @property {string=} picture - A link to your picture.
 * @property {string=} banner - A link to your banner.
 * @property {string=} email - Your email address.
 * @property {string=} phone - Your phone number.
 */

/**
 * @typedef WorkExperience
 * @type {object}
 * @property {string} company - The company you worked for.
 * @property {string} position - Your position at the company.
 * @property {string} start_date - The date you started working at the company.
 * @property {string=} end_date - The date you stopped working at the company.
 * @property {string[]} description - A description of your work.
 * @property {string[]=} technologies - The technologies you used.
 * @property {string=} website - The company's website.
 * @property {string=} location - The company's location.
 * @property {string=} logo - The company's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the company's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Project
 * @type {object}
 * @property {string} name - The name of the project.
 * @property {string[]} description - A description of the project.
 * @property {string} type - The type of project.
 * @property {string[]=} technologies - The technologies you used.
 * @property {string=} website - The project's website.
 * @property {string=} github - The project's github.
 * @property {string=} logo - The project's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the project's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Games
 * @type {object}
 * @property {string} name - The name of the game.
 * @property {string[]} description - A description of the game.
 * @property {string[]=} technologies - The technologies you used.
 * @property {string=} website - The game's website.
 * @property {string=} github - The project's github.
 * @property {string=} logo - The game's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the game's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Apps
 * @type {object}
 * @property {string} name - The name of the app.
 * @property {string[]} description - A description of the app.
 * @property {string} playstore - The app's playstore.
 * @property {string[]=} technologies - The technologies you used.
 * @property {string=} website - The app's website.
 * @property {string=} github - The project's github.
 * @property {string=} logo - The app's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the app's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Education
 * @type {object}
 * @property {string} school - The school you attended.
 * @property {string} major - Your major.
 * @property {string} degree - The degree you received.
 * @property {string} start_date - The date you started attending the school.
 * @property {string=} end_date - The date you stopped attending the school.
 * @property {string[]=} courses - The courses you took.
 * @property {AdditionalEducation[]=} additional - Any additional education like minors.
 * @property {string=} website - The school's website.
 * @property {string=} location - The school's location.
 * @property {string=} logo - The school's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the school's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef AdditionalEducation
 * @type {object}
 * @property {string=} name - The name of the additional education. This is only required if the degree and major are not given.
 * @property {string=} degree - The degree you received. This is only required if the name is not given.
 * @property {string=} major - The major of the additional education. This is only required if the name is not given.
 * @property {string[]=} courses - The courses you took.
 * @property {string=} start_date - The date you started the additional education.
 * @property {string=} end_date - The date you ended the additional education.
 * @property {string=} location - The location you attended the additional education.
 * @property {string=} logo - The logo of the additional education.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the additional education's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Certificates
 * @type {object}
 * @property {string} name - The name of the certificate.
 * @property {string} issuer - The issuer of the certificate.
 * @property {string} issue_date - The date the certificate was issued.
 * @property {string[]=} description - A description of the certificate.
 * @property {string=} website - The certificate's website.
 * @property {string=} logo - The certificate's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the certificate's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef SocialLinks
 * @type {object}
 * @property {string=} website - Your website.
 * @property {string=} github - Your GitHub username.
 * @property {string=} linkedin - Your LinkedIn username.
 * @property {object=} other - Other social links.
 */
