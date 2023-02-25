import React from 'react';

const TableJeugdbestuur = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Functie</th>
                        <th>E-mail</th>
                        <th>Mobiel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Everaerts Tim</td>
                        <td>AVJO / Jeugdvoorzitter</td>
                        <td>tim@scduffel.be</td>
                        <td>0489/740210</td>
                    </tr>
                    <tr>
                        <td>Bernaerts Peter</td>
                        <td>OVJO</td>
                        <td>peter@scduffel.be</td>
                        <td>0486/686888</td>
                    </tr>
                    <tr>
                        <td>Ruelens Gilles</td>
                        <td>Secretaris</td>
                        <td>gilles@scduffel.be</td>
                        <td>0475/944088</td>
                    </tr>
                    <tr>
                        <td>Vergaelen Paul</td>
                        <td>Penningmeester</td>
                        <td>paul@scduffel.be</td>
                        <td>0478/887698</td>
                    </tr>
                    <tr>
                        <td>Meulepas Ronny</td>
                        <td>GC</td>
                        <td>ronny@scduffel.be</td>
                        <td>0474/635331</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableJeugdbestuur;