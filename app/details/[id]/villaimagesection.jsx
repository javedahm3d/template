'use client'
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import "@/style/villaImageSection.scss"
import React, { useState } from 'react'
import Modal from 'react-modal'
import ShowPhotos from "./showPhotos";

export default function VillaImageSection(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className="imageandname">
          <h1 className="stayname">Luxury pool villa: 4BHK: Curtorim,Goa </h1>
          <div className="imageconatiner">
            <div className="maindetailsimage">
              <Image
                src="/h1.jpg"
                alt="villa image"
                fill={true}
                objectFit="cover"
              />
            </div>
            <div className="maindetailsimagesecondary">
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src="/h2.jpg"
                  alt="villa image"
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src="/h3.jpg"
                  alt="villa image"
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src="/h4.jpg"
                  alt="villa image"
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src="/h5.jpg"
                  alt="villa image"
                  fill={true}
                  objectFit="cover"
                />
              </div>
            </div>
            <button  className="showallimagesbutton" onClick={() => setIsOpen(true)}>
              <CgMenuGridR />
              Show all photos
            </button>
          </div>
        </div>

        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <ShowPhotos/>
        </Modal>
        </>
    )
}