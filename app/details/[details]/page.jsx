import Layout from "../../listing/layout";
import "@/style/detailsPage.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import Reservationcard from "../../components/reservationCard";
import Staydetails from "./staydetails";
import { DateProvider } from "./datecontext";
import VillaReviewCard from "@/app/components/villareviewcard";
import Link from "next/link";

const Map = dynamic(() => import("@/app/components/map"), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <div className="detailsPageConatiner">
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
            <button  className="showallimagesbutton">
              <CgMenuGridR />
              Show all photos
            </button>
          </div>
        </div>
        <DateProvider>
          <div className="detailspagelowerbody">
            {/* in same directory */}
            <Staydetails />

            {/* reservationCard in components */}
            <Reservationcard price={25000} />
          </div>
        </DateProvider>
        <div className="maplocation">
          <Map />
        </div>

        <div className="villareviewssection">
          <div className="villareviewstitle">
            <div className="redline"></div>
            <p>Villa Reviews</p>
            <div className="redline"></div>
          </div>

          <div className="villareviewcardsconatiner" id="villareviewssection">
            {
              reviewcardata.map((d, index) => (
                <VillaReviewCard key={index} imageurl={d.imageurl} name={d.name} rating={d.rating} comment={d.comment} />
            ))
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

const reviewcardata=[
  {
    imageurl:"",
    name : "Javed Choudhary",
    rating : 5,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ex minima fuga minus corrupti itaque amet excepturi animi perferendis. Voluptatem voluptates quam nam.'
  },
  {
    imageurl:"",
    name : "Javed Choudhary",
    rating : 3,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ex minima fuga minus corrupti itaque amet excepturi animi perferendis. Voluptatem voluptates quam nam.amet consectetur adipisicing elit. Delectus, ex minima fuga minus corrupti itaque amet excepturi animi perferendis. Voluptatem voluptates quam nam'
  },
  {
    imageurl:"",
    name : "Javed Choudhary",
    rating : 4,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ex minima fuga minus corrupti itaque amet excepturi animi perferendis. Voluptatem voluptates quam nam.'
  },
  {
    imageurl:"",
    name : "Javed Choudhary",
    rating : 4,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ex minima fuga minus corrupti itaque amet excepturi animi perferendis. Voluptatem voluptates quam nam.'
  },
]
