import './whether.css'
import heavyRain from './../../img/heavyRain.png'
import cloudy from './../../img/cloudy.PNG'
import rainy from './../../img/rainy.PNG'
import sunny from './../../img/sunny.PNG'


const weatherInfo = [
    {
        weekDey: "Monday",
        imgURL: sunny,
        temp: "36C",
    },
    {
        weekDey: "Tuesday",
        imgURL: cloudy,
        temp: "32C",
    },
    {
        weekDey: "Wednesday",
        imgURL: heavyRain,
        temp: "35C",
    },
    {
        weekDey: "Thursday",
        imgURL: heavyRain,
        temp: "45C",
    },
    {
        weekDey: "Friday",
        imgURL: heavyRain,
        temp: "36C",
    },
    {
        weekDey: "Saturday",
        imgURL: sunny,
        temp: "37C",
    },
    {
        weekDey: "Sunday",
        imgURL: cloudy,
        temp: "39C",
    }
]
function Whether() {
    return <div>
        <h1>Whether this week</h1>
        <div className='whether'>
            {weatherInfo.map((elm, index) => {
                return <div key={index} className='day'>
                    <h3>{elm.weekDey}</h3>
                    <img width='150' src={elm.imgURL} />
                    <h5>{elm.temp}</h5>
                </div>
            })
            }
        </div>
    </div>
}
export default Whether