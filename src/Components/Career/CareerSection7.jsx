import  React from "react";

import work from "../../assets/Images/work7.jpg"
import work1 from "../../assets/Images/work8.jpg";
export const CareerSection7 = () => {
 
  return (
    <>
      {/* Slide Section */}
      <div className="p-10 mb-10 pt-0">
        <div className="animediv1 w-full px-4 my-12 lg:my-16 ">
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className="w-[100%] h-[200px] md:w-[20%] px-4 lg:px-0">
              <img
                src={work}
                alt="mission-image"
                className="w-full h-full rounded-tr-[40px] rounded-bl-[40px] object-cover shadow-[15px_-15px_#4338ca] sm:shadow-[20px_-20px_#4338ca] lg:shadow-[20px_-20px_#4338ca]"
              />
            </div>

            <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
              <h2 className="lg:text-3xl text-xl md:text-xl    mb-2 pb-2 font-bold text-black">
                Why Work With Us{" "}
              </h2>
              <p className="text-xs lg:text-base text-slate-600 mt-4 pb-4 mb-4">
                At BAOIAM , we create pathways to success, offering
                limitless opportunities where innovation and creativity thrive.
                Join our dynamic, inclusive team dedicated to making a
                difference in your career and the world.
              </p>
            </div>
          </div>
        </div>

        <div className="animediv1 w-full mx-auto px-4 mt-20 ">
          <div className="flex flex-col mx-auto md:flex-row-reverse justify-center items-center w-full">
            <div className="w-[100%] md:w-[25%] ">
              <img
                src={work1}
                alt="vision-image"
                className="w-full h-full rounded-tr-3xl rounded-bl-3xl object-cover shadow-[15px_15px_#4338ca] sm:shadow-[20px_20px_#4338ca] lg:shadow-[25px_25px_#4338ca]"
              />
            </div>

            <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
              <h2 className="lg:text-3xl text-xl md:text-xl   lg:mb-5 font-bold text-black">
                Work Environment{" "}
                <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent"></span>
              </h2>
              <p className="text-xs lg:text-base text-slate-600 mt-4">
                {" "}
                At BAOIAM , we offer an inspiring environment where creativity
                thrives and collaboration drives innovation. Our inclusive
                culture celebrates diverse perspectives, fostering teamwork that
                sparks fresh ideas. With flexible working options, a focus on
                work-life balance, and a commitment to continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
