// type version : Duplicate Error
type Player = {
    name: string
}

type Player = { // Duplicate identifier 'User'
    lastName: string
}

// -------------------------------
// interface version
interface User {
    name: string
}

interface User {
    lastName: string
}

interface User {
    health: number
}

const nico: User = {
    name: "nico",
    lastName: "oh",
    health: 100
}