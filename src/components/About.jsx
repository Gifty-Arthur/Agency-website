import React from "react";
import about from "../assets/Images/about.png";
import card from "../assets/Images/card.png";
import human from "../assets/Images/human.png";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-[700px]" src={about} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neuralDgrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three at Pixelgrade
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
        <div>
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neuralDgrey font-semibold mb-4 md:w-4/5">
              Helping a local <br />
              <span className="text-brandPrimary">
                bussiness reinvest itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication.</p>
          </div>

          {/* state */}
          <div>
            <div className="space-y-8 mx-auto flex sm:flex-row flex-col sm:items-center justify-around mt-10">
              <div className="flex items-center gap-4">
                <img className="w-[48px]" src={human} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,321
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img className="w-[48px]" src={human} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,321
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img className="w-[48px]" src={card} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,321
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img className="w-[48px]" src={card} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,321
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
