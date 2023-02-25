import React from 'react';

const Bestuur = () => {
    return (
        <div>
            <h1 className='text-3xl text-center p-5 font-bold text-red-600'>
                Het Bestuur
            </h1> 
            <h2 className='text-xl text-center mt-5 font-bold text-red-400 mb-5'>
                Jeugdbestuur & werking
            </h2>
            <div>
                <h6 className='text-md text-center mt-5 font-regular mx-3'>
                Naast het jeugdbestuur hebben we ook een jeugdwerking, dit zijn een gedreven groep vrijwilligers die zich
                <br/> meer dan 100% inzetten voor onze jeugdwerking op verschillende vlakken. Denk maar aan:
                <br/> Website, organiseren van events, sociale media , sponsoring, ontbijtmanden, afgevaardigden, tornooien,
                <br/> familiedag, verkoop sleutelhangers, kledij,
                stickerboek, pro soccer data, flames …
                </h6>
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
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bestuur;