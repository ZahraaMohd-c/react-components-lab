const WeatherData = (props) => {
    return (
        <>
            <p><span>conditions: </span>{props.forecast.conditions}</p>
            <p><span>time: </span>{props.forecast.time}</p>
        </>
    )

}

export default WeatherData