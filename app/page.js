"use client";
import heroPage from "./screens/hero"
import discover from "./screens/discover"
import experiencePage from "./screens/experience"
import Slider from "./components/slider";
import Identity from "./screens/identity";
import footer from "./components/footer";
import reviews from "./screens/reviews";
import Navbar from './components/navbar'


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      {heroPage()}
      {experiencePage()}
      {discover()}
      {Slider()}
      <div className="identityandReviewsectionbg">
      {Identity()}
      {reviews()}
      {footer()}
      </div>
    </main>
  )
}
