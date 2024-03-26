import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"
import useLocation from "../../Context/LocationContext"
import useSubjects from "../../Context/SubjectsContext"

const SubjectsSelect = () => {
  const { setSubject } = useSubjects()
  const subjects = [
    {
      id: 1,
      subject: "Maths",
    },
    {
      id: 2,
      subject: "English",
    },
    {
      id: 3,
      subject: "Social science",
    },
    {
      id: 4,
      subject: "Science",
    },
  ]
  return (
    <div>
      <Form.Select
        onChange={(e) => setSubject(e.target.value)}
        aria-label='Default select example'
        className='inner-boxy'>
        <option value='World' className='bg-light'>
          Select subject
        </option>
        {subjects.map((item) => (
          <option key={item.id} className='bg-light' value={item.subject}>
            {item.subject}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}

export default SubjectsSelect
