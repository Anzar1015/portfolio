import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            Hello, I'm Anzar, a passionate front-end developer specializing in
            creating visually stunning and user-friendly websites. With
            expertise in HTML, CSS, JavaScript and React JS, I craft intuitive
            interfaces and ensure cross-browser compatibility. I thrive in
            collaborative environments and enjoy turning ideas into exceptional
            digital experiences. Let's connect and create something amazing
            together.
          </p>

          <Link href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className=" m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.jpg"
            alt="/"
            width="600"
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
