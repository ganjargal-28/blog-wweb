export const Sign = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex max-w-[624px] gap-5 flex-col">
          <p className="text-2xl">Contact Us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>

          <div className="flex justify-between">
            <div className="max-w-[200px] border-2 rounded-xl ">
              <p className="text-2xl">Address</p>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div>
              <div className="max-w-[200px] border-2 rounded-xl  ">
                <p className="text-2xl">Contact</p>
                <p>313-332-8662 info@email.com</p>
              </div>
            </div>
          </div>
          <div className="border-2 ">
            <p className="text-2xl">leave massage</p>
            <div className="h-[300px] flex flex-col pt-4 gap-4 ">
              <div className="flex justify-around">
                <input className="border-2 rounded-lg" type="your name" />

                <input className="border-2 rounded-lg" type="your email" />
              </div>
              <div>
                <input className="border-2 w-full  rounded-lg" type="subject" />
              </div>

              <input
                className="border-2 w-full rounded-lg h-[200px]"
                type="write a massage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
