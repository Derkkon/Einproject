import React from 'react';

const TableJeugdbestuur = () => {
    return (
        <table className='container mx-auto text-left border-separate border border-slate-400'>
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
                    <td className='border border-slate-300'>Bernaerts Peter</td>
                    <td className='border border-slate-300'>OVJO</td>
                    <td className='border border-slate-300'>peter@scduffel.be</td>
                    <td className='border border-slate-300'>0486/686888</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Ruelens Gilles</td>
                    <td className='border border-slate-300'>Secretaris</td>
                    <td className='border border-slate-300'>gilles@scduffel.be</td>
                    <td className='border border-slate-300'>0475/944088</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Vergaelen Paul</td>
                    <td className='border border-slate-300'>Penningmeester</td>
                    <td className='border border-slate-300'>paul@scduffel.be</td>
                    <td className='border border-slate-300'>0478/887698</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Meulepas Ronny</td>
                    <td className='border border-slate-300'>GC</td>
                    <td className='border border-slate-300'>ronny@scduffel.be</td>
                    <td className='border border-slate-300'>0474/635331</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableJeugdbestuur;