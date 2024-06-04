import { Carousel } from "flowbite-react";

import banner1 from "../assets/Images/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen ">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className="w-[700px]" src={banner1} alt="" />
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
              </h1>
              <span className="text-brandPrimary font-semibold md:w-3/4 leading-snug text-5xl">
                form 8 years
              </span>

              <p className="text-neutralGrey ">
                Where to grow your bussiness as a photographer:site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>

            {/* img2 */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
