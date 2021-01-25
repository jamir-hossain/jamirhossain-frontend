const worksData = [
  {
    id: 1,
    title: "Doctor's Portal",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132023/projectImage/thd5twb8gxtnyzztqdbf.png",
    description:"A Single-page MERN Stack hospital web-app. It has two dashboards. One is for the patient, where people can get an appointment and after the appointed patient can see their prescription where the doctor will give the list of medicines. Another dashboard is for doctors, where doctors can see the list of all the appointed patients. Here the doctors will give the necessary medicine to the patient and if the doctor wants, then he can cancel the patient's appointment.",
    tools: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Bootstrap4"],
    githubUrl:'https://github.com/Jamir45/Doctor-Portal-Frontend',
	  siteUrl:'https://doctorportal.netlify.app/'
  },
  {
    id: 2,
    title: "Ema-John E-commerce",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560324/projectImage/lgfi1n5uraicj2rz9hvx.png",
    description:"This is a MERN Stack E-commerce web app. Where people are able to select any kind of product on the shopping cart. After that, the people can order the added cart product by check out. But before place an order, they have to sign in on here and they have to provide their shipping information. When their order successfully placed, then they can see their history list of the orders.",
    tools: ["ReactJS", "NodeJS", "ExpressJS", "Firebase", "MongoDB", "Bootstrap4", "Material UI"],
    githubUrl:'https://github.com/Jamir45/ecommmerce-frontend',
	  siteUrl:'https://ecommerce-simple.web.app/'
  },
  {
    id: 3,
    title: "Red Onion foods",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132011/projectImage/x7k77o8spqizx0iz6iwl.png",
    description:"A single page MERN Stack restaurant app where people are able to select any kind of food on the shop cart. After that, they can order the cart food by check out. Before place an order, they have to provide their shipping information and after successfully placed an order they can see their history of order.",
    tools: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Bootstrap4"],
    githubUrl:'https://github.com/Jamir45/-Red-Onion-Restaurant-Frontend',
	  siteUrl:'https://redonion-restaurant.netlify.app/'
  },
  {
    id: 4,
    title: "Travel Guru Web",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560358/projectImage/wftbqwsvzwhgydfwkvuy.png",
    description:"A single-page Full Stack traveling web app. Here the people can search the most spectacular place. With that, they also able to see the list of hotels on that location. Finally, they can book any hotel of their chosen spectacular place.",
    tools: ["ReactJS", "Firebase", "Bootstrap4", "Material UI"],
    githubUrl:'https://github.com/Jamir45/travel-guru-web',
	  siteUrl:'https://travel-guruapp.netlify.app/'
  },
  {
    id: 5,
    title: "Weather App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611565490/projectImage/rrkmt6fim0iaasbuihlg.png",
    description:"This is a web app for weather. Here the people can want the weather condition of their present location and any location. Besides they also can search the weather condition of any country location here.",
    tools: ["ReactJS", "Weather API", "Bootstrap4", "Material UI"],
    githubUrl:'https://github.com/Jamir45/weather-app',
	  siteUrl:'https://jamir-weather.web.app/'
  },
  {
    id: 6,
    title: "Add Contact List",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560312/projectImage/ep5cro0sdb0telm98eok.png",
    description:"This a pure vanilla JavaScript App, that I have created by the use of the OOP concept. Where people are able to add their contact number which is saved on their local Store. Even they can delete their saved contact.",
    tools: ["HTML", "CSS", "Materialize CSS", "JavaScript", "OOP Concept"],
    githubUrl:'https://github.com/Jamir45/add-contact-list-app-by-OOP-',
	  siteUrl:'https://add-contact-list.netlify.app'
  },
  {
    id: 7,
    title: "Calculator App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560311/projectImage/mzw0doh86vvjjpcqo8ks.png",
    description:"This a pure vanilla JavaScript Project, which is a calculator web app. It's I have created by the use of the OOP concept. Where people will be able to solve their general calculation.",
    tools: ["HTML", "CSS", "JavaScript", "OOP Concept"],
    githubUrl:'https://github.com/Jamir45/calculator-app-by-OOP',
	  siteUrl:'https://calculatorapp-usedby-oop-concept.netlify.app/'
  },
  {
    id: 8,
    title: "Employees Salary App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132023/projectImage/ibjvw9jfq2x39fufzpwx.png",
    description:"A Single-page web app for the company salary system. The author can give salary to every employee in her company in here. At the same time, the author can see her company's revenue and total balance. ",
    tools: ["HTML", "CSS", "Bootstrap4", "ReactJS"],
    githubUrl:'https://github.com/Jamir45/employees-payment-informatiom',
	  siteUrl:'https://employees-payment-information.netlify.app/'
  },
  {
    id: 9,
    title: "Hot Gadget",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132018/projectImage/o4cb6crezsisdzxgvwhw.png",
    description:"This is a simple and static one-page e-commerce website. It is an XD to HTML conversion. It's have designed by just HTML, CSS, and Bootstrap4.",
    tools: ["HTML", "CSS", "Bootstrap4"],
    githubUrl:'https://github.com/Jamir45/Hot-Gadget',
	  siteUrl:'https://jamir45.github.io/Hot-Gadget/'
  },
  {
    id: 10,
    title: "Panda Commerce",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132025/projectImage/ru0scd39jaxtm7qg2ivw.png",
    description:"It's another simple and static one-page e-commerce website. It is an XD to HTML conversion. It's have designed by just HTML, CSS, and Bootstrap4.",
    tools: ["HTML", "CSS", "Bootstrap4"],
    githubUrl:'https://github.com/Jamir45/panda-commerce',
	  siteUrl:'https://jamir45.github.io/panda-commerce/'
  },
  {
    id: 11,
    title: "Portfolio Website",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132015/projectImage/eybdozwz99exjwasjrc0.png",
    description:"This is the simplest one-page portfolio website. I have designed it without any framework/libraries or any third-party plugins. It's created just by HTML and CSS.",
    tools: ["HTML", "CSS"],
    githubUrl:'https://github.com/Jamir45/portfolio-website',
	  siteUrl:'https://jamir45.github.io/portfolio-website/'
  }
]


export default worksData;