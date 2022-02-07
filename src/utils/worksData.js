const worksData = [
  {
    id: 1,
    title: "My Blog Multi-Author (MERN)",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1623130196/projectImage/nv7m6t3kggrepn5cqo1j.png",
    description: "This is a MERN Multi-Author Bloggin web app. Where users are able to register for creating any kind of article. But any user can read any kind of article. Register users can set and edit their profile, they can create, edit and delete their artilces. Register users also able to follow and unfollow other registered users and they can like, dislike and comment on other registered user's articles. It has a dashboard for maintaining and monitoring logged-in user activities.",
    features: ["Multi-author blogging website.", "User Read and create an article.", "User can filter and Search any articles.", "Any user can see popular authors and popular articles.", "User has to register for create an Author profile.", "Before Complete registration, the user email will be verify.", "The author can set and edit her profile.", "An author can bookmark of other authors’ articles.", "Author can create, edit and delete her created article.", "A registered user can like, dislike and comment on any article.", "Registered users can follow and unfollow other registered users.", "It has a dashboard for maintenance and monitoring author activities."],
    tools: ["SASS", "Bootstrap4", "Material UI", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Mongoose.js", "Custom Authentication"],
    githubUrl: 'https://github.com/Jamir45/My-Blog-Frontend',
    siteUrl: 'https://my-blog-article.web.app/'
  },
  {
    id: 2,
    title: "Doctor's Garden (MERN)",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1623229718/projectImage/ldqlliklfyzdmbkuzgl5.png",
    description: "A Single-page MERN Stack hospital web-app. It has two dashboards. One is for the patient, where people can get an appointment and after the appointed patient can see their prescription where the doctor will give the list of medicines. Another dashboard is for doctors, where doctors can see the list of all the appointed patients. Here the doctors will give the necessary medicine to the patient and if the doctor wants, then he can cancel the patient's appointment.",
    features: ["Separate Patient registration.", "Separate doctor registration.", "Online Appointment booking for patinet.", "Online appointment making for patients.", "Doctor will review the patient's appointments.", "Doctor Can approve or reject the patient.", "Doctor can see appointed the patient's list.", "Separate Doctor Dashboard.", "Separate Patient Dashboard to monitoring appointment status.", "Doctor can provide prescription for each patient online."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    githubUrl: 'https://github.com/Jamir45/doctors-garden-frontend',
    siteUrl: 'https://doctor-garden1.web.app/'
  },
  {
    id: 3,
    title: "Red Onion Restaurant (MERN)",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132011/projectImage/x7k77o8spqizx0iz6iwl.png",
    description: "A single page MERN Stack restaurant app where people are able to select any kind of food on the shop cart. After that, they can order the cart food by check out. Before place an order, they have to provide their shipping information and after successfully placed an order they can see their history of order.",
    features: ["Users can select any food in the cart.", "They can order food from the cart.", "Users have to sign up to place an order.", "Pay online using their credit card.", "After order, they can see the order details.", "Every logged-in user has a profile page.", "Logged in users can see their previous order history."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
    githubUrl: 'https://github.com/Jamir45/-Red-Onion-Restaurant-Frontend',
    siteUrl: 'https://red-onion-restaurant-25d46.web.app/'
  },
  {
    id: 4,
    title: "Aircnc Website",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1617771182/projectImage/xe1vcjevl3akbsj92yzd.png",
    description: "A single page MERN Stack Resort searching and booking app where people are able to search any holes and resort. After that, they can book their selected place by providing it there information. Before booking the place, they have to log in here and they have to pay by the use of their credit card online. If they successfully book their selected place then they can see the booking history.",
    features: ["Search any hotel and resort.", "Select places after search.", "Users have to provide their information for booking.", "Users have to log in before book a selected place.", "Pay online using your credit card.", "USer can see their booking list."],
    tools: ["SASS", "Bootstrap4", "Material UI", "ReactJS", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe.js"],
    githubUrl: 'https://github.com/Jamir45/Aircnc-Frontend',
    siteUrl: 'https://aircnc-944b7.web.app/'
  },
  {
    id: 5,
    title: "Power X Gym Website",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1615888179/projectImage/uqhlexelt3sufcsnbefa.png",
    description: "This is a Gym Organization Website. Where people are able to see their training programs of a gym organization and then they can choose the perfect training for them from here. This gym organization have three training plan, the user can select the best plan for the membership on gym organization and user have to pay by credit card when want to purchase the membership plan.",
    features: ["People can see training programs.", "Choose the perfect training for them.", "Purchase the training programs for the membership.", "Pay online using users credit cards."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "Stripe.js"],
    githubUrl: 'https://github.com/Jamir45/Power-X-Gym-Website',
    siteUrl: 'https://power-xgym.netlify.app/'
  },
  {
    id: 6,
    title: "Travel Guru Web",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560358/projectImage/wftbqwsvzwhgydfwkvuy.png",
    description: "A single-page Full Stack traveling web app. Here the people can search the most spectacular place. With that, they also able to see the list of hotels on that location. Finally, they can book any hotel of their chosen spectacular place.",
    features: ["Search the most spectacular place.", "Chose the selected place.", "Finally book any hotel."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "Firebase"],
    githubUrl: 'https://github.com/Jamir45/travel-guru-web',
    siteUrl: 'https://travel-guruapp.netlify.app/'
  },
  {
    id: 7,
    title: "E-commerce Website (MERN)",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560324/projectImage/lgfi1n5uraicj2rz9hvx.png",
    description: "This is a MERN Stack E-commerce web app. Where people are able to select any kind of product on the shopping cart. After that, the people can order the added cart product by check out. But before place an order, they have to sign in on here and they have to provide their shipping information. When their order successfully placed, then they can see their history list of the orders.",
    features: ["Search Any Product.", "Select Any Product in the Cart.", "Order Products from the Cart.", "Have to Sign Up to place an order.", "Pay online using users’ credit cards.", "Users can see their logged-in profile.", "Users can see their order details."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "NodeJS", "ExpressJS", "Firebase", "MongoDB"],
    githubUrl: 'https://github.com/Jamir45/ecommmerce-frontend',
    siteUrl: 'https://ecommerce-simple.web.app/'
  },
  {
    id: 8,
    title: "Weather App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611565490/projectImage/rrkmt6fim0iaasbuihlg.png",
    description: "This is a web app for weather. Here the people can want the weather condition of their present location and any location. Besides they also can search the weather condition of any country location here.",
    features: ["Search The Any Place Of Any Country.", "See Their Selected Place Weather Information."],
    tools: ["Bootstrap4", "Material UI", "ReactJS", "Weather API"],
    githubUrl: 'https://github.com/Jamir45/weather-app',
    siteUrl: 'https://jamir-weather.web.app/'
  },
  {
    id: 9,
    title: "Add Contact List",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560312/projectImage/ep5cro0sdb0telm98eok.png",
    description: "This a pure vanilla JavaScript App, that I have created by the use of the OOP concept. Where people are able to add their contact number which is saved on their local Store. Even they can delete their saved contact.",
    features: ["Add Contact.", "Remove Contact.", "Search The Added Contact."],
    tools: ["HTML", "CSS", "Materialize CSS", "JavaScript", "OOP Concept"],
    githubUrl: 'https://github.com/Jamir45/add-contact-list-app-by-OOP-',
    siteUrl: 'https://add-contact-list.netlify.app'
  },
  {
    id: 10,
    title: "Calculator App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1611560311/projectImage/mzw0doh86vvjjpcqo8ks.png",
    description: "This a pure vanilla JavaScript Project, which is a calculator web app. It's I have created by the use of the OOP concept. Where people will be able to solve their general calculation.",
    features: [],
    tools: ["HTML", "CSS", "JavaScript", "OOP Concept"],
    githubUrl: 'https://github.com/Jamir45/calculator-app-by-OOP',
    siteUrl: 'https://calculatorapp-usedby-oop-concept.netlify.app/'
  },
  {
    id: 11,
    title: "Employees Salary App",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132023/projectImage/ibjvw9jfq2x39fufzpwx.png",
    description: "A Single-page web app for the company salary system. The author can give salary to every employee in her company in here. At the same time, the author can see her company's revenue and total balance. ",
    features: [],
    tools: ["HTML", "CSS", "Bootstrap4", "ReactJS"],
    githubUrl: 'https://github.com/Jamir45/employees-payment-informatiom',
    siteUrl: 'https://employees-payment-information.netlify.app/'
  },
  {
    id: 12,
    title: "Hot Gadget",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132018/projectImage/o4cb6crezsisdzxgvwhw.png",
    description: "This is a simple and static one-page e-commerce website. It is an XD to HTML conversion. It's have designed by just HTML, CSS, and Bootstrap4.",
    features: [],
    tools: ["HTML", "CSS", "Bootstrap4"],
    githubUrl: 'https://github.com/Jamir45/Hot-Gadget',
    siteUrl: 'https://jamir45.github.io/Hot-Gadget/'
  },
  {
    id: 13,
    title: "Panda Commerce",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132025/projectImage/ru0scd39jaxtm7qg2ivw.png",
    description: "It's another simple and static one-page e-commerce website. It is an XD to HTML conversion. It's have designed by just HTML, CSS, and Bootstrap4.",
    features: [],
    tools: ["HTML", "CSS", "Bootstrap4"],
    githubUrl: 'https://github.com/Jamir45/panda-commerce',
    siteUrl: 'https://jamir45.github.io/panda-commerce/'
  },
  {
    id: 14,
    title: "Portfolio Website",
    image: "https://res.cloudinary.com/dj7k9b8ps/image/upload/v1606132015/projectImage/eybdozwz99exjwasjrc0.png",
    description: "This is the simplest one-page portfolio website. I have designed it without any framework/libraries or any third-party plugins. It's created just by HTML and CSS.",
    features: [],
    tools: ["HTML", "CSS"],
    githubUrl: 'https://github.com/Jamir45/portfolio-website',
    siteUrl: 'https://jamir45.github.io/portfolio-website/'
  }
]


export default worksData;