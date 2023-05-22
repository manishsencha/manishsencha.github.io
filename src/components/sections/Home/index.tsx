import React from "react";
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons";
import axios from "axios";

interface Social {
  name: string;
  url?: string;
  icon: IconType;
}
const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/manishsencha", icon: BsGithub },
  {
    name: "StackOverflow",
    url: "https://stackoverflow.com/users/15069385/manish-sencha",
    icon: BsStackOverflow,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/manish-sencha",
    icon: BsLinkedin,
  },
  {
    name: "Mail",
    url: "mailto:manishsencha2001@gmail.com",
    icon: FiMail,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/manish.sencha.0304",
    icon: BsFacebook,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/manishsencha0140",
    icon: BsInstagram,
  },
];
function Home() {
  React.useEffect(() => {
    async function fetchRepos() {
      try {
        await axios
          .get("https://api.github.com/users/manishsencha/repos?per_page=1000", {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          })
          .then((res) => console.log(res.data));
      } catch (e) {
        console.log("ERROR : ", e);
      }
    }
    fetchRepos();
  });
  return (
    <div className="min-vh flex items-center justify-center">
      <div>
        <h1 className="mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight">
          MANISH SENCHA
        </h1>
        <div className="flex align-center justify-between mt-2">
          {socials.map((social: Social, index) => (
            <div className="flex" key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
                title={social.name}
                className="active:scale-95 transition-transform flex w-14 h-14 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
              >
                {<social.icon className="h-10 w-10" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
