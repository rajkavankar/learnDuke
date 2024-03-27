import React from "react"
import { Form } from "react-bootstrap"
import useExams from "../../Context/ExamsContext"

const ExamsSelect = () => {
  const { setExams } = useExams()
  const exams = [
    {
      id: 1,
      title: "JEE",
    },
    {
      id: 2,
      title: "NEET",
    },
  ]
  return (
    <div>
      <Form.Select
        onChange={(e) => setExams(e.target.value)}
        aria-label='Default select example'
        className='inner-boxy'>
        <option value='all exams' className='bg-light'>
          Select exams
        </option>
        {exams.map((item) => (
          <option key={item.id} className='bg-light' value={item.title}>
            {item.title}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}

export default ExamsSelect
