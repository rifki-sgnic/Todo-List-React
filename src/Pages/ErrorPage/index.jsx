import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="text-center">
        <h1 className="mb-4 font-bold text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="mt-2 italic font-thin">
          <i>
            {error.status} {error.statusText}
          </i>
        </p>
        <div className="mt-4 p-2">
          <a href="/" className="underline">
            Back to home.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
