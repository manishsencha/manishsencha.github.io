import * as React from "react";
import { HeadFC, PageProps, navigate } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">404 Error - Page Not Found</h1>
        <p className="text-xl mb-8">
          The page you are looking for could not be found.
        </p>
        <p className="text-lg">
          Please check the URL. <br />
          Redirecting to hompage in 5 seconds or
          <a href="/" className="text-blue-500">
            click here
          </a>{" "}
          to go homepage manually.
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
