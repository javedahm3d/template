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

const imageList = [
  'https://gos3.ibcdn.com/3a2cd47604b611ec8d520a58a9feac02.jpg',
  'https://media.assettype.com/fortuneindia/2021-09/933967f8-afcb-4155-ba3d-b5189587306f/Luxury_villas_1.jpg?w=1200&h=768',
  'https://luxebook.in/wp-content/uploads/2021/07/Screen-Shot-2021-07-25-at-9.48.31-PM-e1627230049789.png',
  'https://media-cdn.tripadvisor.com/media/vr-splice-j/0c/03/2b/ca.jpg',
  'https://gos3.ibcdn.com/3a2cd47604b611ec8d520a58a9feac02.jpg',
]

export default function Home(context) {  
  const  query  = context.params.id;
  const  id  = context.searchParams;
  console.log(query)
  console.log(id)
  return (
   
    <Layout>
      <div className="detailsPageConatiner">
        <VillaImageSection imageList={imageList}/>
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
