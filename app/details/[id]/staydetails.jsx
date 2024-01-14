"use client";
import "@/style/staydetails.scss";
import "react-toastify/dist/ReactToastify.css";

import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar from "@/app/components/calender";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function staydetails({data}) {
  const [saveicon, setsaveicon] = useState(false);

  function copyurl() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    showToastMessage('link copied to clipboard')
  }

  

  const togglesaveicon = () => {
    setsaveicon(!saveicon);

    saveicon
      ? showToastMessage("removed from favorite")
      : showToastMessage("added to favorite");
  };

  const showToastMessage = (msg) => {
    toast(msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    const smoothScroll = (target, offset) => {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - offset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = this.getAttribute("href");
        smoothScroll(target, 200); // Adjust the offset (-200 in this case)
      });
    });
  }, []);

  const content =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum blanditiis illo minima est quis quidem voluptas repellendus eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia eos repellat commodi obcaecati deleniti soluta officia quo mollitia eveniet maxime aperiam cum, pariatur recusandae magnam odio officiis? Sint fugit similique placeat recusandae commodi tempora velit. Laborum omnis, fugiat nesciunt incidunt fuga explicabo esse, et est earum voluptates eos adipisci! Aut veniam quia similique minima nam reiciendis accusantium sint obcaecati repudia.";

  var showmore = false;
  if (content.length > 750) {
    showmore = true;
  }

  return (
    <>
      <div className="stayinfosection">
        <div className="villadetails">
          <div className="villadetailstitleandfavoutirehareicons">
            <h1 className="villadetailstitle">
              {data.name}
            </h1>
            <div className="villadetailsfavouriteandshare">
              <div onClick={togglesaveicon}>
                {saveicon ? <FaHeart color="red" /> : <CiHeart />}
                <p>save</p>
              </div>
              <div
                onClick={copyurl}
              >
                <IoShareSocialOutline /> <p>share</p>
              </div>
            </div>
          </div>
          <h3 className="villaquickdetails">
            {data.maxPerson} guests. {data.bedRoomCount} bedrooms. {data.bedCount} beds. {data.bathroomCount} bathrooms
          </h3>
          <div className="villareview">
            <FaStar /> 4.2{" "}
            <Link href="#villareviewssection" className="reviewslink">
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
              <h2 className="villadeatilsdescriptioncontent">{data.description}</h2>
              <div>
                {showmore ? (
                  <button
                    onClick={() =>
                      document.getElementById("showmoremodal").showModal()
                    }
                    className="villadetailshowmore"
                  >
                    show more <IoIosArrowDown />
                  </button>
                ) : (
                  <></>
                )}
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
            <button
              className="showallamenitiesbutton"
              onClick={() =>
                document.getElementById("viewallamenitiesmodal").showModal()
              }
            >
              show all amenities
            </button>
          </div>
            <div id="calender" className="calender">
              <Calendar/>
            </div>
        </div>
      </div>
      <dialog id="showmoremodal" className="modal">
        <form method="dialog" className="modal-backdrop">
          <button className="closemodal">
            <FaArrowLeft />
          </button>
        </form>
        <div className="modal-box">
          <p>Villa details</p>
          <div className="showmorepopupcontentdetails">{content}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="closepopupbutton"></button>
        </form>
      </dialog>

      <dialog id="viewallamenitiesmodal" className="modal">
        <form method="dialog" className="modal-backdrop">
          <button className="closemodal">
            <FaArrowLeft />
          </button>
        </form>
        <div className="modal-box">
          <div className="modalamenitiesoptionsconatiner">
            {amenitiesdata.map((d, index) => (
              <div className="modalamentinitiesoption" key={index}>
                <div className="amentiniesicon"></div>
                <p>{d.name}</p>
              </div>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="closepopupbutton"></button>
        </form>
      </dialog>

      {/* <dialog id="sharemodal" className="sharemodal">
        <div className="sharemodalconatiner">
          <p>share</p>
          <div className="sharemodalsocialicons">
            <Image src="/whatsapp.png" width={40} height={40}/>
            <Image src="/instagram.png" width={40} height={40}/>
            <Image src="/gmail.png" width={40} height={40}/>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="closepopupbutton"></button>
        </form>
      </dialog> */}
    </>
  );
}

const amenitiesdata = [
  {
    id: "1",
    name: "mountain view",
    iconUrl: "",
  },
  {
    id: "2",
    name: "private pool",
    iconUrl: "",
  },
  {
    id: "3",
    name: "WIFI",
    iconUrl: "",
  },
  {
    id: "4",
    name: "chef",
    iconUrl: "",
  },
  {
    id: "5",
    name: "garden",
    iconUrl: "",
  },
  {
    id: "6",
    name: "TV",
    iconUrl: "",
  },
  {
    id: "7",
    name: "Kitchen",
    iconUrl: "",
  },
  {
    id: "8",
    name: "Parking",
    iconUrl: "",
  },
  {
    id: "9",
    name: "Security cameras on property",
    iconUrl: "",
  },
  {
    id: "10",
    name: "Bath",
    iconUrl: "",
  },
  {
    id: "11",
    name: "Hot water",
    iconUrl: "",
  },
  {
    id: "12",
    name: "Air conditioning",
    iconUrl: "",
  },
  {
    id: "13",
    name: "Fire extinguisher",
    iconUrl: "",
  },
  {
    id: "14",
    name: "First aid kit",
    iconUrl: "",
  },
  {
    id: "15",
    name: "Cooking basics",
    iconUrl: "",
  },
  {
    id: "16",
    name: "Pets allowed",
    iconUrl: "",
  },
  {
    id: "17",
    name: "Heating",
    iconUrl: "",
  },
  {
    id: "18",
    name: "Smoke alarm",
    iconUrl: "",
  },
  {
    id: "19",
    name: "Smoking allowed",
    iconUrl: "",
  },
  {
    id: "20",
    name: "board games",
    iconUrl: "",
  },
];
