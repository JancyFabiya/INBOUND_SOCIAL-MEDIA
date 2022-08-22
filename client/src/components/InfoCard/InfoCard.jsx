import React,{useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal.jsx/ProfileModal'
// import { BsPencilSquare } from 'react-icons/bs'
const InfoCard = () => {
    const [modalOpened , setModalOpened] = useState(false)
  return (
<div className="InfoCard">
    <div className="infoHead">
        <h4>Info</h4>
        <div>
        {/* <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/> */}
        <ProfileModal
        modalOpened={modalOpened}
        setModalOpend={setModalOpened}
        />
        </div>
        {/* <BsPencilSquare/> */}

    </div>
    <div className="info">
        <span>
            <b>Status</b>
        </span>
        <span> in Relationship</span>
    </div>
    <div className="info">
        <span>
            <b>Lives in</b>
        </span>
        <span> Canada</span>
    </div>
    <div className="info">
        <span>
            <b>Works at</b>
        </span>
        <span> amazone</span>
    </div>
    <button className='button logout-button'>Home</button>
</div> 
 )
}

export default InfoCard