import React, { useEffect, useReducer, useRef, useState } from "react";
import "../styles/groups.css";
import { NavLink } from "react-router-dom";
function Groups() {
  const [update, forceUpdate] = useReducer((x) => x + 1);
  const [allGroups, setAllGroups] = useState(null);
  const [allTeachers, setAllTeachers] = useState(null);
  const [allCourses, setAllCourses] = useState(null);
  const [allLids, setAllLids] = useState(null);
  const [selectedLids, setSelectedLids] = useState(null);
  let createGroupModalContainer = useRef();
  let createGroupModalContainer1 = useRef();
  let groupName = useRef();
  let groupDate = useRef();
  let groupTime = useRef();
  let groupTeacher = useRef();
  let groupCourse = useRef();
  useEffect(() => {
    getGroups();
    getAllTeachers();
    getAllCourses();
    getAllLids()
  }, [update]);
  // get all teachers
  async function getAllTeachers() {
    const fetchTeacher = await fetch(
      "https://crmpanel-yle6.onrender.com/employees"
    );
    const json = await fetchTeacher.json();
    setAllTeachers(json?.data);
  }
  async function getAllCourses() {
    const fetchTeacher = await fetch(
      "https://crmpanel-yle6.onrender.com/courses"
    );
    const json = await fetchTeacher.json();
    setAllCourses(json?.data);
  }
  // get all groups
  async function getGroups() {
    const fetchGroups = await fetch(
      "https://crmpanel-yle6.onrender.com/groups"
    );
    const groups = await fetchGroups.json();
    setAllGroups(groups.data);
  }
  
  function openCreateGroupModal() {
    createGroupModalContainer.current.classList.add("show");
  }
  function closeCreateGroupModal() {
    createGroupModalContainer.current.classList.remove("show");
  }
  // getting selected lid
  async function getAllLids() {
    let fetchAllLids = await fetch("https://crmpanel-yle6.onrender.com/users");
    let json = await fetchAllLids.json();
    setAllLids(json.data);
  }
  
  function nextStep(e) {
    e.preventDefault()
    let selectedLids1 = allLids?.filter(
      (item) => item?.courses_ref_id?._id === groupCourse.current.value
    );
    setSelectedLids(selectedLids1);
    createGroupModalContainer1.current.classList.add("show")
    closeCreateGroupModal()
  }
  // create new group
  async function createGroup(e) {
    e.preventDefault();
    let allStudents = createGroupModalContainer1.current.querySelectorAll("input:checked")
    let lid_arr =[]
    allStudents.forEach((item)=>{
      lid_arr.push(item.id)
    })
    let tayyor = {
      id:lid_arr
    }
    await fetch('https://crmpanel-yle6.onrender.com/students/new', {
      method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(tayyor)
    })
    let fetchAllStudents= await fetch("https://crmpanel-yle6.onrender.com/students/")
    let students = await fetchAllStudents.json()
    console.log(students.data);
   let filteredStudents= students.data.filter((item)=> item.courses_ref_id._id===groupCourse.current.value)
   let filteredStudentsID =filteredStudents.map((item)=>item._id)
   console.log(filteredStudentsID);

    
    let ready = {
      group_name: groupName.current.value,
      group_date: groupDate.current.value,
      group_time: groupTime.current.value,
      employee_ref_id: groupTeacher.current.value,
      courses_ref_id: groupCourse.current.value,
      student_ref_id:filteredStudentsID
    };
    await fetch("https://crmpanel-yle6.onrender.com/groups", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready),
    });
    closeCreateGroupModal();
    forceUpdate();
  }

//  async function test(e) {
//     e.preventDefault()
//     let allStudents = createGroupModalContainer1.current.querySelectorAll("input:checked")
//     let lid_arr =[]
//     allStudents.forEach((item)=>{
//       lid_arr.push(item.id)
//     })

//     let tayyor = {
//       id:lid_arr
//     }
//     let result =   await fetch('https://crmpanel-yle6.onrender.com/students/new', {
//       method:"POST",
//       headers:{
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify(tayyor)
//     })

//     let res =await result.json()
//     console.log(res);
//     let fetchAllStudents= await fetch("https://crmpanel-yle6.onrender.com/students/")
//     let students = await fetchAllStudents.json()
//     console.log(students.data);
//    let filteredStudents= students.data.filter((item)=> item.courses_ref_id._id===groupCourse.current.value)
//    let filteredStudentsID =filteredStudents.map((item)=>item._id)
//    console.log(filteredStudentsID);
//   }
  return (
    <div className="container">
      <h2>Guruhlar</h2>
      <button onClick={openCreateGroupModal}>Yangi guruh yaratish</button>
      <div className="createGroupContainer" ref={createGroupModalContainer}>
        <form className="createGroupForm" onSubmit={nextStep}>
          <div className="nav">
            <h4>Yangi guruh yaratish</h4>
            <span onClick={closeCreateGroupModal}>x</span>
          </div>
          <label htmlFor="a">Guruh nomi</label>
          <input ref={groupName} id="a" type="text" /> <br />
          <label htmlFor="b">Guruhning boshlanish sanasi</label>
          <input ref={groupDate} id="b" type="date" /> <br />
          <label htmlFor="c">Guruh boshlanish vaqti</label>
          <input ref={groupTime} id="c" type="time" /> <br />
          <select ref={groupTeacher}>
            {allTeachers?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.full_name}
                </option>
              );
            })}
          </select>
          <select ref={groupCourse}>
            {allCourses?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.course_name}
                </option>
              );
            })}
          </select>
          <button type="submit">talaba qo'shish</button>
        </form>
      </div>
      <div ref={createGroupModalContainer1} className="createGroupContainer1">
        <form className="createGroupForm" onSubmit={createGroup}>
          {selectedLids?.map((item) => {
            return (
              <div className="selectedLid" key={item._id}>
                <label htmlFor={item._id}>{item.full_name}</label>
                <input type="checkbox"  id={item._id} />
              </div>
            );
          })}

          <button type="submit">Guruh yaratish</button>
        </form>
      </div>
      <div className="group__grid">
        {allGroups?.map((item) => {
          return (
            <NavLink
              to={`/groups/${item._id}`}
              className="group__card"
              key={item._id}
            >
              <h4>{item?.courses_ref_id?.course_name}</h4>
              <h4>{item?.group_name} </h4>
              <h4>
                <span>{item?.student_ref_id?.length}</span> ta o'quvchi
              </h4>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Groups;
