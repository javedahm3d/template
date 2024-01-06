import "@/style/profile/saved.scss";
import SaveCard from "./saveCard";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";



export default function saved(){

    return(
      <>
        <ToastContainer />

        <div className="savedscreen">
            {
                data.map((d)=>(
                     <Fragment key={d.id}>
                    <SaveCard id={d.id} name={d.name} room={d.rooms} price={d.price} location={d.location} image={d.image}/>
                     </Fragment>
                ))

            }
        </div>
        </>
    )
}


const data = [
    {
      id:1,
      name: "Luxury pool villa",
      image: "/h1.jpg",
      price: "25000",
      location: "Curtorim, Goa",
      rooms: "3",
      labels: ["mountain", "beach"],
      
    },
    {
      id:2,
      name: "Luxury pool villa",
      image: "/h2.jpg",
      price: "25000",
      location: "Curtorim, Goa",
      rooms: "3",
      labels: ["mountain", "beach"],
    },
    {
      id:3,
      name: "Luxury pool villa",
      image: "/h3.jpg",
      price: "25000",
      location: "Curtorim, Goa",
      rooms: "3",
      labels: ["mountain", "beach"],
    },
    {
      id:4,
      name: "Luxury pool villa",
      image: "/h4.jpg",
      price: "25000",
      location: "Curtorim, Goa",
      rooms: "3",
      labels: ["mountain", "beach"],
    },
  ];