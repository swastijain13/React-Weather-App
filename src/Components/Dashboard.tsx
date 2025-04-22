import { useContext, useState } from "react";
import { SECRET_KEY } from "../config";
import axios from "axios";
import Current from "./Current";
import Days from "./Days";
import { FaSearch } from "react-icons/fa";
import { WeatherContext, WeatherData } from "../Context/WeatherContext";
 
function Dashboard(){
    const { weatherData, setWeatherData } = useContext(WeatherContext)
    const [city, setCity] = useState<string>("Pune")
    const [error, setError] = useState("");

    const fetchWeatherDetails = async() =>{
        try {
            setError("")
            const res = await axios.get<WeatherData>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&key=${SECRET_KEY}&contentType=json`)

            // console.log(res.data) 
            setWeatherData(res.data)
        }
        catch(err : any){
            setWeatherData(null);
            if (err.response && err.response.status === 400) {
                setError("City not found. Please enter a valid city.");
              } else {
                setError("Failed to fetch weather data.");
              }
            console.log(err)
        }
        // console.log(weatherData)
    }

    
    return (
        <div className="w-full min-h-screen rounded bg-gradient-to-br from-orange-200 to-slate-700 flex flex-col items-center mx-auto ml-10 mr-10 px-10">
            <h1 className="text-4xl font-bold text-center text-black-900 drop-shadow-md py-5 px-5">
                Weather App
            </h1>
            <div className="w-full py-8">
                <div className="flex items-center gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="border border-gray-300 px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    <button
                        onClick={fetchWeatherDetails}
                        className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition"
                        >
                        <FaSearch />
                    </button>
                </div>
        

            {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
                    {error}
                </div>
            )}

            {weatherData && (
                <>
                    <Current />
                    <Days />
                </>
            )}
      </div>
    </div>
  );
}

export default Dashboard

