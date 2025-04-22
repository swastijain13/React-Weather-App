import Dashboard from './Components/Dashboard'
import { WeatherProvider } from './Context/WeatherContext'

function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  )
}

export default App
