import React, { useEffect, useState } from 'react'
import DisplayInfo from './DisplayInfo'
import axios from 'axios'
import { apiKey } from './keys'

export default function SearchComponents() {
    const [value, setValue] = useState('mumbai')
    const [buttonValue, setButtonValue] = useState('mumbai')
    const [weatherInfo, setweatherInfo] = useState({})

    useEffect(() => {
        async function getWeatherInfo() {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${buttonValue}&appid=${apiKey}`)
            console.log("Data", data)
            setweatherInfo(data)
        }
        getWeatherInfo()
    }, [buttonValue])



    const ButtonClick = () => {
        setButtonValue(value)
    }



    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={ButtonClick}>Fetch Details</button>

            <DisplayInfo
                weatherInfo={weatherInfo}
            />

        </div>
    )
}
