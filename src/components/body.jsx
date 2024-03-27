import React from "react"
// import { CCard, CRow, CCol, CCardBody, CCardImage, CCardTitle,CCardText} from '@coreui/react'
// import duke from "../assets/LearndukeLogo.png"
import Card from "./shared/Card"
import { Row, Col, Container } from "react-bootstrap"
import useLocation from "../Context/LocationContext"
import useSubjects from "../Context/SubjectsContext"
import "./body.css"
import person from "../assets/person.jpg"
import LocationSelect from "./shared/LocationSelect"
import SubjectsSelect from "./shared/SubjectsSelect"
import ExamsSelect from "./shared/ExamsSelect"
import CurriculamSelect from "./shared/CurriculamSelect"
import useCurriculam from "../Context/CurriculiamContext"

function Body() {
  const { location } = useLocation()
  const { subject } = useSubjects()
  const { curriculam } = useCurriculam()
  return (
    <>
      <div className=''>
        <div className='box'>
          <h1 className=''>
            The Best {subject} Tutors for {curriculam} in {location}
          </h1>
          <button className='join_us'>Join Us</button>
          <button className='Learn_more'> learn more</button>
        </div>
        <Container>
          <Row className=' boxy'>
            {/* <CiLocationOn /> */}
            <Col>
              <LocationSelect />
            </Col>
            <Col>
              <SubjectsSelect />
            </Col>

            <Col>
              <ExamsSelect />
            </Col>
            <Col>
              <CurriculamSelect />
            </Col>
          </Row>
        </Container>
        <div className='carding'>
          <Card>
            <div className='left_side'>
              <img className='person' src={person} alt='' />
            </div>
            <div className='right_side'>
              <h2 className='person_name'>Shiv-Maths</h2>
              <h3 className='person_title'>
                Passionate and seasoned teacher with 5 years of experience
              </h3>
              <div className='exp_taught'>
                <h6 className='person_exp'> 5 years of experience</h6>
                <h6 className='person_taught'>170 taught</h6>
              </div>
              <p className='person_desc'>
                {" "}
                Sarah-Maths is an experienced and passionate teacher with over 5
                years of classroom experience in English in CBSE, ICSE, and IB
                curriculums. She has helped young learners between the ages of 4
                to 7 years acquire healthy social-behavioral skills
              </p>
              <h3 className='person_teaches'>Teaches: </h3>
              <h3 className='person_curri'>Curriculum:</h3>
              <h3 className='person_exam'>Exam:</h3>
              <div className='btn'>
                <button className='teachers_btn'>contact us</button>
                <button className='teachers_btnn'>session</button>
              </div>
            </div>
          </Card>

          <br />
          <Card>
            <div className='left_side'>
              <img className='person' src={person} alt='' />
            </div>
            <div className='right_side'>
              <h2 className='person_name'>Shiv-Maths</h2>
              <h3 className='person_title'>
                Passionate and seasoned teacher with 5 years of experience
              </h3>
              <div className='exp_taught'>
                <h6 className='person_exp'> 5 years of experience</h6>
                <h6 className='person_taught'>170 taught</h6>
              </div>
              <p className='person_desc'>
                {" "}
                Sarah-Maths is an experienced and passionate teacher with over 5
                years of classroom experience in English in CBSE, ICSE, and IB
                curriculums. She has helped young learners between the ages of 4
                to 7 years acquire healthy social-behavioral skills
              </p>
              <h3 className='person_teaches'>Teaches: </h3>
              <h3 className='person_curri'>Curriculum:</h3>
              <h3 className='person_exam'>Exam:</h3>
              <div className='btn'>
                <button className='teachers_btn'>contact us</button>
                <button className='teachers_btnn'>session</button>
              </div>
            </div>
          </Card>
          <br />
          <Card>
            <div className='left_side'>
              <img className='person' src={person} alt='' />
            </div>
            <div className='right_side'>
              <h2 className='person_name'>Shiv-Maths</h2>
              <h3 className='person_title'>
                Passionate and seasoned teacher with 5 years of experience
              </h3>
              <div className='exp_taught'>
                <h6 className='person_exp'> 5 years of experience</h6>
                <h6 className='person_taught'>170 taught</h6>
              </div>
              <p className='person_desc'>
                {" "}
                Sarah-Maths is an experienced and passionate teacher with over 5
                years of classroom experience in English in CBSE, ICSE, and IB
                curriculums. She has helped young learners between the ages of 4
                to 7 years acquire healthy social-behavioral skills
              </p>
              <h3 className='person_teaches'>Teaches: </h3>
              <h3 className='person_curri'>Curriculum:</h3>
              <h3 className='person_exam'>Exam:</h3>
              <div className='btn'>
                <button className='teachers_btn'>contact us</button>
                <button className='teachers_btnn'>session</button>
              </div>
            </div>
          </Card>
          <br />
        </div>
      </div>
    </>
  )
}

export default Body
