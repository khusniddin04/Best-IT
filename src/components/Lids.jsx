import React, { useEffect, useReducer, useRef, useState } from "react";
import "../styles/lids.css";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";

function Lids() {
  // force update is used to update data without refreshing page
  const[update_value, forceUpdate] = useReducer(x=>x+1)
  const [allLids, setAllLids] = useState(null);
  const [allCourses, setAllCourses] = useState(null);
  const [lidID, setLidID]=useState(null)
  const editModal = useRef()
  const addLidModal = useRef()
  const lidName = useRef()
  const lidPhone = useRef()
  const lidCourse = useRef()
  const editLidName = useRef()
  const editLidPhone = useRef()
  // const editLidCourse = useRef()
  const editForm = useRef()
  useEffect(() => {
    getAllLids();
    getAllCourses();
  }, [update_value]);
  
  //    getting all lids
  async function getAllLids() {
    let fetchAllLids = await fetch("https://crmpanel-yle6.onrender.com/users");
    let json = await fetchAllLids.json();
    setAllLids(json.data);
    
  }
  // add new LID => used POST method
 async function addLid(e) {
  e.preventDefault()
  let ready={
    full_name: lidName.current.value,
    contact: lidPhone.current.value,
    courses_ref_id:lidCourse.current.value
  }
 let result =await fetch("https://crmpanel-yle6.onrender.com/users/register/", {
    method:"POST",
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
    body:JSON.stringify(ready)
  })
  closeAddLidModal()
 await result.json()
 forceUpdate()

}
  //   getting all courses
  async function getAllCourses() {
    let fetchAllLids = await fetch(
      "https://crmpanel-yle6.onrender.com/courses"
    );
    let json = await fetchAllLids.json();
    setAllCourses(json);
  }
  // open lid modal
  function openAddLidModal() {
    addLidModal.current.classList.add("showEditModal")
  }
  // close lid modal
  function closeAddLidModal() {
    addLidModal.current.classList.remove("showEditModal")
  }
  //   open edit modal and edit lid=> used PUT method
 function openEditModal(e) {
    let lid_id = e.target.parentElement.parentElement.id;
    editModal.current.classList.add("showEditModal")
    let selectedLid = allLids?.find((lid)=>lid._id ===lid_id)
    if(selectedLid){
        editLidName.current.value = selectedLid?.full_name
        editLidPhone.current.value = selectedLid?.contact
      }
      setLidID(lid_id)
    
  }
  // edit lid PUT
  async function editLid(event){
    
      event.preventDefault()
      let updated_user={
        full_name: editLidName.current.value,
        contact: editLidPhone.current.value,
        // courses_ref_id:editLidCourse.current.value
      }
    let result =await fetch(`https://crmpanel-yle6.onrender.com/users/${lidID}`, {
        method:"PUT",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       },
        body:JSON.stringify(updated_user)
      })
      
      editModal.current.classList.remove("showEditModal")

      await result.json()
      forceUpdate()
      // setAllLids(prevLid =>[...prevLid, newLid])

  }
  // close edit modal
  function closeEditModal() {
    editModal.current.classList.remove("showEditModal")
  }
  // delete LID
  async function deleteLid(e) {
    let lid_id = e.target.parentElement.parentElement.parentElement.id
   await fetch(`https://crmpanel-yle6.onrender.com/users/${lid_id}`, {
      method:"DELETE"
    })
    e.target.parentElement.parentElement.parentElement.style.display = "none"
    forceUpdate()
  }
  return (
    <section className="lid">
      <div className="container">
        <button onClick={openAddLidModal}>Yangi Lid qo'shish</button>
         <div className="addLidModal" ref={addLidModal}>
         <form onSubmit={(e)=>addLid(e)} className="addLidForm editLidForm">
            <div>
              <h4>Yangi Lid qo'shish</h4>
              <span onClick={closeAddLidModal}>x</span>
            </div>
            <input ref={lidName} type="text" placeholder="ism" />
            <input ref={lidPhone} type="number" placeholder="telefon" />
            <select ref={lidCourse} >
              {allCourses?.data?.map((course)=>{
                return(
                  <option key={course._id} value={course._id}>{course.course_name}</option>
                )
              })}
            </select>
            <button type="submit">Saqlash</button>
          </form>
          </div> 
        <div className="lid__wrapper">
          {allCourses?.data?.map((item) => {
            let filteredLids = allLids?.filter(
              (item1) => item1?.courses_ref_id?._id === item?._id
            );
            return (
              <div className="lids" key={item._id}>
                <h2>{item.course_name}</h2>
                {filteredLids?.reverse().map((lid) => {
                  return (
                    <div className="lids__card" key={lid._id} id={lid._id}>
                      <div className="lids__content">
                        <h4>{lid.full_name}</h4>
                        <p>{lid.contact}</p>
                      </div>
                      <div className="lids__icons">
                        <MdEdit
                          className="lid_icon1"
                          onClick={(e) => openEditModal(e)}
                        />
                        <FaPlus className="lid_icon2" />
                        <RiDeleteBinFill className="lid_icon3" onClick={(e)=>deleteLid(e)} />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* edit modal */}
        <div className="editModal" ref={editModal}>
          <form ref={editForm} onSubmit={(event)=>editLid(event)} className="editLidForm">
            <div>
              <h4>O’zgartirish</h4>
              <span onClick={closeEditModal}>x</span>
            </div>
            <input ref={editLidName} type="text" placeholder="ism" />
            <input ref={editLidPhone} type="number" placeholder="telefon" />
            {/* <select ref={editLidCourse} >
              {allCourses?.data?.map((course)=>{
                return(
                  <option key={course._id} value={course._id}>{course.course_name}</option>
                )
              })}
            </select> */}
            <button type="submit">Saqlash</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Lids;
