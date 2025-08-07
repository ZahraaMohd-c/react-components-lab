const WeatherIcon = (props) => {
    return (
         <img src={props.forecast.img} alt={props.forecast.imgAlt} />

    )


}

export default WeatherIcon