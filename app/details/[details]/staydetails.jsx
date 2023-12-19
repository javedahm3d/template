'use client';
import "@/style/staydetails.scss";
import 'react-toastify/dist/ReactToastify.css';


import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";import Link from "next/link";
import { useEffect } from "react";
import Calendar from "@/app/components/calender";



export default function staydetails() {

  useEffect(() => {
    const smoothScroll = (target, offset) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - offset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = this.getAttribute('href');
        smoothScroll(target, 200); // Adjust the offset (-200 in this case)
      });
    });
  }, []);
    
    const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum blanditiis illo minima est quis quidem voluptas repellendus eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia."

    var showmore=false
    if(content.length > 750){
        showmore=true
    }
       

  return (
    <div className="stayinfosection">
      <div className="villadetails">
        <div className="villadetailstitleandfavoutirehareicons">
            <h1 className="villadetailstitle">Entire villa in Curtorim, India</h1>
            <div className="villadetailsfavouriteandshare">
                 <div><CiHeart /> <p>save</p></div>
                 <div><IoShareSocialOutline /> <p>share</p></div>
            </div>
        </div>
        <h3 className="villaquickdetails">
          12 guests. 4 bedrooms. 4 beds. 4 bathrooms
        </h3>
        <div className="villareview">
          <FaStar /> 4.2{" "}
          <Link href="" className="reviewslink">
            5 reviews
          </Link>
        </div>
        <hr />
        <div className="hosterdetails">
          <div className="hosterimage"></div>
          <div className="hostername">
            <h3 className="hostedby">hosted by</h3>
            <h1>javed choudhary</h1>
          </div>
        </div>
        <hr />
        <div className="villadetaildescriptioncontainer">
            <div className="villadeatilsdescription">
                <h2 className="villadeatilsdescriptioncontent">{content}</h2>
                <div>
                    {
                        showmore?<Link href="" className="villadetailshowmore">show more <IoIosArrowDown /></Link>:<></>
                    }
                </div>
                
            </div>
        </div>
        <hr />
        <div className="villadetailsamenities">
            <p className="villadetailsamenitiestitle">What this place offers</p>

            <div className="amenitiesoptionsconatiner">
            {amenitiesdata.slice(0, 8).map((d, index) => (
              <div className="amentinitiesoption" key={index}>
                <div className="amentiniesicon"></div>
                <p>{d.name}</p>
              </div>
            ))}
                
            </div>
            <button className="showallamenitiesbutton"> show all amenities</button>
        </div>


        <div className="calender" id="calender">

                  <Calendar/>    
      </div>
      </div>
    </div>
  );
}



const amenitiesdata = [
    {
      id:'1',
      name: "mountain view",
      iconUrl:"",
    },
    {
      id:'2',
      name: "private pool",
      iconUrl:"",
    },
    {
      id:'3',
      name: "WIFI",
      iconUrl:"",
    },
    {
      id:'4',
      name: "chef",
      iconUrl:"",
    },
    {
      id:'5',
      name: "garden",
      iconUrl:"",
    },
    {
      id:'6',
      name: "TV",
      iconUrl:"",
    },
    {
      id:'7',
      name: "Kitchen",
      iconUrl:"",
    },
    {
      id:'8',
      name: "Parking",
      iconUrl:"",
    },
    {
      id:'9',
      name: "Security cameras on property",
      iconUrl:"",
    },
    {
      id:'10',
      name: "Bath",
      iconUrl:"",
    },
    {
      id:'11',
      name: "Hot water",
      iconUrl:"",
    },
    {
      id:'12',
      name: "Air conditioning",
      iconUrl:"",
    },
    {
      id:'13',
      name: "Fire extinguisher",
      iconUrl:"",
    },
    {
      id:'14',
      name: "First aid kit",
      iconUrl:"",
    },
    {
      id:'15',
      name: "Cooking basics",
      iconUrl:"",
    },
    {
      id:'16',
      name: "Pets allowed",
      iconUrl:"",
    },
    {
      id:'17',
      name: "Heating",
      iconUrl:"",
    },
    {
      id:'18',
      name: "Smoke alarm",
      iconUrl:"",
    },
    {
      id:'19',
      name: "Smoking allowed",
      iconUrl:"",
    },
    {
      id:'20',
      name: "board games",
      iconUrl:"",
    },
    
  ];
