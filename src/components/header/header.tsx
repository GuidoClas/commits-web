import React, { useEffect, useState, useContext } from 'react';
import CommitAPI from '../../apis/commit-api/commitAPI';
import { Autocomplete, TextField } from '@mui/material';
import { GlobalContext } from '@/context/context';

const Header = (): JSX.Element => {
    const [branches, setBranches] = useState([]);
    const { setBranch, setCommits } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchBranches() {
            try {
                const responseData = await CommitAPI.fetchGetAllBranches();
                setBranches(responseData.map((branch: any) => branch.name));
            } catch (error: any) {
                console.error(error.message);
            }
          }
      
          fetchBranches();
    }, [])

    const handleOnChangeBranch = async (branch: any) => {
        if(!branch){
            setBranch(null);
            setCommits([]);
        }

        setBranch(branch);
        try {
            const responseCommits = await CommitAPI.fetchGetByBranch(branch);
            setCommits(responseCommits);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    return (
        <>
            <nav className="px-5 fixed top-0 left-0 z-50 w-full flex justify-between items-center h-20 bg-slate-50 drop-shadow-md">
                <div>
                    <a href="https://github.com/GuidoClas/commits-web" className="flex items-center">
                        <svg aria-hidden="true" className="octicon octicon-mark-github" height="45" version="1.1" viewBox="0 0 16 16" width="50">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <span className="text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Your history</span>
                    </a>
                </div>
                
                <form className="flex flex-grow items-center p-2">   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={branches}
                            sx={{ width: 'auto', backgroundColor: 'transparent', height: '3rem', borderRadius: 2 }}
                            renderInput={(params) => (
                                <TextField {...params} 
                                InputProps={{
                                    ...params.InputProps,
                                    className: 'text-xl font-semibold', 
                                }}
                                size='small'
                                id="outlined-basic" 
                                color="info" 
                                variant="outlined"
                                placeholder="Select a branch" />)
                            }
                            onChange={(event, value) => handleOnChangeBranch(value)}
                        />
                    </div>
                </form>
            </nav>
        </>
    )
}

export default Header