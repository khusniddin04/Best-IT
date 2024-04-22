import React, { useEffect, useReducer, useRef, useState } from "react";
import "../styles/coursePage.css";
import english from '../images/ingiliz.png'
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

function CoursePage() {
  const [update_value, forceUpdate] = useReducer((x) => x + 1);

  const [allCourses, setAllCourses] = useState(null);
  const [courseId, setCourseId] = useState("");
  let courseName = useRef();
  let coursePrice = useRef();
  let courseDuration = useRef();
  let courseDurationTime = useRef();
  let editCourseName = useRef();
  let editCoursePrice = useRef();
  let editCourseDuration = useRef();
  let editCourseDurationTime = useRef();
  let createCourseModal = useRef();
  let editCourseModal = useRef();
  useEffect(() => {
    getCourses();
  }, [update_value]);
  // create course
  async function createCourse(e) {
    e.preventDefault();
    let ready = {
      course_name: courseName.current.value,
      course_month: courseDuration.current.value,
      course_price: coursePrice.current.value,
      course_time: courseDurationTime.current.value,
    };
    let result = await fetch("https://crmpanel-yle6.onrender.com/courses/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready),
    });
    let newCourse = await result.json();
    setAllCourses((prev) => [...prev, newCourse.data]);
    closeCreateCourseModal();
  }
  // edit course
  async function editCourse(e) {
    e.preventDefault();
    let ready = {
      course_name: editCourseName.current.value,
      course_month: editCourseDuration.current.value,
      course_price: editCoursePrice.current.value,
      course_time: editCourseDurationTime.current.value,
    };

    await fetch(`https://crmpanel-yle6.onrender.com/courses/${courseId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready),
    });

    closeCreateCourseModal()
    forceUpdate()
  }
  // delete course
  async function deleteCourse(e) {
    let courseID = e.target.parentElement.id;
    await fetch(`https://crmpanel-yle6.onrender.com/courses/${courseID}`, {
      method: "DELETE",
    });
    forceUpdate();
  }

  // getting all courses
  async function getCourses() {
    const fetchCourses = await fetch(
      "https://crmpanel-yle6.onrender.com/courses"
    );
    const courses = await fetchCourses.json();
    setAllCourses(courses.data);
  }
  // openCreateCourseModal
  function openCreateCourseModal() {
    createCourseModal.current.classList.add("showCreateCourseModal");
  }
  // close (CreateCourseModal and edit modal)
  function closeCreateCourseModal() {
    createCourseModal.current.classList.remove("showCreateCourseModal");
    editCourseModal.current.classList.remove("showCreateCourseModal");
  }
  // open edit course modal
  function openEditCourseModal(e) {
    let courseID = e.target.parentElement.id;
    setCourseId(courseID);
    editCourseModal.current.classList.add("showCreateCourseModal");
    let selectedCourse = allCourses?.find((item) => item._id === courseId);
    if (selectedCourse) {
      editCourseName.current.value = selectedCourse.course_name;
      editCoursePrice.current.value = selectedCourse.course_price;
      editCourseDuration.current.value = selectedCourse.course_month;
    }
  }
  return (
    <div className="coursePage">
      <div className="container">
        <div className="createCourseModal" ref={createCourseModal}>
          <form onSubmit={(e) => createCourse(e)} className="addCourseForm">
            <div>
              <h4>Yangi kurs qo'shish</h4>
              <span onClick={closeCreateCourseModal}>x</span>
            </div>
            <input ref={courseName} type="text" placeholder="kurs nomi" />
            <input ref={coursePrice} type="number" placeholder="kurs narxi" />
            <input
              ref={courseDuration}
              type="number"
              placeholder="kurs davomiyligi (oy)"
            />
            <input ref={courseDurationTime} type="number" placeholder="kurs davomiyligi (soat)" />
            <button type="submit">qo'shish</button>
          </form>
        </div>
        <div className="editCourseModal" ref={editCourseModal}>
          <form onSubmit={(e) => editCourse(e)} className="addCourseForm">
            <div>
              <h4>Kursni o'zgartirish</h4>
              <span onClick={closeCreateCourseModal}>x</span>
            </div>

            <input ref={editCourseName} type="text" placeholder="kurs nomi" />
            <input
              ref={editCoursePrice}
              type="number"
              placeholder="kurs narxi"
            />
            <input
              ref={editCourseDuration}
              type="number"
              placeholder="kurs davomiyligi (oy)"
            />
            <input
              ref={editCourseDurationTime}
              type="number"
              placeholder="kurs davomiyligi (soat)"
            />
            <button type="submit">O'zgartirish</button>
          </form>
        </div>
        <button className=" openCreates" onClick={openCreateCourseModal}>Yangi kurs yaratish</button>

        <div className="wrapper">
          {allCourses?.map((course) => {
            return (
              <div className="course" key={course._id} id={course._id}>
                <img src={english} alt="" />
                <h4>{course.course_name}</h4>
                <h5>

                  Davomiyligi - <span>{course.course_month}</span> oy
                </h5>
                <div className="icons">

                  <h6>
                    Narxi - <span>{course.course_price}</span> so'm
                  </h6>
                  <div className="logos">

                  <BsPencilSquare className="logo" onClick={(e) => openEditCourseModal(e)}/>  
                  <br />
                  <RiDeleteBin6Line className="logo" onClick={(e) => deleteCourse(e)}/>
                  </div>

                  {/* <button >Update</button> */}
                  {/* <button >Delete</button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
