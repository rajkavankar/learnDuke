import React from "react"
import { LocationProvider } from "./LocationContext"
import { SubjectsProvider } from "./SubjectsContext"

const Provider = ({ children }) => {
  return (
    <div>
      <LocationProvider>
        <SubjectsProvider>{children}</SubjectsProvider>
      </LocationProvider>
    </div>
  )
}

export default Provider
