import "@/style/listing.scss";
import categorybar from "../components/categorybar";
import Listingcard from "../components/listingcard";
import React from "react";

export default async function Home(context) {

  const MemoizedListingCard = React.memo(Listingcard);
  const response = await fetch("http://localhost:3001/api/v1/villa/display");
    const res = await response.json();
    const data = res.data
    console.log(data)

  return (
    <main className="listingloadingscreen">
        {categorybar(context)}
        {/* <React.Fragment> */}
        <div className="h-4"></div>

        <div className="listingpage">
          <div className="listingpagecontainer">
            {data.map((d) => (
            // {villaData && villaData.map((d) => (
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

// const data = [
//   {
//     id:1,
//     name: "Luxury pool villa",
//     image: "/h1.jpg",
//     price: "25000",
//     location: "Curtorim, Goa",
//     rooms: "3",
//     labels: ["mountain", "beach"],
    
//   },
//   {
//     id:2,
//     name: "Luxury pool villa",
//     image: "/h1.jpg",
//     price: "25000",
//     location: "Curtorim, Goa",
//     rooms: "3",
//     labels: ["mountain", "beach"],
//   },
//   {
//     id:3,
//     name: "Luxury pool villa",
//     image: "/h1.jpg",
//     price: "25000",
//     location: "Curtorim, Goa",
//     rooms: "3",
//     labels: ["mountain", "beach"],
//   },
//   {
//     id:4,
//     name: "Luxury pool villa",
//     image: "/h1.jpg",
//     price: "25000",
//     location: "Curtorim, Goa",
//     rooms: "3",
//     labels: ["mountain", "beach"],
//   },
// ];

