import React from 'react'

export default function DisplayInfo(props) {
    const { weatherInfo } = props
    return (
        <div>

            {Object.keys(weatherInfo).length <= 0 ? "No data found" : <>
                <h1>Weather : {weatherInfo.weather[0].main} </h1>
                <h1>Degree : {weatherInfo.wind.deg} </h1>
                <h1>Condition : {weatherInfo.base} </h1>
                <h1>Place : {weatherInfo.name}</h1>
                <h1>Date : {new Date().toLocaleDateString()}</h1>
            </>
            }
        </div>
    )
}
