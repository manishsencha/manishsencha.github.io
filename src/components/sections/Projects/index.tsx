import React from "react";
import axios from "axios";
import { RepoResponse } from "../../../types/GHRepoTypes";
import Loader from "../../Loader";
import ProjectCard from "../../Cards/Project";
import toaster from "../../../utils/toaster";

const Projects = () => {
  const [repos, setRepos] = React.useState<RepoResponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    async function fetchRepos() {
      try {
        let res = await axios.get(
          "https://api.github.com/users/manishsencha/repos?per_page=1000"
        );
        let repos: RepoResponse[] = res.data;
        repos = repos
          .filter((repo: RepoResponse) => !repo.fork)
          .sort((repo_first: RepoResponse, repo_second: RepoResponse) => {
            let date_first = repo_first.updated_at
              ? repo_first.updated_at
              : repo_first.created_at;
            let date_second = repo_second.updated_at
              ? repo_second.updated_at
              : repo_second.created_at;
            if (date_first && date_second) {
              if (date_first > date_second) return -1;
              if (date_first < date_second) return 1;
              return 0;
            } else {
              if (date_first) return -1;
              if (date_second) return 1;
              return 0;
            }
          });
        console.log(repos);
        setRepos(repos);
        setLoading(false);
      } catch (e) {
        toaster("Failed to fetch projects", { id: "project-failed-toast" });
        setRepos([]);
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);
  return !loading ? (
    <div className="mt-2">
      <h1 className="mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight">
        PROJECTS
      </h1>
      <div className="mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-stretch items-center">
          {repos.map((repo: RepoResponse) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              github_url={repo.html_url}
              web_url={repo.homepage}
              tags={repo.topics}
              description={repo.description}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default Projects;
