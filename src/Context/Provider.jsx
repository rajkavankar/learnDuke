import React from "react"
import { LocationProvider } from "./LocationContext"
import { SubjectsProvider } from "./SubjectsContext"
import { CurriculamProvider } from "./CurriculiamContext"
import { ExamsProvider } from "./ExamsContext"

const Provider = ({ children }) => {
  return (
    <div>
      <ExamsProvider>
        <CurriculamProvider>
          <LocationProvider>
            <SubjectsProvider>{children}</SubjectsProvider>
          </LocationProvider>
        </CurriculamProvider>
      </ExamsProvider>
    </div>
  )
}

export default Provider
