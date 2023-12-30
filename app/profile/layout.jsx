'use client';
import Navbar from "../components/navbar";
import '@/style/profilepage.scss'
import Provider from "../providers/provider";
import {useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { ImFolderUpload } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";



export default function profilepage({ children }){
    const { data: session } = useSession();

    return(
        <Provider>
        <div className="profilePage">
            <Navbar setNavbarvalue={true}/>
            <div className="profilescreen">
                <div className="profileleft">
                    <div className="profilegreetings">
                        <Image src={session?.user.image} width={40} height={40}  className="profileImage"/>
                        <div className="profilenameblock">
                            <p className="hello">Hello,</p>
                            <p className="profileName">{session?.user.name.toLocaleUpperCase()}</p>
                        </div>
                    </div>
                    <div className="profilesettings">
                        <Link href={"/profile"} className="profilesettingsItem">
                            <BsPersonFill  color="#0096FF" size={22}/> 
                            <p>PERSONAL INFO</p>
                        </Link>
                        <hr />
                        <div className="profilesettingsItem">
                            <ImFolderUpload  color="#0096FF" size={22}/> 
                            <p>MY BOOKINGS</p>
                            <IoIosArrowForward className="EndArrow" size={22}/>

                        </div>
                        <hr />
                        <Link href={"/profile/coupons"} className="profilesettingsItem">
                            <MdLocalOffer  color="green" size={22}/> 
                            <p>COUPONS</p>
                        </Link>
                        <hr />
                        <div className="profilesettingsItem">
                            <FaHeart  color="red" size={22}/> 
                            <p>SAVED VILLAS</p>
                        </div>
                        <hr />
                        <div className="profilesettingsItem">
                            <BiSupport  color="#0096FF" size={22}/> 
                            <p>HELP AND SUPPORT</p>
                        </div>
                        <div className="profilesettingsItem logout">
                            <MdLogout  color="black" size={22}/> 
                            <p>log out</p>
                        </div>
                    </div>
                </div>
                <div className="profileright">{children}</div>
            </div>
        </div>
        </Provider>
    )
}