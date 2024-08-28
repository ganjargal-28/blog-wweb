export const Hero = () => {
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div>
          <div className="bg-[url('/Image.png')] rounded-lg bg-cover w-[1260px] h-[600px]">
            <div className="flex flex-col w-full p-4 h-full justify-end">
              <div className="w-[598px] h-[200px]  border-2  bg-white rounded-xl ">
                <div className="gap-8  flex flex-col">
                  <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                    Technology
                  </p>
                  <p className="text-3xl">
                    Grid system for better Design User Interface
                  </p>
                  <p>August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
