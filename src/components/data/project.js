import project1 from "@/assets/img/project1.png";
import project2 from "@/assets/img/project2.png";
import project3 from "@/assets/img/project3.png";
import project4 from "@/assets/img/project4.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Clothing Store",
    img: project1,
    technology: [
      "react js",
      "HTML",
      "FakeStore API",
      "Javascript",
      "PayPal",
      "TailwindCSS",
      "Bootstrap",
      "ThemeWagon",
    ],
    url: "https://react-ecommerce-six-sandy.vercel.app/",
    description: [
      { type: "heading", content: "Overview" },
      {
        type: "paragraph",
        content:
          "An e-commerce website for clothing and fashion accessories. Using an open source API known as FakeStore API",
      },

      { type: "heading", content: "Features" },
      {
        type: "list",
        content: [
          "Add products to cart function",
          "view product in detail",
          "Secure PayPal checkout",
          "Responsive design",
        ],
      },

      { type: "heading", content: "Deploy" },
      {
        type: "paragraph",
        content:
          "Deployed using AWS Amplify. AWS Amplify is a cloud-based hosting service designed for modern web applications. It provides fast, secure, and scalable hosting for both static and dynamic sites, with built-in support for continuous deployment from Git repositories. Ideal for frameworks like React, Vue, and Angular, Amplify automatically manages build, deploy, and hosting processes, making it easy to launch and maintain web projects with minimal setup.",
      },
    ],
  },
  {
    id: 2,
    title: "Luxy Watch",
    img: project2,
    technology: ["HTML", "CSS", "Javascript", "Vercel"],
    url: "https://luxy-watch-web.vercel.app/",
    description: [
      { type: "heading", content: "Overview" },
      {
        type: "paragraph",
        content:
          "Welcome to Luxy Watch, a sleek and modern luxury watch showcase built with HTML, CSS, and JavaScript. This project aims to provide a user-friendly interface for displaying a curated collection of premium timepieces.",
      },

      { type: "heading", content: "Features" },
      {
        type: "list",
        content: [
          "Responsive Design: Optimized for both desktop and mobile views.",
          "Product Showcase: Display a variety of luxury watches with detailed information.",
          "Interactive Elements: Includes user interaction features like toggles and forms.",
        ],
      },

      { type: "heading", content: "Deploy" },
      {
        type: "paragraph",
        content:
          "Deployed a fully functional WordPress-based eCommerce website using InfinityFree, a free hosting platform. The site includes product listings, shopping cart functionality, and secure checkout. Optimized for performance within InfinityFree's limitations, with custom themes and essential WooCommerce integrations",
      },
    ],
  },
  {
    id: 3,
    title: "VYREX Store",
    img: project3,
    technology: ["wordpress", "Template", "Infinity Free", "Pay Pal"],
    url: "https://vyrex.infinityfreeapp.com/",
    description: [
      { type: "heading", content: "Overview" },
      {
        type: "paragraph",
        content:
          "An e-commerce website for clothing and fashion accessories. Using an open source API known as FakeStore API",
      },

      { type: "heading", content: "Features" },
      {
        type: "list",
        content: [
          "Add products to cart function",
          "Add to wishlist",
          "Language Switch",
          "view product in detail",
          "PayPal checkout",
          "Responsive design",
        ],
      },
      { type: "heading", content: "Key Pluggins" },
      {
        type: "list",
        content: [
          "Elementor",
          "Fonts Plugin",
          "Loginpress",
          "Payment Plugins",
          "TranslatePress",
          "Woocommerce",
          "WPvivid backup",
          "YITH WooCommerce wishlist",
        ],
      },

      { type: "heading", content: "Deploy" },
      {
        type: "paragraph",
        content:
          "Deployed a fully functional WordPress-based eCommerce website using InfinityFree, a free hosting platform. The site includes product listings, shopping cart functionality, and secure checkout. Optimized for performance within InfinityFree's limitations, with custom themes and essential WooCommerce integrations",
      },
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio",
    img: project4,
    technology: [
      "React",
      "Tailwind",
      "Magic Ui",
      "HTML",
      "Vercel",
      "Aceternity Ui",
    ],
    url: "https://rithhorm-portfolio.vercel.app/",
    description: [
      { type: "heading", content: "Overview" },
      {
        type: "paragraph",
        content:
          " This portfolio website, built with React and powered by Vite, is a modern, fast, and responsive single-page application designed to showcase Rith Horm's professional profile, development skills, and project work. It serves as an interactive résumé and personal brand platform, offering visitors a clean and intuitive user experience. The portfolio is designed with a developer-first mindset, highlighting real-world projects, tech stacks, and roles in a clear and accessible layout. Whether viewed on a desktop or mobile device, it remains polished and performant, thanks to its lightweight framework and optimized build setup",
      },

      { type: "heading", content: "Features" },
      {
        type: "list",
        content: [
          "Beautifully styled UI with modern design aesthetics.",
          "Focus on simplicity, readability, and visual hierarchy.",
          "Mobile-friendly and fully responsive design using Tailwind CSS.",
          "Optimized for different screen sizes and devices.",
          "Lightning-fast page loads and smooth transitions.",
        ],
      },
      { type: "heading", content: "Pages" },
      {
        type: "list",
        content: [
          "Home Page/ Landing page: The landing section introduces visitors to myself with a professional title and a brief tagline. It features a clean design with a prominent call-to-action button that encourages users to explore further.",
          "About Me Page: This section provides an overview of my background, including education and personal interests that offers insight into my journey as a developer and passion for technology.",
          "Projects Page: The Projects section showcases a curated selection of Rith Horm's work. Each project entry includes project title, description, technologies used to build and link to direct access to the live project",
          "Contact: The Contact section offers multiple ways for visitors to get in touch with me. It includes contact form, email address and social media links.",
          "Study Resource Page: The Study Resources section is where I share the  videos, tutorials, and tools that have helped me learn and grow as a developer. I put this together to keep track of what I’ve found useful and also to help other students, developers, or anyone looking to improve their skills.",
        ],
      },

      { type: "heading", content: "Deploy" },
      {
        type: "paragraph",
        content:
          "This portfolio is deployed using Vercel a fast and easy platform for hosting frontend applications.",
      },
    ],
  },
];
export default projects;
