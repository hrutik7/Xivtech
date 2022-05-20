import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './cardone.css'
import data from './data'
const CardOne = () => {
  return (
    <div className='servicesMainDiv'>
         
         <div className="collaborate">
          <h4>Let's Collaborate</h4>  
        </div>
         
       
        {
            data.map((user) => (
            <Row>
                <Col md={6}>
                <div className="servicesDescription">
                <div className="servicesH2">
                    <h2>{user.title}</h2>
                </div>
                <div className="servicesH3">
                    <h3>
                    {user.subtitle}
                    </h3>
                </div>
                <div className="servicesP">
                  <p>
                    {user.arrow}
                  </p>

                  <img src='https://www.xivtech.io./Arrow-black.svg' alt='' />
                </div>
                </div>
                </Col>

                <Col  md={6}>
                
                    <img className="serviceImage" src={user.imageUrl} alt='' />
             
                </Col>
            </Row>
             ) )
}
    </div>
  )
}

export default CardOne