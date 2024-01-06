"use client";
import { useSession, getProviders } from "next-auth/react";
import "@/style/profile/personal.scss";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function personalInfo() {
  const { data: session } = useSession();
  const [editenable,seteditenable] = useState(true)
  return (
    <div className="personalInfoScreen">
      <div className="profileScreenTitle">
        <p>Personal Information </p>
        <div> 
        {
            editenable ? <div className="editButton" onClick={() => seteditenable(false)}> <p>edit profile</p> <MdEdit size={22}/> </div> :
            <div className="editButton"> <p>save changes</p> <IoCloudUploadOutline size={22}/> </div> 
        }
         
              
         </div>
         
       </div>
      <div className="personalInfoItem">
        <p>Name</p>
        <textarea
          className={editenable?"profilePageTextArea":"profilePageTextArea editenable"}
          id="name"
          type="text"
          wrap="off"
          required
          defaultValue={session?.user.name}
          disabled={editenable}
          
        ></textarea>
      </div>
      <div className="personalInfoItem">
        <p>Email</p>
        <textarea
          className={editenable?"profilePageTextArea":"profilePageTextArea editenable"}
          id="email"
          type="text"
          wrap="off"
          required
          defaultValue={session?.user.email}
          disabled={editenable}
        ></textarea>
      </div>
      <div className="personalInfoItem">
        <p>Mobile Number</p>
        <textarea
          className={editenable?"profilePageTextArea":"profilePageTextArea editenable"}
          id="mobilenumebr"
          type="text"
          wrap="off"
          required
          defaultValue="+91 0000000000"
          disabled={editenable}
        ></textarea>
      </div>

      <div className="personalInfoItem">
        <p>user id</p>
        <textarea
          className="profilePageTextArea"
          id="useid"
          type="text"
          wrap="off"
          required
          defaultValue="#001"
          disabled={true}
        ></textarea>
      </div>

      <div className="joiningdate">
        <p>Joining Date: </p>
        <p>1st January 2023</p>
      </div>

      <div className="bookingcountCard">
        <p className="bookingcountheader">SCUCCESSFUL BOOKINGS MADE</p>
        <p className="bookingcount">3</p>

      </div>
    </div>
  );
}
