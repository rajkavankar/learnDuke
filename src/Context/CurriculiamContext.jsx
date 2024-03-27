import { createContext, useState, useContext } from "react"

export const CurriculamContext = createContext()

export const CurriculamProvider = ({ children }) => {
  const [curriculam, setCurriculam] = useState("all curriculam")
  return (
    <CurriculamContext.Provider
      value={{
        curriculam,
        setCurriculam,
      }}>
      {children}
    </CurriculamContext.Provider>
  )
}

export default function useCurriculam() {
  return useContext(CurriculamContext)
}
