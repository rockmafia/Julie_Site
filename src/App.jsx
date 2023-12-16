import { useRef } from "react";
import Deepti from "./assets/DeeptiMisser.png";
import Present from "./assets/Presentation.png";
import { motion, useScroll } from "framer-motion";
import "./index.css";

function App() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const refabout = useRef(null);
  const refportfolio = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickcaboutme = () => {
    refabout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickportfolio = () => {
    refportfolio.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="progress-bar z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Julie Site
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickportfolio}
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickcaboutme}
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-Sepia dark:bg-gray-900">
        {/* <Slide/> */}
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <motion.div
              animate={{ x: 50, scale: 1.0 }}
              transition={{ delay: 1 }}
            >
              <h1 className="max-w-2xl mb-2 text-4xl  tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white pb-8  font-bold mt-6 ">
                Deepti Misser
              </h1>

              <h2 className="max-w-2xl mb-2 text-2xl tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white pb-8 font-semibold xl:ml-4 ">
                About me
              </h2>
            </motion.div>

            <div className=" text-xl font-bold pb-6 ">
              {/* <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "We produce food for Mice",
                  1000,
                  "We produce food for Hamsters",
                  1000,
                  "We produce food for Guinea Pigs",
                  1000,
                  "We produce food for Chinchillas",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em", color: "#016A70" }}
                repeat={Infinity}
              /> */}
            </div>
            <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 leading-loose font-normal indent-8	">
              I have substantial academic background and job related to
              business, medicine, and marketing with a proven track record of
              delivering results with an outstanding ability to make clear and
              effective management with my team. I have been passionate about
              digital marketing with eagerness to face challenges and to learn
              new things.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
            >
              Hire me 👋
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <motion.div
              animate={{ x: 50 }}
              transition={{ delay: 1 }}
              className="h-4/5"
            >
              <img src={Deepti} alt="mockup" className="rounded-lg  " />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-Salmon dark:bg-gray-900" ref={refabout}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <motion.div
              animate={{ x: -90, delay: 0.2, ease: "linear" }}
              transition={{ delay: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="mockup"
              />
            </motion.div>
          </div>

          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About Me
            </h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-yellow-400">
                  December 2021
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Stamford International University, Thailand
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Master of Business Administration in General Management.
                </p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2014
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  International College, Suan Sunandha Rajabhat University,
                  Thailand
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Bachelor of Business Administration in International Business.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2019-2021
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Upjohn (Thailand) Limited, Pfizer Division Thailand Viatris,
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Thailand Marketing and Sales Department.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2
            className="mb-8 lg:mb-16 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white text-4xl uppercase"
            ref={refportfolio}
          >
            Portfolio
          </h2>
          <div className="flex justify-center">
            <img
              className="lg:w-auto lg:h-full h-48"
              src={Present}
              alt="University Exeter"
            />
          </div>
        </div>
        <div className=" flex justify-center mb-8 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vHBGVTDnPnM?si=Gk_yNRI30LyYIzsR&amp;modestbranding=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-lg "
          ></iframe>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl uppercase">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.3125 C 0.335938 5.402344 -0.0078125 5.824219 0 6.3125 L 0 43.59375 C -0.0078125 44.082031 0.335938 44.503906 0.8125 44.59375 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 40 L 49 40 C 49.550781 40 50 39.550781 50 39 L 50 11 C 50 10.449219 49.550781 10 49 10 L 30 10 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 10.6875 C 27.941406 10.882813 27.941406 11.085938 28 11.28125 L 28 38.8125 C 27.972656 38.945313 27.972656 39.085938 28 39.21875 L 28 47.8125 L 2 42.78125 L 2 7.125 Z M 30 12 L 48 12 L 48 38 L 30 38 L 30 35 L 31.59375 35 C 32.292969 34.898438 37.992188 27.605469 37.09375 26.90625 C 36.394531 26.207031 33.992188 30.085938 31.09375 32.1875 L 30 32.1875 L 30 25.5 C 31.546875 26.53125 32.984375 27.234375 33.3125 26.90625 C 33.824219 26.394531 31.925781 25.078125 30 23.28125 L 30 17.8125 L 31.6875 17.8125 L 32.8125 18.8125 C 33.011719 19.011719 33.207031 19.011719 33.40625 18.8125 L 34.1875 18 C 34.386719 17.800781 34.386719 17.605469 34.1875 17.40625 L 31.90625 15.09375 C 31.804688 14.992188 31.601563 14.90625 31.5 14.90625 L 30 14.90625 Z M 19.1875 14.8125 L 10.09375 15.8125 L 10.09375 33.90625 L 19.5 34.8125 L 19.5 31.09375 L 13.59375 30.8125 L 13.59375 26.5 L 18.8125 26.59375 L 18.8125 23 L 13.59375 23.09375 L 13.59375 18.90625 L 19.1875 18.5 Z M 38.3125 15 C 37.613281 15.101563 32.011719 22.394531 32.8125 23.09375 C 33.511719 23.792969 35.914063 19.914063 38.8125 17.8125 L 42.09375 17.8125 L 42.09375 21.59375 L 41.09375 22.59375 C 40.894531 22.792969 40.894531 22.988281 41.09375 23.1875 L 41.90625 24 C 42.105469 24.199219 42.300781 24.199219 42.5 24 L 44.8125 21.6875 C 44.914063 21.585938 45 21.414063 45 21.3125 L 45 15.6875 C 45 15.289063 44.707031 15 44.40625 15 Z M 36.9375 23.03125 C 36.839844 23.035156 36.738281 23.042969 36.6875 23.09375 C 35.988281 23.792969 39.992188 26.101563 42.09375 29 L 42.09375 32.1875 L 38.3125 32.1875 L 37.1875 31.1875 C 36.988281 30.988281 36.792969 30.988281 36.59375 31.1875 L 35.8125 32 C 35.613281 32.199219 35.613281 32.394531 35.8125 32.59375 L 38.09375 34.90625 C 38.195313 35.007813 38.398438 35.09375 38.5 35.09375 L 44.3125 35.09375 C 44.613281 35.09375 44.90625 34.800781 44.90625 34.5 L 44.90625 28.59375 C 44.90625 27.84375 38.410156 22.980469 36.9375 23.03125 Z"></path>
              </svg>
            </a>
            <a className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.34375 C 0.335938 5.433594 -0.0078125 5.855469 0 6.34375 L 0 43.65625 C -0.0078125 44.144531 0.335938 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 44 L 47 44 C 48.09375 44 49 43.09375 49 42 L 49 8 C 49 6.90625 48.09375 6 47 6 L 30 6 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 6.6875 C 27.941406 6.882813 27.941406 7.085938 28 7.28125 L 28 42.8125 C 27.972656 42.945313 27.972656 43.085938 28 43.21875 L 28 47.8125 L 2 42.84375 L 2 7.15625 Z M 30 8 L 47 8 L 47 42 L 30 42 L 30 37 L 40 37 L 40 35 L 30 35 L 30 29.4375 C 30.921875 29.804688 31.949219 30 33 30 C 37.40625 30 41 26.40625 41 22 L 41 21 L 34 21 L 34 14 L 33 14 C 31.941406 14 30.929688 14.191406 30 14.5625 Z M 35 11 L 35 20 L 44 20 L 44 19 C 44 14.59375 40.40625 11 36 11 Z M 37 13.1875 C 39.492188 13.617188 41.382813 15.507813 41.8125 18 L 37 18 Z M 8.15625 15.65625 L 8.15625 34.375 L 12.375 34.375 L 12.375 27.9375 L 14.375 27.9375 C 16.636719 27.9375 18.460938 27.347656 19.8125 26.1875 C 21.164063 25.027344 21.84375 23.503906 21.84375 21.625 C 21.84375 17.648438 19.464844 15.65625 14.75 15.65625 Z M 32 16.25 L 32 23 L 38.8125 23 C 38.324219 25.828125 35.972656 28 33 28 C 31.953125 28 30.980469 27.71875 30.125 27.25 C 30.085938 27.226563 30.042969 27.207031 30 27.1875 L 30 16.8125 C 30.03125 16.792969 30.0625 16.773438 30.09375 16.75 C 30.660156 16.433594 31.339844 16.367188 32 16.25 Z M 12.375 18.90625 L 14.03125 18.90625 C 16.273438 18.90625 17.40625 19.859375 17.40625 21.78125 C 17.40625 23.746094 16.273438 24.71875 14.03125 24.71875 L 12.375 24.71875 Z"></path>
              </svg>
            </a>
            <a className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.34375 C 0.335938 5.433594 -0.0078125 5.855469 0 6.34375 L 0 43.65625 C -0.0078125 44.144531 0.335938 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 44 L 47 44 C 48.09375 44 49 43.09375 49 42 L 49 8 C 49 6.90625 48.09375 6 47 6 L 30 6 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 6.6875 C 27.941406 6.882813 27.941406 7.085938 28 7.28125 L 28 42.8125 C 27.972656 42.945313 27.972656 43.085938 28 43.21875 L 28 47.8125 L 2 42.84375 L 2 7.15625 Z M 30 8 L 47 8 L 47 42 L 30 42 L 30 37 L 44 37 L 44 35 L 30 35 L 30 29 L 44 29 L 44 27 L 30 27 L 30 22 L 44 22 L 44 20 L 30 20 L 30 15 L 44 15 L 44 13 L 30 13 Z M 4.625 15.65625 L 8.4375 34.34375 L 12.1875 34.34375 L 14.65625 22.375 C 14.769531 21.824219 14.875 21.101563 14.9375 20.25 L 14.96875 20.25 C 14.996094 21.023438 15.058594 21.75 15.1875 22.375 L 17.59375 34.34375 L 21.21875 34.34375 L 25.0625 15.65625 L 21.75 15.65625 L 19.75 28.125 C 19.632813 28.828125 19.558594 29.53125 19.53125 30.21875 L 19.5 30.21875 C 19.433594 29.339844 19.367188 28.679688 19.28125 28.21875 L 16.90625 15.65625 L 13.40625 15.65625 L 10.78125 28.0625 C 10.613281 28.855469 10.496094 29.582031 10.46875 30.25 L 10.40625 30.25 C 10.367188 29.355469 10.308594 28.625 10.21875 28.09375 L 8.1875 15.65625 Z"></path>
              </svg>
            </a>

            <a className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 31.546875 2 A 1.0001 1.0001 0 0 0 31.263672 2.0546875 L 5.6738281 10.853516 A 1.0001 1.0001 0 0 0 5 11.800781 L 5 38.199219 A 1.0001 1.0001 0 0 0 5.0058594 38.298828 A 1.0001 1.0001 0 0 0 5.0058594 38.300781 A 1.0001 1.0001 0 0 0 5.0449219 38.494141 A 1.0001 1.0001 0 0 0 5.0449219 38.496094 A 1.0001 1.0001 0 0 0 5.1230469 38.679688 A 1.0001 1.0001 0 0 0 5.3027344 38.916016 A 1.0001 1.0001 0 0 0 5.3789062 38.982422 A 1.0001 1.0001 0 0 0 5.546875 39.091797 A 1.0001 1.0001 0 0 0 5.6367188 39.132812 A 1.0001 1.0001 0 0 0 5.6386719 39.132812 A 1.0001 1.0001 0 0 0 5.6738281 39.146484 L 31.263672 47.945312 A 1.0001 1.0001 0 0 0 31.845703 47.966797 L 44.257812 44.666016 A 1.0001 1.0001 0 0 0 45 43.699219 L 45 6.3007812 A 1.0001 1.0001 0 0 0 44.257812 5.3339844 L 31.845703 2.0332031 A 1.0001 1.0001 0 0 0 31.546875 2 z M 31.625 4.0449219 L 43 7.0683594 L 43 42.931641 L 31.625 45.955078 L 15.753906 40.496094 L 30.869141 42.492188 A 1.0001 1.0001 0 0 0 32 41.5 L 32 9.5996094 A 1.0001 1.0001 0 0 0 30.798828 8.6210938 L 14.798828 11.919922 A 1.0001 1.0001 0 0 0 14 12.900391 L 14 34.201172 L 7 36.769531 L 7 12.513672 L 31.625 4.0449219 z M 30 10.828125 L 30 40.359375 L 10.158203 37.740234 L 15.34375 35.839844 A 1.0001 1.0001 0 0 0 16 34.900391 L 16 13.714844 L 30 10.828125 z"></path>
              </svg>
            </a>
            <a className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 1 12 L 1 36 L 26 36 L 50 12 Z M 3 14 L 45.199219 14 L 25.199219 34 L 3 34 Z M 8.398438 18 C 5 18 4 20.101563 4 21.402344 C 4 22.699219 4.699219 24.199219 6.601563 24.800781 C 8.601563 25.402344 10.097656 25.5 10.097656 26.5 C 10.097656 27.5 6.699219 27.699219 4.800781 26.5 L 4 29.097656 C 4 29.097656 5.101563 30 8.398438 30 C 10.183594 30 11.566406 29.496094 12.480469 28.773438 L 12 30 L 15.5 30 L 16.097656 28.199219 C 16.800781 28.5 17.601563 28.699219 18.5 28.699219 C 19.398438 28.699219 20.199219 28.5 20.902344 28.199219 L 21.5 30 L 27 30 L 27 27 L 28.5 27 C 31 27 33 25 33 22.5 C 33 20 31 18 28.5 18 L 24 18 L 24 27.5 L 20.199219 18 L 16.699219 18 L 13.613281 25.875 C 13.207031 24.128906 11.351563 23.464844 10.199219 23.199219 C 7.199219 22.398438 7 22 7 21.402344 C 7 19.902344 11 20.601563 12 21 C 12.300781 20.199219 12.902344 18.699219 12.902344 18.699219 C 12.902344 18.699219 11.800781 18 8.398438 18 Z M 27 21 L 28.5 21 C 29.300781 21 30 21.699219 30 22.5 C 30 23.300781 29.300781 24 28.5 24 L 27 24 Z M 18.5 21.402344 L 20 25.699219 C 19.601563 26 19.101563 26.097656 18.5 26.097656 C 17.898438 26.097656 17.398438 26 17 25.699219 Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className=" bg-Sepia" ref={ref}>
        <div className="mb-8 lg:mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl pt-10">
          <h1 className="uppercase">Contact Us</h1>
        </div>
        <div className="flex flex-wrap justify-center pt-10 ">
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6 ">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow ">
                    <p className="mb-2 font-bold text-white dark:text-white ">
                      Phone Nummer
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      deepti10misser@gmail.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +44 7414-186-009
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Slide/> */}
      </section>
    </>
  );
}

export default App;
