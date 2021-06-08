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
    description:
      "The project is a basic todo app. It is simple static webpage to manage your tasks. The project is based on ReactJS with Redux state management. The components used in the project are from Material-UI: A popular React UI framework.",
  },
  {
    id: 3,
    link: "https://github.com/manishsencha/cpp-compiler",
    demo: "https://cpp-compiler.herokuapp.com",
    image: require("../Images/cppcompiler.png").default,
    title: "CPP Compiler",
    description:
      "This is an online C++ compiler. Frontend for the project is developed using React and the editor used in the project is monaco editor which is same editor that powers VS Code Editor. Backend for the project is developed using Express framework. The API used in the project for compiling the code is used from https://godbolt.org/",
  },
  {
    id: 4,
    link: "https://github.com/manishsencha/typing-test",
    demo: "https://manishsencha.github.io/typing-test",
    image: require("../Images/typingtest.png").default,
    title: "Typing test",
    description:
      "This is a typing test program. The project is built using HTML, CSS, JavaScript and Bootstrap. The time to take test is 60 seconds and after completing it shows result with incorrect words, correct words and accuracy.",
  },
  {
    id: 5,
    link: "https://github.com/manishsencha/movies-search",
    demo: "https://manishsencha.github.io/movies-search",
    image: require("../Images/moviessearch.png").default,
    title: "Movies search",
    description:
      "This is movie search webpage. The program is developed using React. The api used in the project is OmdbApi for fetching the movies.",
  },
];
export default projectDetails;
