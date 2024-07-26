/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishwaa M S",
  description:
    "A passionate individual with strong expertise in backend development and consistently pushing my boundaries in the world of technology and innovation.",
  og: {
    title: "Vishwaa M S Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Vishwaa M S",
  logo_name: "Vishwaa M S",
  // nickname: "layman_brother",
  subTitle:
    "A passionate individual with strong expertise in backend development and consistently pushing my boundaries in the world of technology and innovation.",
  resumeLink:
    "https://drive.google.com/file/d/1fPBl7rJh8pq4NXzPZsF_Ulb157hTxzv4/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1fPBl7rJh8pq4NXzPZsF_Ulb157hTxzv4/view?usp=sharing",
  githubProfile: "https://github.com/Vishwaa-MS",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Vishwaa-MS",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishwaams/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vishwaams.03@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itsvissh.03/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "FullStackImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Technologies / Frameworks",
      fileName: "FullStackImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: {
            color: "#61dbfb",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#008000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos-flask",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Developer Tools",
      fileName: "FullStackImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "devicon:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "devicon:anaconda",
          style: {
            color: "#61dbfb",
          },
        },

        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#008000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/vishwaams09",
    },
    {
      siteName: "GeekForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.geeksforgeeks.org/user/vishwa87zs/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/vishwaa_m_s",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology, Vellore",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      grade: 9.02 + " CGPA",
      logo_path: "vit_logo.jpg",
      alt_name: "VIT VELLORE",
      duration: "2021 - 2025",
    },
    {
      title: "Kendriya Vidyalaya CBSE",
      subtitle: "12th",
      grade: 84.8 + " % ",
      logo_path: "kv_logo.jpg",
      alt_name: "VIT VELLORE",
      duration: "2021 - 2025",
    },
    {
      title: "Hans Roever Public School CBSE",
      subtitle: "10th",
      grade: 90.4 + " % ",
      logo_path: "hrps_logo.jpg",
      alt_name: "VIT VELLORE",
      duration: "2021 - 2025",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "NodeJS - The Complete Guide",
      subtitle: "Udemy",
      logo_path: "UC-516caf22-2255-494b-881e-735eb92e0c3c.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1eV6boLLzuNq5zPTe4Hi4eZ8Pa1Fu2-A-/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Python for Machine learning and Deep Learning",
      subtitle: "IIT Kanpur",
      logo_path: "IITK_CERTIFICATE -VISHWAA_M_S.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1RbExGw3B1cEs-dk16PYOPVXieD3DpoPo/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Java Data Structures and Algorithms",
      subtitle: "Udemy",
      logo_path: "UC-8631bac7-68c4-4bd6-b8cc-2c72490d1c06.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1pF6QwkJZhHKPxkqAJDz_5X0J_rGWawWU/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Bootcamp",
      subtitle: "Udemy",
      logo_path: "UC-d8477c13-2403-4831-af0c-b82b430a348b.jpg",
      certificate_link:
        "https://drive.google.com/file/d/18pgnoEhQoyb1d8ZBnyF03VApgN-755Ps/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "A comprehensive overview of my professional journey, featuring roles, and skills in software development and technology.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Fellowships",
      work: true,
      experiences: [
        {
          title: "Software Engineering Fellow",
          company: "Headstarter AI.",
          company_url: "https://headstarter.co/",
          logo_path: "headstarterai_logo.jpg",
          duration: "July 2024 - Present",
          location: "Remote",
          description:
            "Building AI projects, Networking with professionals, Hackathons, Mock Interviews, IRL Meetups, Meeting CEO's",
          color: "#000000",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Technology Intern",
          company: "Indian Telephone Industries Limited",
          company_url: "https://www.itiltd.in/",
          logo_path: "iti_logo.png",
          duration: "August 2023",
          location: "Bangalore, Karnataka",
          description:
            "Played a role at ITI Limited Telecom Testing Lab, where I gained hands-on experience in EMI/EMC and 3D printing lab. Contributed to PCB design and manufacturing processes, including drilling, lamination, exposing, developing, plating, and solder masking. Assisted in projects like Digital Mobile Radios",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of diverse and innovative projects, highlighting my technical skills and creativity in various domains.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "10574704",
      name: "Robust Iris Detection Using Machine Learning",
      createdAt: "May 2024",
      description:
        "Co-authored to study and compare YOLO, ResNet, VGGNet and proposed CNN model.",
      url: "https://ieeexplore.ieee.org/document/10574704",
    },
    {
      id: "10574661",
      name: "Enhancing RIS-aided D2D communication for IoT applications ",
      createdAt: "May 2024",
      description:
        "Co-authored in optimizing RIS-aided D2D communication data rates under non-convex problems for IoT",
      url: "https://ieeexplore.ieee.org/document/10574661",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vishwaa_img_.png",
    description:
      "Get in touch for collaboration, inquiries, or to learn more about my work and expertise.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
