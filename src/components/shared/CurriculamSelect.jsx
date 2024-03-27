import React from "react"
import { Form } from "react-bootstrap"
import useCurriculam from "../../Context/CurriculiamContext"

const CurriculamSelect = () => {
  const { setCurriculam } = useCurriculam()
  const curriculam = [
    {
      id: 1,
      title: "CBSE",
    },
    {
      id: 2,
      title: "ICSE",
    },
  ]
  return (
    <div>
      <Form.Select
        onChange={(e) => setCurriculam(e.target.value)}
        aria-label='Default select example'
        className='inner-boxy'>
        <option value='all curriculam' className='bg-light'>
          Select curriculam
        </option>
        {curriculam.map((item) => (
          <option key={item.id} className='bg-light' value={item.title}>
            {item.title}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}

export default CurriculamSelect
