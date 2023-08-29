import React, { useEffect, useState } from 'react';
import CommitAPI from '../../apis/commit-api/commitAPI';

const Header = () => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        async function fetchBranches() {
            try {
                const responseData = await CommitAPI.fetchGetAllBranches();
                setBranches(responseData);
                console.log(branches);
            } catch (error: any) {
                console.error(error.message);
            }
          }
      
          fetchBranches();
          
    }, [])

    return (
        <>
            <nav className="px-5 flex justify-between items-center h-16 bg-gray-500 drop-shadow-md">
                <div>
                    <a href="#" className="text-white text-2xl font-semibold italic">
                        Commit <span className="text-black">Web</span>
                    </a>
                </div>
                
                <form className="flex flex-grow items-center p-2">   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray dark:bg-white dark:hover:bg-white dark:focus:ring-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </form>
            </nav>
        </>
    )
}

export default Header