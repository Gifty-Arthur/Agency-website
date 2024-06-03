import React from "react";
import { FaAmazon } from "react-icons/fa";
import {
  SiMicrosoftaccess,
  SiCytoscapedotjs,
  SiEdotleclerc,
} from "react-icons/si";
import { BsExclude } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import user from "../assets/Images/user.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership orgsnisations",
      decroption:
        "our membership management software provides full automation of membership renewals and payments",
      image: user,
    },
    {
      id: 2,
      title: "National Associations",
      decroption:
        "our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Images/user.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      decroption:
        "our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Images/user.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neuralDgrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neuralGrey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <FaAmazon size={40} />
          <SiMicrosoftaccess size={40} />
          <BsExclude size={40} />
          <FaMapLocationDot size={40} />
          <SiCytoscapedotjs size={40} />
          <SiEdotleclerc size={40} />
        </div>
      </div>
      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neuralDgrey font-semibold mb-3">
          Manage your entire Community in a single system
        </h2>
        <p className="text-neuralGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div>
        {services.map((service) => (
          <div key={services.id}>
            <div>
              <div>
                <img src={service.image} alt="" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.decroption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
