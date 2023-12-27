import { useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const getJSONFromLocalStorage = () => {
        if(localStorage[key]){
            return JSON.parse(localStorage[key])
        } else {
            return defaultValue
        }
    }

    const [data, setData] = useState(() => getJSONFromLocalStorage())

    const setJSONToLocalStorage = (value) => {
        setData(value)
        localStorage[key] = JSON.stringify(value)
    }

    return [data, setJSONToLocalStorage]
}