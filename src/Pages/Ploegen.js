import React from 'react';
import TableData from '../componenten/TableData';
import { getAllAppData } from '../Data/PloegenData';

const Ploegen = () => {
    const ploeg = getAllAppData();
    console.log(ploeg)
    return (
        <div>
            <h1 className='text-3xl text-center p-5 font-bold text-red-600'>Ploegen</h1>
            {ploeg.map(p =>
                <TableData {...p}/>
            )}
        </div>


    );
};

export default Ploegen;