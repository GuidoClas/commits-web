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
            <nav className="px-5 flex justify-between items-center h-20 bg-slate-50 drop-shadow-md">
                <div>
                    <a href="#" className="text-black text-2xl font-semibold">
                        Commit <span className="text-black">History</span>
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