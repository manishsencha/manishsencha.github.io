import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Skills from "../components/sections/Skills";

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Skills />
    </Layout>
  );
};

export default SkillsPage;

export const Head: HeadFC = () => <title>Skills | Manish Sencha</title>;
