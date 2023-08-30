import React from 'react';

const Footer = (): JSX.Element => {
    return (
        <footer className="fixed bottom-0 h-45 left-0 z-20 w-full p-4 bg-slate-50 shadow-md border-t-2 border-gray-200 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://github.com/GuidoClas/commits-web" className="flex items-center">
                            <svg aria-hidden="true" className="octicon octicon-mark-github" height="45" version="1.1" viewBox="0 0 16 16" width="50">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            <span className="text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">See Repository</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-2 text-lg font-semibold text-black uppercase dark:text-white">Technologies Used</h2>
                            <ul className="text-black dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://nextjs.org/" className="hover:underline">NextJS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                                <li>
                                    <a href="https://docs.nestjs.com/" className="hover:underline">NestJS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-black uppercase dark:text-white">Social Media</h2>
                            <ul className="text-black dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/guido-clas/" className="hover:underline ">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://guidoclas.com" className="hover:underline">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


