export const BEHANCE_PROFILE = "https://www.behance.net/queenieloda5ae";

export const RESUME_URL =
  "https://drive.google.com/file/d/1X2eJQ4ZANRZaFITF-4itMpIf97JFC__E/view?usp=sharing";

export const CONTACT_EMAIL = "queenielodonia12@gmail.com";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  {
    icon: "sparkle" as const,
    value: "7+",
    label: "Years Experience",
    description: "Delivering client websites end to end, from build through launch.",
  },
  {
    icon: "flower" as const,
    value: null,
    label: "WordPress & Page Builders",
    description: "Elementor, Divi and Avada for custom builds and theme customization.",
  },
  {
    icon: "circle" as const,
    value: null,
    label: "PSD & Figma to Responsive",
    description: "Designs converted into fully responsive WordPress and HTML builds.",
  },
];

/** Skills exactly as listed on the resume. */
export const skills = [
  "WordPress",
  "Elementor",
  "Divi",
  "Avada",
  "PSD to WordPress",
  "PSD to HTML/CSS",
  "HTML/CSS3",
  "Bootstrap 4, 5",
  "Web Design",
  "Adobe Photoshop",
  "Figma",
  "GIT",
  "SEO",
  "MySQL",
  "AngularJS",
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  href: string;
  /** Cover image downloaded from the Behance gallery. */
  image: string;
};

/**
 * Sourced from behance.net/queenieloda5ae. Titles, dates and categories are
 * taken from the published projects. Behance carries no written descriptions
 * for these, so cards show the gallery cover plus title, category and year.
 */
export const projects: Project[] = [
  {
    slug: "gym-website",
    image: "/work/gym-website.jpg",
    name: "Gym Website",
    category: "UI/UX, Web Design",
    year: "2023",
    href: "https://www.behance.net/gallery/170478171/Gym-Website",
  },
  {
    slug: "super-sale-game-banner",
    image: "/work/super-sale-game-banner.jpg",
    name: "Super Sale Game Banner",
    category: "Graphic Design, Banner",
    year: "2021",
    href: "https://www.behance.net/gallery/129234493/Super-Sale-Game-Banner",
  },
  {
    slug: "barista-coffee",
    image: "/work/barista-coffee.jpg",
    name: "Barista Coffee",
    category: "Web Design, WordPress",
    year: "2021",
    href: "https://www.behance.net/gallery/127002327/Barista-Coffee",
  },
  {
    slug: "lawn-doctor",
    image: "/work/lawn-doctor.jpg",
    name: "Lawn Doctor",
    category: "Web Design, WordPress",
    year: "2021",
    href: "https://www.behance.net/gallery/125939799/Lawn-Doctor",
  },
  {
    slug: "surfing-website",
    image: "/work/surfing-website.jpg",
    name: "Surfing Website",
    category: "Web Design, WordPress",
    year: "2021",
    href: "https://www.behance.net/gallery/111825179/Surfing-Website-Wordpress",
  },
  {
    slug: "wedding-website",
    image: "/work/wedding-website.jpg",
    name: "Wedding Website",
    category: "Web Design, WordPress",
    year: "2021",
    href: "https://www.behance.net/gallery/111308439/Wedding-Website",
  },
  {
    slug: "pizza-website",
    image: "/work/pizza-website.jpg",
    name: "Pizza Website",
    category: "Web Design, WordPress",
    year: "2021",
    href: "https://www.behance.net/gallery/111197629/Pizza-Website",
  },
  {
    slug: "medical-cannabis",
    image: "/work/medical-cannabis.jpg",
    name: "Medical Cannabis",
    category: "Web Design, Front-End",
    year: "2019",
    href: "https://www.behance.net/gallery/82596423/Medical-cannabis",
  },
  {
    slug: "clean-photography",
    image: "/work/clean-photography.jpg",
    name: "Clean Photography Website",
    category: "Web Design",
    year: "2019",
    href: "https://www.behance.net/gallery/81181965/Clean-Photography-Website",
  },
  {
    slug: "insurance-website",
    image: "/work/insurance-website.jpg",
    name: "Insurance Website",
    category: "Web Design, Bootstrap",
    year: "2019",
    href: "https://www.behance.net/gallery/80567061/Insurance-Website",
  },
  {
    slug: "health-care",
    image: "/work/health-care.jpg",
    name: "Health Care Web Design",
    category: "Web Design, Redesign",
    year: "2019",
    href: "https://www.behance.net/gallery/78635827/Health-Care-Web-Design",
  },
  {
    slug: "web-design",
    image: "/work/web-design.jpg",
    name: "Web Design",
    category: "Web Design, Front-End",
    year: "2019",
    href: "https://www.behance.net/gallery/77371587/Web-Design",
  },
];

/** Employment history, taken from the resume. Most recent first. */
export const experience = [
  {
    role: "WordPress Developer",
    company: "Freelance",
    period: "Dec 2023 to Mar 2025",
    description:
      "Managed WordPress sites, publishing posts and building front ends with Elementor and Divi.",
  },
  {
    role: "WordPress Developer",
    company: "Freelance",
    period: "Oct 2021 to Aug 2023",
    description:
      "Designed and built custom WordPress sites with Elementor and Divi, converted PSD and Figma designs into fully responsive themes, and ran the client lifecycle independently through requirements, revisions and launch.",
  },
  {
    role: "Front End Developer",
    company: "Edufied",
    period: "Feb 2020 to Apr 2021",
    description:
      "Developed responsive front-end interfaces in AngularJS, working with the design team to implement UI from mockups.",
  },
  {
    role: "Web Developer",
    company: "WebriQ Goes Mad",
    period: "Jun 2018 to Feb 2020",
    description:
      "Built and maintained websites using GatsbyJS, combining development and web design, and delivered projects from design through deployment.",
  },
  {
    role: "Front End Developer",
    company: "MoPro",
    period: "Feb 2017 to May 2018",
    description: "Developed web solutions using MoPro's proprietary in-house tooling.",
  },
  {
    role: "Freelancer",
    company: "Independent",
    period: "Oct 2015 to Dec 2016",
    description:
      "Delivered WordPress sites for multiple clients using Divi and Elementor page builders.",
  },
  {
    role: "Web Developer",
    company: "Proweaver",
    period: "Jun 2015 to Sept 2015",
    description:
      "Built WordPress sites from scratch, handling both design implementation and functionality.",
  },
];

export const contactRows = [
  {
    icon: "mail" as const,
    label: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: "behance" as const,
    label: "behance.net/queenieloda5ae",
    href: BEHANCE_PROFILE,
    external: true,
  },
  {
    icon: "pin" as const,
    label: "Cebu City, Philippines",
    href: null,
    external: false,
  },
];
