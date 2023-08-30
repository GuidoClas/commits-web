import { GlobalContext } from '@/context/context';
import React, { useContext, useEffect } from 'react';
import Card from '../card/card';

const Commits = (): JSX.Element => {
    const { commits } = useContext(GlobalContext);
    
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {commits.map((commit: any) => (
                <Card key={commit.node_id} commit={commit} />
            ))}
        </div>
    )
}

export default Commits