export const Sign = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex max-w-[624px] mx-auto gap-5 flex-col">
          <p className="text-2xl font-semibold mb-4">Contact Us</p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <div className="flex justify-between gap-4 mb-6">
            <div className="max-w-[300px] border-2 p-6 rounded-xl">
              <p className="text-2xl font-semibold">Address</p>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="max-w-[300px] border-2 p-6 rounded-xl">
              <p className="text-2xl font-semibold">Contact</p>
              <p>313-332-8662</p>
              <p>info@email.com</p>
            </div>
          </div>

          <div className="border-2 bg-[#DCDDDF] rounded-lg p-6">
            <p className="text-2xl font-semibold mb-4">Leave a Message</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  className="border-2 p-2 w-full rounded-lg"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border-2 p-2 w-full rounded-lg"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="border-2 p-2 w-full rounded-lg"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="border-2 p-2 w-full rounded-lg h-32"
                placeholder="Write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
