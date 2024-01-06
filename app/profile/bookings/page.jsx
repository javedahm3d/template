import "@/style/profile/saved.scss";
import "@/style/profile/booking.scss";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import BookingCard from "./bookingsCard";



export default function saved(){

    return(
      <>
        <ToastContainer />

        <div className="savedscreen">
            {
                data.map((d)=>(
                     <Fragment key={d.id}>
                    <BookingCard id={d.id} name={d.name} price={d.price} location={d.location} image={d.image} reservedate={d.reservdate} bookingdate={d.bookingdate}/>
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
      reservdate: "01/01/2023",
      bookingdate: "01/01/2023"
      
    },
  ];