import React, { createContext, useState, useMemo } from 'react';

interface IBranch {
  branch: string
}

export const GlobalContext = createContext<any>(null);

export const ContextProvider = ({ children }: any) => {
  const [branch, setBranch] = useState<IBranch | null>(null);
  const [commits, setCommits] = useState<{}>([]);

  const values = useMemo(() => (
    { branch,
      setBranch,
      commits,
      setCommits,   
    }), 
    [ 
      branch,
      commits
    ]);  

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};