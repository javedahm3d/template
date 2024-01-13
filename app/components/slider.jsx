'use client'

import React, { useEffect } from 'react';
import "@/style/slider.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import Image from "next/image";

export default function Slider(){
    const data = [
      {
        imageUrl: '/h1.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Mumbai',
        price: 'Rs 8900',
        space: '2/3 bhk'
      },
      {
        imageUrl: '/h2.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Delhi',
        price: 'Rs 8900',
        space: '2/3 bhk'

      },
      {
        imageUrl: '/h3.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Chennai',
        price: 'Rs 8900',
        space: '2/3 bhk'

      },
      {
        imageUrl: '/h4.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Karnataka',
        price: 'Rs 8900',
        space: '2/3 bhk'

      },
      {
        imageUrl: '/h5.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Goa',
        price: 'Rs 8900',
        space: '2/3 bhk'

      },
      {
        imageUrl: '/h6.jpg',
        name: 'CodeMonkey',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, soluta quo. Magni facere eaque deleniti.',
        location: 'Kolkata',
        price: 'Rs 8900',
        space: '2/3 bhk'

      },
    ];
  
    useEffect(() => {
      const nextButton = document.getElementById('next');
      const prevButton = document.getElementById('prev');
      const slide = document.getElementById('slide');
  
      const handleNext = () => {
        let lists = document.querySelectorAll('.item');
        slide.appendChild(lists[0]);
      };
  
      const handlePrev = () => {
        let lists = document.querySelectorAll('.item');
        slide.prepend(lists[lists.length - 1]);
      };
  
      nextButton.addEventListener('click', handleNext);
      prevButton.addEventListener('click', handlePrev);
  
      return () => {
        nextButton.removeEventListener('click', handleNext);
        prevButton.removeEventListener('click', handlePrev);
      };
    }, []);
  
    return (
        
      <div className="slider">
        <div id="slide">
          {data.map((item, index) => (
              <div key={index} className="item" style={{"overflow": 'hidden'}}>
              <Image src={item.imageUrl} alt="Hotel Img"  layout="fill" objectFit="cover"/>
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.des}</div>
                <div className="location"><FaLocationDot style={{"margin-right": '10px', "align-items": "center"}}/> Location: {item.location}</div>
                <div className="price"><IoIosPricetags style={{"margin-right": '10px', "align-items": "center"}}/> Price: {item.price}</div>
                <button className='seeMore'>See more</button>
                <div className="spaceOut">
                    <div className="spaceIn"><IoBedOutline style={{"margin-right": '10px', "align-items": "center"}}/>{item.space}</div>
                </div>
              </div>
            </div>
          ))}
          </div>
        <div className="buttons">
          <button id="prev" className='carouselLeft'><FaAngleLeft style={{margin: 'auto'}}/></button>
          <button id="next" className='carouselRight'><FaAngleRight style={{margin: 'auto'}}/></button>
        </div>
        <div className='viewAll'>
            <div className='flex  flex-row'>
            <button>View all</button> 
            </div>
        </div>
      </div>
    );
  };