const projectDetails = [
  {
    id: 1,
    title: "CPP Compiler",
    description:
      "This is an online C++ compiler. Frontend for the project is developed using React and the editor used in the project is monaco editor which is same editor that powers VS Code Editor. Backend for the project is developed using Express framework. The API used in the project for compiling the code is used from https://godbolt.org/",
    github: "https://github.com/manishsencha/cpp-compiler",
    project: "https://cpp-compiler.herokuapp.com/",
    image:
      require("./Images/cppcompiler.png")
        .default,
  },
  {
    id: 2,
    title: "Movies Search",
    description:
      "This is movie search webpage. The program is developed using React. The api used in the project is OmdbApi for fetching the movies.",
    github: "https://github.com/manishsencha/movies-search",
    project: "https://manishsencha.github.io/movies-search",
    image:
      require("./Images/moviessearch.png")
        .default,
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "The project is a basic todo app. It is simple static webpage to manage your tasks. The project is based on ReactJS with Redux state management. The components used in the project are from Material-UI: A popular React UI framework.",
    github: "https://github.com/manishsencha/todo-app",
    project: "https://github.com/manishsencha/Todo-app",
    image:
      require("./Images/todoapp.png")
        .default,
  },
  {
    id: 4,
    title: "Typing Test",
    description:
      "This is a typing test program. The project is built using HTML, CSS, JavaScript and Bootstrap. The time to take test is 60 seconds and after completing it shows result with incorrect words, correct words and accuracy.",
    github: "https://github.com/manishsencha/typing-test",
    project: "https://github.com/manishsencha/typing-test",
    image:
      require("./Images/typingtest.png")
        .default,
  },
  {
    id: 5,
    title: "URL-Shortener",
    description:
      'This project is developed to shorten long URLs. It generates a short URL based on input long URL. The project is based on ExpressJS framework for web and mobile applications. It is also connected to mongodb database to store the URLs. An NPM package called "shortid" was used to generate short URLs.',
    github: "https://github.com/manishsencha/URL-Shortener",
    project: "https://m-urlshortener.herokuapp.com/",
    image:
      require("./Images/urlshortener.png")
        .default,
  },
  {
    id: 6,
    title: "Aakhri Paste",
    description: "The web application is built to share any code/text. A person just have to visit the webpage and write the code/text inside the text editor and press Ctrl+S to save and then a link to that code/text is automatically generated which can be shared with anyone. If a person tries to access a non existing link he/she will be automatically redirected to the main web page. The frontend of the project is build in ReactJS. The editor used in the project is monaco editor, it is the same editor which powers VS Code. The backend of the project is built using Express framework and also mongodb is used as database to store the links and the corresponding code.",
    github: "https://github.com/manishsencha/aakhripaste",
    project: "https://aakhripaste.herokuapp.com",
    image:
      require("./Images/aakhripaste.png")
        .default,
  },
];
export default projectDetails;
