import React from "react";

const FeaturesItem = () => {
  return (
    <>
      <div className="h-full w-full bg-[#636163]">
        <div className="max-w-[85%] mx-auto py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="left p-8">
              <h1 className="text-2xl font-bold py-5">
                Want to learn on a mobile device?
              </h1>
              <p className="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.It
                is a long established fact that a reader will be distracted.
              </p>
            </div>
            <div className="right
             flex items-center justify-center">
              <img
                className="w-[40%] md:w-[60%]"
                src="https://themesdesign.in/yaari/images/icons/statistics.svg"
                alt=""
              />
            </div>

            <div className="right  flex items-center justify-center">
              <img
                className="w-[40%]"
                src="https://themesdesign.in/yaari/images/icons/timeline.svg"
                alt=""
              />
            </div>

            <div className="left p-8">
              <h1 className="text-2xl font-bold py-5">
                Mobile first framework
              </h1>
              <p className="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.It
                is a long established fact that a reader will be distracted.
              </p>
            </div>

            <div className="left p-8">
              <h1 className="text-2xl font-bold py-5">
                Free storage for new users
              </h1>
              <p className="text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.It
                is a long established fact that a reader will be distracted.
              </p>
            </div>
            <div className="right flex items-center justify-center">
              <img
                className="w-[40%]"
                src="https://themesdesign.in/yaari/images/icons/biohazard.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesItem;
