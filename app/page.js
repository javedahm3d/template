"use client";
import heroPage from "./screens/hero"
import discover from "./screens/discover"
import experiencePage from "./screens/experience"
import Slider from "./components/slider";
import Identity from "./screens/identity";
import carousel from "./components/carousel";
import footer from "./components/footer";

export default function Home() {
  return (
    <main className="">
      {heroPage()}
      {experiencePage()}
      {discover()}
      {Slider()}
      <div className="identityandReviewsectionbg">
      {Identity()}
      {carousel()}
      {footer()}
      </div>
    </main>
  )
}
