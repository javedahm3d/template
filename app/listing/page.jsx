"use client";
import "@/style/listing.scss";
import categorybar from "../components/categorybar";
import Listingcard from "../components/listingcard";

export default function Home() {
  return (
    <main>
        {categorybar()}
        <div className="h-4"></div>

        <div className="listingpage">
          <div className="listingpagecontainer">
            {data.map((d, index) => (
              <Listingcard
                image={d.image}
                name={d.name}
                price={d.price}
                location={d.location}
                rooms={d.rooms}
                labels={d.labels}
                id={d.id}
              />
            ))}

            {/* {listingcard()} */}
          </div>
        </div>
    </main>
  );
}

// {image, name , price , location , rooms}

const data = [
  {
    id:'01',
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
    
  },
  {
    id:'02',
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    id:'03',
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    id:'04',
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
];
