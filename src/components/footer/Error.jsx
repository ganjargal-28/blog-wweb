export const Error = () => {
  return (
    <div className="w-full  ">
      <div className="container h-full mx-auto">
        <div className="flex  mx-auto gap-4">
          <p className="text-5xl">404</p>
          <div className="h-18 border-2"></div>
          <div className="flex flex-col gap-3">
            <p>Page Not Found</p>
            <p>
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>

            <p className="max-w-[100px] flex p-4 items-center justify-center h-11 rounded-lg text-white bg-blue-700 ">
              <a href="./">Back To Home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
