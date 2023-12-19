// "use client";
import "@/style/listing.scss";
import categorybar from "../components/categorybar";
import Listingcard from "../components/listingcard";
import React from "react";

export default function Home() {

  const MemoizedListingCard = React.memo(Listingcard);

  return (
    <main className="listingloadingscreen">
        {categorybar()}
        {/* <React.Fragment> */}
        <div className="h-4"></div>

        <div className="listingpage">
          <div className="listingpagecontainer">
            {data.map((d) => (
              <React.Fragment key={d.id}>         
                 <MemoizedListingCard
                 image={d.image}
                 name={d.name}
                 price={d.price}
                 location={d.location}
                 rooms={d.rooms}
                 labels={d.labels}
                 id={d.id}
              />
             </React.Fragment>
            ))}

          </div>
        </div>
        {/* </React.Fragment> */}
    </main>
  );
}

// {image, name , price , location , rooms}

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
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    id:3,
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    id:4,
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
];
