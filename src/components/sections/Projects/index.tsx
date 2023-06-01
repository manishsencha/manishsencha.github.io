import React from "react";
import { RepoResponse } from "../../../types/GHRepoTypes";
import Loader from "../../Loader";
import ProjectCard from "../../Cards/Project";
import toaster from "../../../utils/toaster";
import axios from "../../../utils/axios";
import { BiRefresh } from "react-icons/bi";
const Projects = () => {
  const [repos, setRepos] = React.useState<RepoResponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [refresh, setRefresh] = React.useState<number>(0);
  React.useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      try {
        let localRepos = window.localStorage.getItem("project_repos");
        let expiration = window.localStorage.getItem("project_expiration");
        if (
          expiration &&
          localRepos &&
          JSON.parse(expiration) > new Date().getTime()
        ) {
          let repos: RepoResponse[] = JSON.parse(localRepos);
          setRepos(repos);
        } else {
          let res = await axios().get(
            `https://api.github.com/users/manishsencha/repos?per_page=1000`
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
          window.localStorage.setItem("project_repos", JSON.stringify(repos));
          window.localStorage.setItem(
            "project_expiration",
            JSON.stringify(new Date().setHours(new Date().getHours() + 6))
          );
          setRepos(repos);
        }
        setLoading(false);
      } catch (e) {
        toaster("Failed to fetch projects", { id: "project-failed-toast" });
        setRepos([]);
        setLoading(false);
      }
    }
    fetchRepos();
  }, [refresh]);

  function syncWithGithub() {
    window.localStorage.removeItem("project_repos");
    window.localStorage.removeItem("project_expiration");
    setRefresh(Math.floor(Math.random() * 1000000 + 1));
  }
  return !loading ? (
    <div className="mt-2 container mx-auto">
      <h1 className="mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight flex justify-between align-center px-3">
        <>PROJECTS</>
        <button
          className="active:scale-95 transition-transform flex w-14 h-14 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
          title="Sync projects"
          onClick={syncWithGithub}
        >
          <BiRefresh className="h-10 w-10" />
        </button>
      </h1>
      <div className="mx-auto">
        <div className="flex align-center flex-wrap justify-evenly">
          {repos.map((repo: RepoResponse) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              github_url={repo.html_url}
              web_url={repo.homepage}
              tags={repo.topics}
              description={repo.description}
              url={repo.url}
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
