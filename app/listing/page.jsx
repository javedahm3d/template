"use client";
import footer from "../components/footer";
import Navbar from "../components/navbar";
import "@/style/listing.scss";
import categorybar from "../components/categorybar";
import Listingcard from "../components/listingcard";

export default function Home() {
  return (
    <main>
      <Navbar setNavbarvalue={true} />
      <div className="identityandReviewsectionbg pt-20">
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
              />
            ))}

            {/* {listingcard()} */}
          </div>
        </div>

        {footer()}
      </div>
    </main>
  );
}

// {image, name , price , location , rooms}

const data = [
  {
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
  {
    name: "Luxury pool villa",
    image: "/h1.jpg",
    price: "25000",
    location: "Curtorim, Goa",
    rooms: "3",
    labels: ["mountain", "beach"],
  },
];
