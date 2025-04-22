import { useContext } from "react"
import { WeatherContext } from "../Context/WeatherContext"
import { FaCloudSun, FaEye, FaTint } from "react-icons/fa";

function Days(){
  const context = useContext(WeatherContext);

  if (!context || !context.weatherData) return null;

  const { days } = context.weatherData;


  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Next 7-Days Forecast</h2>
      <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scroll-smooth snap-x snap-mandatory">
        {days.map((day, index) => (
          <div
            key={index}
            className="min-w-[250px] flex-shrink-0 p-4 bg-gradient-to-br from-gray-300 to-teal-100 rounded-xl shadow-md text-gray-800 snap-center"
          >
            <h4 className="text-lg font-semibold mb-1">{day.datetime}</h4>
            <p className="text-md mb-2 flex items-center gap-2">
              <FaCloudSun className="text-yellow-500" /> {day.conditions}
            </p>
            <p className="text-4xl font-bold mb-4">
              {((day.tempmax-32)*(5/9)).toFixed(1)}° / {((day.tempmin-32)*(5/9)).toFixed(1)}°
            </p>

            <div className="space-y-1 text-sm">
              <p className="flex items-center gap-2">
                <FaTint className="text-cyan-600" />
                Humidity: {day.humidity}%
              </p>
              <p className="flex items-center gap-2">
                <FaEye className="text-gray-600" />
                Visibility: {day.visibility} mi
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default Days