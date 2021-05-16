const projectDetails = [
  {
    id: 1,
    link: "https://github.com/manishsencha/URL-Shortener",
    image: require("../Images/UrlShortener.png").default,
    title: "URL-Shortener",
    demo: "https://m-urlshortener.herokuapp.com/",
    description:
      'This project is developed to shorten long URLs. It generates a short URL based on input long URL. The project is based on ExpressJS framework for web and mobile applications. It is also connected to mongodb database to store the URLs. An NPM package called "shortid" was used to generate short URLs.',
  },
  {
    id: 2,
    link: "https://github.com/manishsencha/Todo-app",
    demo: "https://manishsencha.github.io/todo-app",
    image: require("../Images/Todo-app.png").default,
    title: "Todo-App",
    description: "The project is a basic todo app. It is simple static webpage to manage your tasks. The project is based on ReactJS with Redux state management. The components used in the project are from Material-UI: A popular React UI framework.",
  },
];
export default projectDetails;
