"use client";
import footer from "../components/footer";
import Navbar from "../components/navbar";
import "@/style/listing.css"
import categorybar from "../components/categorybar";

export default function Home() {
  return (
    <main className="">
      <Navbar setNavbarvalue={true} />      
      <div className="identityandReviewsectionbg pt-20">
      {categorybar()}
      <div className="h-4"></div>
      {footer()}
      </div>
    </main>
  )
}
