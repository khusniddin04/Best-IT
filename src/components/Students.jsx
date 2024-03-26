import React from 'react'
import Student from './Student'
import "../styles/student.css"
function Students() {
  return (
    <section className='students'>
        <div className="container">
            <div className="students__wrapper">
                <Student/>
                <Student/>
            </div>
        </div>
    </section>
  )
}

export default Students