import React from 'react';
import TableBestuur from '../componenten/Bestuur pagina comp/TableBestuur';
import TableJeugdbestuur from '../componenten/Bestuur pagina comp/TableJeugdbestuur';

const Bestuur = () => {
    return (
        <div>
            <h1 className='text-3xl text-center p-5 font-bold text-red-600'>
                Het Bestuur
            </h1> 
            <h2 className='text-xl text-center my-5 font-bold text-red-400'>
                Jeugdbestuur & werking
            </h2>
            <div>
                <h6 className='text-md text-center my-5 font-regular mx-3'>
                    Naast het jeugdbestuur hebben we ook een jeugdwerking, dit zijn een gedreven groep vrijwilligers die zich
                    <br/> meer dan 100% inzetten voor onze jeugdwerking op verschillende vlakken. Denk maar aan:
                    <br/> Website, organiseren van events, sociale media , sponsoring, ontbijtmanden, afgevaardigden, tornooien,
                    <br/> familiedag, verkoop sleutelhangers, kledij,
                    stickerboek, pro soccer data, flames …
                </h6>
            </div>    
            <div className='my-5'>
                <TableJeugdbestuur/>
            </div>
            <div>
                <h2 className='text-xl text-center my-5 font-bold text-red-400'>
                    Bestuur bovenbouw
                </h2>
                <h6 className='text-md text-center my-5 font-regular mx-3'>
                    Naast het jeugdbestuur hebben we ook een jeugdwerking, dit zijn een gedreven groep vrijwilligers die zich
                    <br/> meer dan 100% inzetten voor onze jeugdwerking op verschillende vlakken. Denk maar aan:
                    <br/> Website, organiseren van events, sociale media , sponsoring, ontbijtmanden, afgevaardigden, tornooien,
                    <br/> familiedag, verkoop sleutelhangers, kledij,
                    stickerboek, pro soccer data, flames …
                </h6>
            </div>
            <div className='my-5'>
                <TableBestuur/>
            </div>    
        </div>
    );
};

export default Bestuur;