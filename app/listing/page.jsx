// 'use client'
import "@/style/listing.scss";
import categorybar from "../components/categorybar";
import Listingcard from "../components/listingcard";
import React from "react";
// import React, { useState, useEffect } from 'react';


// export async function getStaticProps() {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

const Home = () => {

  const MemoizedListingCard = React.memo(Listingcard);
  // const [count, setCount] = useState(0);
  // const [villaData, setVillaData] = useState();

  // React.useEffect(() => {
  //   if(!count){
  //     handleDisplayVilla();
  //     setCount(1);
  //     console.log({count})
  //   }
  // }, []);

  // const handleDisplayVilla = () =>{
  //   console.log("In Display Villas")

      // try {
      //     fetch(
      //         `http://localhost:3001/api/v1/villa/display`,
      //           {
      //             method: "POST",
      //             headers: {
      //               "Content-Type": "application/json",
      //               Accept: "application/json",
      //             },
                
      //           })
      //           .then((res) => res.json())
      //           .then((data) => {
      //             console.log(data.data);
      //             setVillaData(data.data);
      //             console.log(villaData);
      //             if (data.message == "Created Successful") {
      //               console.log("Success")
      //               alert("Booking Successfull")
      //               // navigate("/successBooking");
      //             }
      //             if (data.flag == "Internal Server error") {
      //               alert("Error Try Again");
      //             }
      //       });
      // } catch (err) {
      //       console.error("Error:", err);
      // }
  // };

//   if(!count){
//     handleDisplayVilla();
//     count =1;
//     console.log({count})
//  }

  return (
    <main className="listingloadingscreen">
        {categorybar()}
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

const data = [
  {
    id:1,
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
    
<<<<<<< HEAD
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

export default Home;
=======
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
>>>>>>> tempbranch
