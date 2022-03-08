import {useState} from "react";

const useGames = () => {
    let [title, setTitle] = useState('')

    const handleChange = (e) => setTitle(e.target.value)

    return [ title, handleChange ]
}

export default useGames