// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "HELLO AK",
    firstName: "PRO",
    LastName: "TEAM",
    btnText: "Connect ",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "TEAM",
    // subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "AKASH RATHOD",
        para: "FOUNDER & CEO",
        logo: figma,
      },
      {
        name: "RAHUL CHAVAN",
        para: "CFO & MARKETING MANAGER",
        logo: nodejs,
      },
      {
        name: "LAXMAN CHAVAN",
        para: "CTO & INVESTOR",
        logo: ps,
      },
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "SERVICES",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting custom web solutions that elevate your brand and drive business growth. Our team of skilled developers specializes in delivering innovative, user-centric websites that captivate your audience and achieve your online goals.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Our UI/UX design team specializes in crafting visually stunning and intuitive digital experiences. We combine aesthetics and functionality to create designs that not only look great but also seamlessly guide users towards their goals. By understanding your target audience and business objectives, we deliver designs that leave a lasting impression and drive conversions.",
        logo: services_logo2,
      },
      {
        title: "App Development",
        para: "Our app development team specializes in creating innovative and user-friendly mobile applications. We leverage the latest technologies and industry best practices to deliver solutions that meet your specific requirements and exceed user expectations. Whether you need a native iOS or Android app, or a cross-platform solution, we have the expertise to bring your vision to life.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "PROJECTS",
    // subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "ABOUT OUR COMPANY",
    // subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "[ PROTEAM ] is a dynamic and innovative organization dedicated to [mention your company's core purpose or mission]. Founded in [year], we have rapidly grown into a leading provider of [mention your company's products or services].",
        // img: avatar1,
        // name: "JOHN DOE",
      },
      {
        review:
          "Our team is comprised of passionate and talented individuals who share a commitment to excellence. We believe in fostering a collaborative and supportive work environment where creativity and innovation can thrive. Our diverse skill set and expertise allow us to deliver exceptional solutions that meet the evolving needs of our clients.",
        // img: avatar1,
        // name: "JOHN DOE",
      },
      {
        review:
          "At the heart of our business is a strong focus on [mention your company's key values or principles]. We are committed to [mention specific values, such as sustainability, ethical practices, or customer satisfaction]. These values guide our decision-making and shape our interactions with our stakeholders.",
        // img: avatar1,
        // name: "JOHN DOE",
      },
      {
        review:
          "Our success is driven by our ability to [mention your company's unique strengths or competitive advantages]. Whether it's our cutting-edge technology, our exceptional customer service, or our dedication to innovation, we strive to set the industry standard.",
        // img: avatar1,
        // name: "JOHN DOE",
      },
      {
        review:
          "We are proud of our accomplishments and look forward to continuing to make a positive impact on [mention the industry or community you serve]. By staying ahead of the curve and embracing new opportunities, we are confident in our ability to achieve long-term success and growth.",
        // img: avatar1,
        // name: "JOHN DOE",
      },
      
    ],
  },
  Hireme: {
    // title: "OUR TEAM",
    // subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "is a technology conglomerate that oversees a family of innovative companies. As a parent company, we provide strategic guidance, financial support, and shared resources to foster growth and innovation within our subsidiaries. Our diverse portfolio spans various industries, working together to create groundbreaking solutions that [mention your company's overall mission or goal",
    btnText: " Learn More",
  },
  Contact: {
    title: "",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 8010586321",
        icon: MdCall,
        link: "https://wa.me/8010586321",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
