export const getAllAppData = () => {
    return ploegenData.map(e => ({...e}))
}


const ploegenData = [
    {
        id: 0,
        ploegName: "Duffel",
        spelers: [
            {
                id: 0,
                name: "John Wick",
                age: "34"
            },
            {
                id: 1,
                name: "Ron Weasley",
                age: "12"
            }
        ],
    },
    {
        id: 1,
        ploegName: "Mechelen",
        spelers: [
            {
                id: 0,
                name: "Juan Carlos",
                age: "23"
            },
            {
                id: 1,
                name: "Harry Potter",
                age: "43"
            }
        ],
    }
]