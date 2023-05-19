import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Manish Sencha</title>;
