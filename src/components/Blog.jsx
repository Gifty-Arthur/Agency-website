import React from "react";
import lap from "../assets/Images/lap.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streaamlined Safeguarding Processes with OneRen",
      image: lap,
    },

    {
      id: 2,
      title: "Creating Streaamlined Safeguarding Processes with OneRen",
      image: lap,
    },

    {
      id: 3,
      title: "Creating Streaamlined Safeguarding Processes with OneRen",
      image: lap,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neuralDgrey font-semibold mb-4 md:w-4/5">
          How to design the footer like we did=
        </h2>
        <p className="text-sm text-neuralGrey mb-8 md:w-3/4 mx-auto  ">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..
        </p>
      </div>
      {/* all blogd */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              className="w-[300px] hover:scale-95 transtion-all duration-300"
              src={blog.image}
              alt=""
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neuralgrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700 "
                >
                  Read More
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
