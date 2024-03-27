import { createContext, useState, useContext } from "react"

export const ExamsContext = createContext()

export const ExamsProvider = ({ children }) => {
  const [exams, setExams] = useState("all exams")
  return (
    <ExamsContext.Provider
      value={{
        exams,
        setExams,
      }}>
      {children}
    </ExamsContext.Provider>
  )
}

export default function useExams() {
  return useContext(ExamsContext)
}
