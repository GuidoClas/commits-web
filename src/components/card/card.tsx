import React, {useEffect} from 'react';

const Card = ({ commit }: any): JSX.Element => {
    
    useEffect(() => {
        console.log(commit);
    }, [])

    const formatDateDifference = (timestamp: string) => {
        const now = new Date();
        const timeDifference = now.getTime() - new Date(timestamp).getTime();
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        
        if (hoursDifference === 0) {
            return "Few minutes ago";
        } else if (hoursDifference === 1) {
            return "An hour ago";
        } else {
            return `${hoursDifference} hours ago`;
        }
    };
  
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg aria-hidden="true" className="octicon octicon-mark-github" height="30" version="1.1" viewBox="0 0 16 16" width="50">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{commit?.commit?.committer?.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{commit?.commit?.message}</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{formatDateDifference(commit?.commit?.committer?.date)}</p>
            <a href={commit?.html_url} className="inline-flex items-center text-blue-600 hover:underline">
                See on GitHub
                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>
        </div>
    )
}

export default Card