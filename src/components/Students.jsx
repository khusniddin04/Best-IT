import React, { useEffect, useState } from 'react'
import Student from './Student'
import "../styles/student.css"
function Students() {
  const[allStudents, setAllStudents]=useState(null)

  useEffect(()=>{
    getAllStudents()
  }, [])
  // get all students
  async function getAllStudents() {
    const fetchStudents = await fetch("https://crmpanel-yle6.onrender.com/students/")
    const json = await fetchStudents.json()
    console.log(json.data);
    setAllStudents(json.data)
  }
  return (
    <section className='students'>
        <div className="container">
            <div className="students__wrapper">
              {allStudents?.map((item)=>{
                return(
                  <Student key={item._id} student={item} />

                )
              })}
               
            </div>
        </div>
    </section>
  )
}

export default Students