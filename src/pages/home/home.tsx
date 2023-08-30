import Commits from '@/components/commits/commits';
import { GlobalContext } from '@/context/context';
import React, { useContext } from 'react';

const Home = (): JSX.Element => {
  const { branch } = useContext(GlobalContext);

    
    return (
      <div className="container mx-auto py-8 text-center">
        {branch ? 
          <h1 className="text-3xl font-semibold mb-4">Your commits in {branch}</h1> 
          : 
          <h1 className="text-3xl font-semibold mb-4">Please select a branch </h1>}
        <Commits/>
      </div>
    )
}

export default Home
