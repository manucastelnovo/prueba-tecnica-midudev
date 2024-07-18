import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState<string>('')
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    useEffect(refreshFact, [])
    return { fact, refreshFact }
}