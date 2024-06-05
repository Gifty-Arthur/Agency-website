import React from "react";

import design from "../assets/Images/design.png";
import banner1 from "../assets/Images/banner1.png";

import {
  SiMicrosoftaccess,
  SiCytoscapedotjs,
  SiEdotleclerc,
} from "react-icons/si";
import { BsExclude } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-[600px]" src={design} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neuralDgrey font-semibold mb-4 md:w-4/5">
              How to design the footer like we did=
            </h2>
            <p className="md:w-3/4 text-sm text-neuralGrey mb-8">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain..
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company state */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3  ">
            <img className="w-[400px]" src={banner1} alt="" />
          </div>

          {/* state */}

          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neuralGrey mb-8 leading-7">
                {" "}
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." "There is no one who loves pain
                itself, who seeks after it and wants to have it, simply because
                it is pain..
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey">
                British Dragon Boat Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap ">
                  <FaAmazon className="cursor-pointer" size={40} />
                  <SiMicrosoftaccess className="cursor-pointer" size={40} />
                  <BsExclude className="cursor-pointer" size={40} />
                  <FaMapLocationDot className="cursor-pointer" size={40} />
                  <SiCytoscapedotjs className="cursor-pointer" size={40} />
                  <SiEdotleclerc className="cursor-pointer" size={40} />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700 "
                    >
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.vorg/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834  5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                        <path />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
