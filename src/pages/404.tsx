import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">404 Error - Page Not Found</h1>
        <p className="text-xl mb-8">
          The page you are looking for could not be found.
        </p>
        <p className="text-lg">
          Please check the URL or go back to the{" "}
          <a href="/" className="text-blue-500">
            homepage
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
