import React from 'react';

const TableBestuur = () => {
    return (
        <table className='table-fixed container mx-auto border-separate border border-slate-400'>
            <thead>
                <tr>
                    <th className='border border-slate-300'>Naam</th>
                    <th className='border border-slate-300'>Functie</th>
                    <th className='border border-slate-300'>E-mail</th>
                    <th className='border border-slate-300'>Mobiel</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-300'>Everaerts Tim</td>
                    <td className='border border-slate-300'>AVJO / Jeugdvoorzitter</td>
                    <td className='border border-slate-300'>tim@scduffel.be</td>
                    <td className='border border-slate-300'>0489/740210</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>fgh rgrh</td>
                    <td className='border border-slate-300'>dgd</td>
                    <td className='border border-slate-300'>ddgg</td>
                    <td className='border border-slate-300'>gg</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>dfsh th</td>
                    <td className='border border-slate-300'>fdf</td>
                    <td className='border border-slate-300'>fffd</td>
                    <td className='border border-slate-300'>fdfff</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>fdffbb dthg</td>
                    <td className='border border-slate-300'>ffddf</td>
                    <td className='border border-slate-300'>ff</td>
                    <td className='border border-slate-300'>rhthdt</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>rejuuj gjf</td>
                    <td className='border border-slate-300'>dtht</td>
                    <td className='border border-slate-300'>eht</td>
                    <td className='border border-slate-300'>dht</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableBestuur;