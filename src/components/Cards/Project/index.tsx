import React from "react";
import {
  BsFillRocketTakeoffFill,
  BsGithub,
  BsInfoCircleFill,
} from "react-icons/bs";
interface ProjectProps {
  title: string;
  image?: string;
  github_url: string;
  web_url: string | null;
  tags: string[];
  description: string | null;
  url: string | null;
}
interface WebConf {
  name?: string;
  description?: string;
}
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  github_url,
  web_url,
  tags,
  description,
  url,
}) => {
  const [webConf, setWebConf] = React.useState<WebConf>({});
  return (
    <div className="w-full p-4 mt-4 mb-4 flex flex-row shadow-inner-border dark:shadow-inner-border-dark justify-between items-center bg-card dark:bg-card-dark rounded-2xl mx-2 container overflow-hidden">
      <div className="flex-col">
        <h3 className="inline-block text-primary font-display dark:text-primary-dark font-bold text-2xl leading-tight break-all uppercase ">
          {title}
        </h3>
        <div className="relative">
          <div className="py-2">
            <p className="whitespace-pre-wrap my-4">{description}</p>
          </div>
        </div>
        <div>
          <ul className="mt-5 self-center flex gap-2 w-full flex-row">
            <li>
              <a
                href={github_url}
                target="_blank"
                className="mt-1 active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug bg-link text-white hover:bg-opacity-80 text-base rounded-full px-4 py-2"
              >
                <BsGithub />
                <span className="ms-1">Github</span>
              </a>
            </li>
            {web_url && (
              <li>
                <a
                  href={web_url}
                  target="_blank"
                  className="mt-1 active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug bg-link text-white hover:bg-opacity-80 text-base rounded-full px-4 py-2"
                >
                  <BsFillRocketTakeoffFill />
                  <span className="ms-1">Live</span>
                </a>
              </li>
            )}
            <li>
              <button className="mt-1 active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug bg-link text-white hover:bg-opacity-80 text-base rounded-full px-4 py-2">
                <BsInfoCircleFill />
                <span className="ms-1">More Info</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
