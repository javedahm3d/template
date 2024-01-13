'use client'
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import "@/style/villaImageSection.scss"
import React, { useState } from 'react'
import Modal from 'react-modal'
import ShowPhotos from "./showPhotos";

export default function VillaImageSection({imageList}){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className="imageandname">
          <h1 className="stayname">Luxury pool villa: 4BHK: Curtorim,Goa </h1>
          <div className="imageconatiner">
            <div className="maindetailsimage">
              <Image
                src={imageList[0]}
                alt="villa image"
                fill={true}
                sizes="(max-width: 1000px) 100vw, (max-width: 100px) 50vw, 33.3vw"
                objectFit="cover"
                layout="reponsive"
              />
            </div>
            <div className="maindetailsimagesecondary">
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src={imageList[1]}
                  alt="villa image"
                  fill={true}
                  sizes="(max-width: 1000px) 100vw, (max-width: 100px) 50vw, 33.3vw"
                  objectFit="cover"
                  layout="reponsive"
                  
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src={imageList[2]}
                  alt="villa image"
                  fill={true}
                  sizes="(max-width: 1000px) 100vw, (max-width: 100px) 50vw, 33.3vw"
                  objectFit="cover"
                  layout="reponsive"
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src={imageList[3]}
                  alt="villa image"
                  fill={true}
                  sizes="(max-width: 1000px) 100vw, (max-width: 100px) 50vw, 33.3vw"
                  objectFit="cover"
                  layout="reponsive"
                />
              </div>
              <div className="maindetailsimagesecondaryinner">
                <Image
                  src={imageList[4]}
                  alt="villa image"
                  fill={true}
                  sizes="(max-width: 1000px) 100vw, (max-width: 100px) 50vw, 33.3vw"
                  objectFit="cover"
                  layout="reponsive"
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