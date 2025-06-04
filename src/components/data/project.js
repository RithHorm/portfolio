import project1 from "@/assets/img/project1.png";
import project2 from "@/assets/img/project2.png";
import project3 from "@/assets/img/project3.png";
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
    url: "https://main.d2aa8sm0is0byf.amplifyapp.com/",
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
];
export default projects;
