{/**import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer */}


import React from "react";
import {
  FaGithub,
  FaLinkedin, 
  FaInstagram 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="bg-gray-900 absolute w-full">
      <div className="mx-auto w-full max-w-screen-xl px-3 py-4 sm:p-4  lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-white">
          <Logo className="w-16 sm:w-20 " />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Websites
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                  
                    to="/"
                    className="hover:underline"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                   
                    to="/"
                    className="hover:underline"
                  >
                    Company
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow Me
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/raghib-jamil-46a73326a/"
                    className="hover:underline "
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/Raghibjamil"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    
                    to="/Contact Me"
                    className="hover:underline"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex text-center sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-500">
            © 2024 BLOG™. All Rights Reserved. Developed by{" "}
            <Link
             
              to="/"
              className="text-gray-300 hover:underline whitespace-nowrap hover:text-gray-100"
            >
              RAGHIB JAMIL
            </Link>
          </span>
          <div className="flex gap-4 sm:gap-2 text-2xl w-full sm:w-auto mt-4 justify-center sm:mt-0">
          
            <Link
              title="LinkedIn"
              target="_blank"
              to="https://www.linkedin.com/in/raghib-jamil-46a73326a/"
            >
              <FaLinkedin className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </Link>
            <Link
              title="Instagram"
              target="_blank"
              to="https://www.instagram.com/raghibj11/"
            >
              <FaInstagram  className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </Link>
            <Link
              title="Github"
              target="_blank"
              to="https://github.com/Raghibjamil"
            >
              <FaGithub className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;