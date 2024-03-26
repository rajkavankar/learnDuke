import { createContext, useState, useContext } from "react"

export const SubjectsContext = createContext()

export const SubjectsProvider = ({ children }) => {
  const [subject, setSubject] = useState("All subjects")
  return (
    <SubjectsContext.Provider
      value={{
        subject,
        setSubject,
      }}>
      {children}
    </SubjectsContext.Provider>
  )
}

export default function useSubjects() {
  return useContext(SubjectsContext)
}
