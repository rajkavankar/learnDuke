import { createContext, useState, useContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("World")
  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
      }}>
      {children}
    </LocationContext.Provider>
  )
}

export default function useLocation() {
  return useContext(LocationContext)
}
