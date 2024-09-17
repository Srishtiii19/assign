import React from 'react';
import { Link } from 'react-router-dom';

export default function Page2() {
    return (
        <div>
            <div className="cont flex items-center justify-center h-screen">
                <div className="cont1">
                    <div className="flex items-center gap-4">
                        <img className="w-32 h-32 rounded-full border bg-gray-200"
                            src="https://avatars.githubusercontent.com/u/121797105?v=4" alt="" />
                        <div className="font-medium dark:text-black">
                            <h1 className="title-font mb-4 text-4xl font-medium text-black">Hi, I'm Srishti Sharma</h1>
                            <Link to="/">
                                <button
                                    className="inline-flex text-black bg-white border border-gray-200 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded mx-2">
                                    Education
                                </button>
                            </Link>
                            <Link to="/projects">
                                <button
                                    className="inline-flex text-black bg-gray-200 border border-gray-200 py-1 px-4 focus:outline-none hover:bg-white rounded mx-2">
                                    Projects
                                </button>
                            </Link>
                            <a href="https://github.com/Srishtiii19" target="_blank" rel="noopener noreferrer">
                                <button
                                    className="inline-flex items-center text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-gray-800 rounded mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.82 2.81 1.29 3.5.99.11-.78.42-1.29.76-1.58-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-full mx-auto border-b pb-6 mb-6 border-gray-200 sm:flex-row flex-col">
                    </div>
                    <div className="cont2">
                        <h1 className="title-font mb-2 text-3xl font-medium text-gray-900">Projects</h1>
                        <div className="flex py-2">
                            <span className="text-black font-medium text-xl">EcoEats</span>
                            <span className="ml-auto text-black font-medium text-xl flex items-center">
                                April 2024
                            </span>
                        </div>
                        <div className="flex py-2">
                            <span className="text-black font-medium text-xl">XConnect</span>
                            <span className="ml-auto text-black font-medium text-xl flex items-center">
                                August 2024
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
