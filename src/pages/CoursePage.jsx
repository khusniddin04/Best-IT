import React, { useEffect, useState } from 'react'
import '../styles/coursePage.css'
function CoursePage() {
  const [allCourses, setAllCourses]=useState(null)
  useEffect(()=>{
    getCourses()
  }, [])
  // getting all courses
  async function getCourses() {
    const fetchCourses = await fetch("https://crmpanel-yle6.onrender.com/courses")
    const courses = await fetchCourses.json()
    setAllCourses(courses.data)
  }

  console.log(allCourses);
  return (
    <div className='coursePage'>
      <div className="container">
        <div className="createCourseModal">
          
        </div>
           <button >Yangi kurs yaratish</button> 

           <div className="wrapper">
             {allCourses?.map((course)=>{
              return(
                <div className="course" key={course._id}>
                <h4>{course.course_name}</h4>
                <h5> Davomiyligi <span>{course.course_month}</span> oy</h5>
                <h5>Narxi <span>{course.course_price}</span> so'm</h5>

                <button>Update</button>
                <button>Delete</button>
              </div>
              )
             })}
            </div>  
      </div>     
    </div>
  )
}

export default CoursePage