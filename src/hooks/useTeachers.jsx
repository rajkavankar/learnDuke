import axios from "axios"
import { useState, useEffect } from "react"

const URL = "http://localhost:5000/teachers"
export const useTeachers = () => {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios({
          url: URL,
          method: "GET",
        })

        setTeachers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeacher()
  }, [])

  return { teachers }
}

export const useGetTeacherById = (id) => {
  const [teacher, setTeacher] = useState({})

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios({
          url: `${URL}/${id}`,
          method: "GET",
        })

        setTeacher(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTeacher()
  }, [id])

  return { teacher }
}
