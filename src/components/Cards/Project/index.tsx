import { StaticImage } from "gatsby-plugin-image";
import React from "react";
interface ProjectProps {
  title: string;
  image?: string;
  github_url: string;
  web_url: string | null;
  tags: string[];
  description: string | null;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  github_url,
  web_url,
  tags,
  description,
}) => {
  React.useEffect(() => {
    async function fetchRepoConfig() {}
    fetchRepoConfig();
  }, []);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card dark:bg-card-dark shadow-inner-border dark:shadow-inner-border-dark">
      <StaticImage
        src="../../../images/project_placeholder.PNG"
        alt={title}
        placeholder="blurred"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag: string, index: number) => (
          <span
            key={tag + index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shrink-0"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
