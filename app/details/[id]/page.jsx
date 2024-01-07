import Layout from "../../listing/layout";
import "@/style/detailsPage.scss";
import dynamic from "next/dynamic";
import Reservationcard from "../../components/reservationCard";
import Staydetails from "./staydetails";
import { DateProvider } from "./datecontext";
import VillaReviewCard from "@/app/components/villareviewcard";
import VillaImageSection from "./villaimagesection";

const Map = dynamic(() => import("@/app/components/map"), { ssr: false });

export const metadata = {
  title: 'details | CodeMonkey',
  description: 'codemonkey details page',
}

export default function Home({params}) {
  console.log("villa url" , params.id)
  return (
   
    <Layout>
      <div className="detailsPageConatiner">
        <VillaImageSection/>
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
