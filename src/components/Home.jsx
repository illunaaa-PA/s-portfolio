import React from 'react';
import heroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Home = () => {

    const links = [
        {
            href: '/PAUL-ADRIAN-SONCIO-RESUME.pdf',
            download: true,
        },
    ]

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row">

                <div className="flex flex-col justify-center h-full">
                    <p className="text-gray-500 py-4 max-w-md text-2xl md:text-2xl">
                        Hi 👋 I'm
                    </p>

                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Paul Adrian Soncio
                    </h2>

                    <p className="text-gray-400 py-4 max-w-md">
                        I'm a fresh graduate Information Technology student from West Visayas State University,
                        Iloilo City, Philippines. Currently, I love to work on web applications using technologies
                        like React, Tailwind and Next JS.
                    </p>

                    <div className="gap-4 pt-4 flex flex-wrap">
                        
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent
                         hover:bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-500 hover:border-transparent cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>

                        {links.map(({ href, download }) => (

                            <a href={href} download={download} >
                                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                         from-blue-500 to-cyan-500 cursor-pointer">
                                    Resume
                                    <span className="group-hover:scale-150 duration-300">
                                        <FiDownload size={25} className="ml-1" />
                                    </span>
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="my profile" className="rounded-2xl
                    mx-auto w-2/3 md:w-2/3" />
                </div>

            </div>

        </div>
    );
};

export default Home