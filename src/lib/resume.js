/**
 * @typedef Resume
 * @type {object}
 * @property {Personal} personal - Your personal information.
 * @property {SocialLinks} socials - Your personal information.
 * @property {WorkExperience[]} work_experience - Your work experience.
 * @property {Project[]} projects - Your projects.
 * @property {Education[]} education - Your education.
 * @property {Games[]} games - Your games.
 * @property {Certificates[]} certificates - Your certificates.
 */

/**
 * @typedef Personal
 * @type {object}
 * @property {string} first_name - Your first name.
 * @property {string} last_name - Your last name.
 * @property {string=} email - Your email address.
 * @property {string=} phone - Your phone number.
 */

/**
 * @typedef WorkExperience
 * @type {object}
 * @property {string} company - The company you worked for.
 * @property {string} position - Your position at the company.
 * @property {Date} start_date - The date you started working at the company.
 * @property {Date=} end_date - The date you stopped working at the company.
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
 * @typedef Education
 * @type {object}
 * @property {string} school - The school you attended.
 * @property {string} major - Your major.
 * @property {string} degree - The degree you received.
 * @property {Date} start_date - The date you started attending the school.
 * @property {Date=} end_date - The date you stopped attending the school.
 * @property {string[]=} courses - The courses you took.
 * @property {string=} website - The school's website.
 * @property {string=} location - The school's location.
 * @property {string=} logo - The school's logo.
 * @property {boolean} [get_logo_from_website=true] - Attempt to get the school's logo from their website if a logo is not given.
 * @property {boolean} [no_logo=false] - Do not include the logo.
 */

/**
 * @typedef Certificates
 * @type {object}
 * @property {string} name - The name of the certificate.
 * @property {string} issuer - The issuer of the certificate.
 * @property {Date} issue_date - The date the certificate was issued.
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

module.exports = {};
