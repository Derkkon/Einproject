const TableData = ({id, spelers, ploegName}) => {
    return(
        <div>
            <h4 className="my-3 font-bold">{ploegName}</h4>
            <table className='table border' key={id}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spelers.map(o => <tr key={o.id}>
                            <td key={o.name}>{o.name}</td>
                            <td key={o.id}>{o.age}</td>
                        </tr>)}
                    </tbody>
            </table>
        </div>
    )
}
export default TableData;