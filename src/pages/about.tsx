import React from "react";
import Layout from "../components/Layout/Layout";
import { PageProps } from "gatsby";
import About from "../components/sections/About";
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;
