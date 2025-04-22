import { useContext } from "react"
import { WeatherContext } from "../Context/WeatherContext"
import { FaSun, FaMoon, FaWind, FaEye, FaTint, FaCloudSun } from 'react-icons/fa';


function Current(){

    const context = useContext(WeatherContext)

    if(!context || !context.weatherData) return null;

    const {
        address, 
        currentConditions: {
          conditions,
          temp,
          sunrise,
          sunset,
          windspeed,
          humidity,
          visibility,
        },
      } = context.weatherData;

    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 rounded-2xl shadow-xl text-gray-800">
            <div className="flex items-center justify-between mb-6">
                <div>
                <h2 className="text-6xl font-bold">{address}</h2>
                <p className="text-3xl flex items-center gap-2 font-medium">
                    <FaCloudSun className="text-yellow-500" />
                    {conditions}
                </p>
                </div>
                <p className="text-6xl font-extrabold">{ ((temp-32)*(5/9)).toFixed(1)}°C</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xl">
                <div className="flex items-center gap-2">
                <FaSun className="text-yellow-400" />
                <div>
                    <p className="font-semibold">Sunrise</p>
                    <p>{sunrise} a.m.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-xl">
                <FaMoon className="text-indigo-500" />
                <div>
                    <p className="font-semibold">Sunset</p>
                    <p>{sunset} p.m.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-xl">
                <FaWind className="text-blue-500" />
                <div>
                    <p className="font-semibold">Windspeed</p>
                    <p>{windspeed} mph</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-xl">
                <FaTint className="text-cyan-600" />
                <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{humidity}%</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-xl">
                <FaEye className="text-gray-700" />
                <div>
                    <p className="font-semibold">Visibility</p>
                    <p>{visibility} mi</p>
                </div>
            </div>
        </div>
    </div>
  );
};


export default Current