import React from "react"
// import { CCard, CRow, CCol, CCardBody, CCardImage, CCardTitle,CCardText} from '@coreui/react'
// import duke from "../assets/LearndukeLogo.png"
import Card from "./shared/Card"
import { Row, Col, Container, Badge } from "react-bootstrap"
import useLocation from "../Context/LocationContext"
import useSubjects from "../Context/SubjectsContext"
import "./body.css"
import { LuCheckCircle } from "react-icons/lu"
import person from "../assets/person.jpg"
import LocationSelect from "./shared/LocationSelect"
import SubjectsSelect from "./shared/SubjectsSelect"
import ExamsSelect from "./shared/ExamsSelect"
import CurriculamSelect from "./shared/CurriculamSelect"
import useCurriculam from "../Context/CurriculiamContext"
import RatingComponent from "./RatingComponent"

function Body() {
  const { location } = useLocation()
  const { subject } = useSubjects()
  const { curriculam } = useCurriculam()
  return (
    <>
      <div className=''>
        <div className='box k'>
          <h1 className=''>
            The Best {subject} Tutors for {curriculam} in {location}
          </h1>
          <button className='join_us'>Join Us</button>
          <button className='Learn_more'> learn more</button>
        </div>
        <Container>
          <Row className=' boxy space-y-2 lg:space-y-0'>
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
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='person_name'>Shiv-Maths</h2>
                  <RatingComponent value={2.8} />
                </div>
                <div className='flex justify-start items-center gap-2 text-green-700 font-semibold'>
                  <LuCheckCircle className='font-bold' />
                  Verified
                </div>
              </div>
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
              <h3 className='person_exam'>Price:</h3>
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
