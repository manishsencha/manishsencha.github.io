import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Projects from "../components/sections/Projects";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects | Manish Sencha</title>;
