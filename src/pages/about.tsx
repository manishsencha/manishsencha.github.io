import React from "react";
import Layout from "../components/Layout/Layout";
import { HeadFC, PageProps } from "gatsby";
import About from "../components/sections/About";
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
export const Head: HeadFC = () => <title>About | Manish Sencha</title>;
