/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tanish Malekar",
  title: "Hi all, I'm Tanish.",
  subTitle: emoji(
    "I’m a builder at heart — a CS grad student at Stony Brook University turning ideas into scalable systems, from distributed systems to AI to full-stack development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tanish-malekar",
  linkedin: "https://www.linkedin.com/in/tanish-malekar",
  gmail: "tanishmalekar32@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/stonyLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2025 - May 2027",
    },
    {
      schoolName: "Vellore Institute of Technology, India",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Bajaj Finserv Health",
      companylogo: require("./assets/images/bajajLogo.png"),
      date: "Jul 2023 – Jul 2025",
      descBullets: [
        "Built a health camp booking platform, handling 100k+ bookings for 15+ enterprise clients (Meta, LinkedIn, Amex etc.)",
        "Built an agentic chatbot using Python, LangChain, and Gemini-2.5-Pro to automatically add, update, and remove lab tests from medical catalog, cutting catalog update time by 70%",
        "Designed an agentic order flow system with an MCP server, enabling chat-based medicine ordering and boosting order volume by 2.5x.",
        "Designed a fault-tolerant refund flow with AWS SQS (circuit breakers, DLQs), ensuring 99.9% reliability for 1K+ monthly transactions",
        "Enabled real-time search on 1M+ lab tests by replacing cron sync with Kafka CDC, cutting latency from 2 hrs to near real-time",
        "Constructed an OCR pipeline for handwritten prescriptions using Python, Azure Form Recognizer, OpenCV, and GPT-3.5, achieving 92%+ accuracy on multilingual, unstructured inputs",
        "Set up ELK-based observability (tracing, dashboards, alerts) for 7+ services, reducing MTTR by 40%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bajaj Finserv Health",
      companylogo: require("./assets/images/bajajLogo.png"),
      date: "Jan 2023 – Jun 2023",
      descBullets: [
        "Developed a virtual patient queue, supporting 900+ concurrent users with priority-based ranking",
        "Built CI/CD pipelines (Jenkins) for 5+ services; improved quality with 85% test coverage and SonarQube integration"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Protal",
      companylogo: require("./assets/images/protalLogo.jpeg"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Led a 3-member team to build a talent discovery platform (React, Node.js, MongoDB), deployed on AWS Kubernetes (EKS, EC2, ALB, S3)",
        "Pitched to university incubator, securing $6k in funding"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects & Publications",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Leadership 🏆 "),

  achievementsCards: [
    {
      title: "HackRx 3.0 Winner",
      subtitle:
        "Built SafeSupportAI, an AI-powered platform for women safety, winning amongst 300+ teams.",
      image: require("./assets/images/hackrxLogo.png"),
      imageAlt: "HackRx Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Runner up at VIT Web Development Hackathon",
      subtitle:
        "Built KisanConnect, a digital marketplace connecting farmers and consumers, securing 2nd place amongst 100+ teams.",
      image: require("./assets/images/vitLogo.png"),
      imageAlt: "VIT Logo",
      footerLink: [
       
      ]
    },

    {
      title: "Software Lead, SEDS VIT Project",
      subtitle: "Led a 5+ member team in the Drone Development Club at VIT, sponsored by SED",
      image: require("./assets/images/sedsLogo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Tanish-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (934) 255-2859",
  email_address: "tanishmalekar32@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
