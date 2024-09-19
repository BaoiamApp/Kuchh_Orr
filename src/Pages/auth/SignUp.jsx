import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

const SignUp = () => {
  document.title = "Baoiam - Sign Up";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    re_password: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Processing your login...");
    try {
      const response = await fetch(`${apiUrl}/api/auth/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("response recieved");
        const errorData = await response.json();
        console.log(errorData);
        // setError(errorData);
        toast.update(toastId, {
          render: `kindly try again with correct information!`,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        return;
      }

      console.log("Form submitted successfully");
      toast.update(toastId, {
        render: "registration successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong, please try again.");
    }
  };

  const circlesRef = useRef([]);
  const Anime1 = useRef(null);
  const Anime2 = useRef(null);

  useEffect(() => {
    const te = gsap.timeline({ repeat: -1, yoyo: true });

    // GSAP Timeline for background fading animations
    te.to(".bg-2", { opacity: 1, duration: 0 })
      // Fade out bg-2
      .to(".bg-2", { opacity: 0, duration: 3 }, "+=3")
      .to(".bg-3", { opacity: 1, duration: 3 }, "-=3")
      // Fade in bg-3
      .to(".bg-3", { opacity: 0, duration: 3 }, "+=3");

    //     const tl = gsap.timeline();

    // tl.fromTo(Anime1.current,{rotateX:0,rotateZ:90},{
    //     rotateX:0,
    //     rotateZ:0,

    //     duration:1,
    //     ease:'power1.in'
    // })

    // const bounds = {
    //   top: 10,
    //   left: 10,
    //   right: window.innerWidth - 400, // 400px width + padding
    //   bottom: window.innerHeight - 400, // 400px height + padding
    // };

    // // GSAP timeline for swapping positions
    // const tl = gsap.timeline();

    // tl.to(Anime1.current, {
    //   x: bounds.right - bounds.left,
    //   y: bounds.bottom - bounds.top,
    //   duration: 2,
    //   ease: "power1.inOut",
    // }).to(
    //   Anime2.current,
    //   {
    //     x: -(bounds.right - bounds.left),
    //     y: -(bounds.bottom - bounds.top),
    //     duration: 2,
    //     ease: "power1.inOut",
    //     position:'absolute'

    //   },
    //   '<'

    // );

    // Explaination// GSAP timeline for swapping positions
    const tl = gsap.timeline();

    tl.to(Anime1.current, {
      // 1) Move Anime1 80% of the viewport width to the right
      x: "80vw",
      // 2) Move Anime1 80% of the viewport height down
      y: "50vh",
      duration: 1.5,
      ease: "power1.inOut",
    }).to(
      Anime2.current,
      {
        // 3) Move Anime2 80% of the viewport width to the left
        x: "-80vw",
        // 4) Move Anime2 80% of the viewport height up
        y: "-60vh",
        duration: 1.5,
        ease: "power1.inOut",
        position: "absolute",
      },
      // 5) Start Anime2 animation at the same time as Anime1
      "<"
    );

    circlesRef.current.forEach((circle, index) => {
      const delay = index % 2 === 0 ? 0 : index + 1;
      const duration = 25 + Math.random() * 30;
      gsap.fromTo(
        circle,
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          borderRadius: "0%",
        },
        {
          y: -1000,
          rotate: 720,
          opacity: 0,
          borderRadius: "50%",
          duration,
          ease: "linear",
          repeat: -1,
          delay,
        }
      );
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* <div className="absolute inset-0 blur-sm dark:hidden">
        <div className="bg-1 absolute inset-0 bg-gradient-to-b from-[#f9dea1] to-[#9bdaff]"></div>
        <div className="bg-2 absolute inset-0 opacity-0 bg-gradient-to-tr from-[#f9c3f5] to-[#9bdaff]"></div>
        <div className="bg-3 absolute inset-0 opacity-0 bg-gradient-to-tl from-[#bab2fc] to-[#9bdaff]"></div>
      </div> */}

      <ToastContainer />
      <div
        ref={Anime1}
        className=" w-[400px] h-[400px] top-[-10%] left-[-5%]  rounded-full bg-gradient-to-tl from-[#bab2fc] to-[#9bdaff] absolute"
      ></div>
      <div
        ref={Anime2}
        className=" w-[600px] h-[600px] bottom-[-15%] right-[-5%]   rounded-full bg-gradient-to-tl from-[#bab2fc] to-[#9bdaff]  absolute"
      ></div>
      <div className="py-5 ">
        <div className="mx-auto  px-4 sm:px-1 lg:px-8 ">
          <div className="flex justify-center  md:px-[6rem]  ">
            {/* <div className="lg:mb-0 mb-10">
                            <div className="group w-full h-[30rem]">
                                <div className="relative h-full">
                                    <img src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl" />
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white rounded-lg p-6 block">
                                            <h1>Lorem</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis, culpa molestiae quia voluptate ad alias reprehenderit accusantium eius tempora esse ratione doloribus, assumenda sint?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            <div className="relative  bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] overflow-hidden max-w-[32vw] hidden md:block md:rounded-l-2xl">
              {/* Animated Circles in Background */}
              <ul className="absolute inset-0  z-0">
                {[...Array(10)].map((_, i) => (
                  <li
                    key={i}
                    ref={(el) => (circlesRef.current[i] = el)}
                    className="absolute bg-white bg-opacity-20 rounded-full"
                    style={{
                      width:
                        i % 2 === 0 ? `${80 + i * 10}px` : `${20 + i * 5}px`,
                      height:
                        i % 2 === 0 ? `${80 + i * 10}px` : `${20 + i * 5}px`,
                      left: `${Math.random() * 100}%`,
                      bottom: "-150px",
                    }}
                  />
                ))}
              </ul>

              {/* Centered Text */}
              <div className="relative z-10 flex flex-col text-black items-center justify-evenly py-[5rem] h-full text-center ">
                <h1 className="font-bold text-[2vw] text-white">One of us ?</h1>
                <p className="px-[3rem] sm:text-[1.7vw] md:text-[1.5vw] font-light text-white leading-[2vw]">
                  Those who see possibilities where others see limitations
                  deserve to be one in a million!
                </p>
                <Link
                  to={"/Login"}
                  className="px-16 md:py-[3px] md:text-[1.4vw]  bg-black sm:px-10 sm:py-2 sm:text-[1.5vw] text-white py-2.5 border rounded-full  border-black mt-5"
                >
                  Login
                </Link>
              </div>
            </div>

            <div className="bg-slate-100   p-4 md:p-11 rounded-2xl  md:rounded-r-2xl md:rounded-l-none  z-10">
              <h2 className="text-indigo-600 font-manrope text-3xl md:text-[2.5vw] text-center font-semibold leading-10 mb-8">
                Sign Up
              </h2>

              <div className="lg:mb-0">
                <button
                  type="button"
                  className="group w-full  md:text-[1vw] flex justify-center items-center gap-2 bg-white text-[4vw] md:text-[1vw] text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <FaGoogle
                    size={20}
                    className="group-hover:text-blue-600"
                    onClick={() => {}}
                  />{" "}
                  Sign Up with Google
                </button>
              </div>

              <div className="mt-2 mb-6 text-[3vw]  md:text-[1vw] text-gray-600 text-center">
                <p>or with email</p>
              </div>

              <form
                onSubmit={onSubmit}
                className="mx-auto grid grid-cols-2 gap-x-4"
              >
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={onChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={onChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
                  >
                    Last name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={onChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={onChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="re_password"
                    id="re_password"
                    value={formData.re_password}
                    onChange={onChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="re_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600"
                  >
                    Confirm password
                  </label>
                </div>

                <div className="flex items-start mb-5 col-span-2">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className=" h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 text-[4vw] md:text-[1vw] font-medium text-gray-900"
                  >
                    I agree with the{" "}
                    <Link
                      to="/terms-conditions"
                      className="text-blue-600 hover:underline"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white  md:text-[1vw] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[3.5vw] w-full px-5 py-2.5 text-center col-span-2"
                >
                  Submit
                </button>
              </form>

              {error && (
                <div className="mt-4 text-sm text-red-600 text-center">
                  {error}
                </div>
              )}

              <div className="mt-4 text-[3.5vw]  md:text-[1vw] text-gray-600 text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-black hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
