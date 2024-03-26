import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa"
import useLocation from "../../Context/LocationContext"

const LocationSelect = () => {
  const { setLocation } = useLocation()
  const locations = [
    {
      id: 1,
      location: "Chennai",
    },
    {
      id: 2,
      location: "Mumbai",
    },
    {
      id: 3,
      location: "Surat",
    },
  ]
  return (
    <div>
      <Form.Select
        onChange={(e) => setLocation(e.target.value)}
        aria-label='Default select example'
        className='inner-boxy'>
        <option value='World' className='bg-light'>
          Select location
        </option>
        {locations.map((item) => (
          <option key={item.id} className='bg-light' value={item.location}>
            {item.location}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}

export default LocationSelect
