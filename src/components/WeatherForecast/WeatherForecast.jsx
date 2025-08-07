import './weatherForecast.css'
import WeatherIcon from '../WeatherIcon'
import WeatherData from '../WeatherData'

const WeatherForecast = (props) => {
    return (
        <>
            <div className="weather">
                <h2>{props.forecast.day}</h2>
                <WeatherIcon forecast={props.forecast} />
                <WeatherData forecast={props.forecast}/>

            </div>
        </>
    )

}

export default WeatherForecast