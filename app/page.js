import heroPage from "./screens/hero"
import discover from "./screens/discover"
import experiencePage from "./screens/experience"
import Identity from "./screens/identity";
import footer from "./components/footer";
import reviews from "./screens/reviews";
import Navbar from './components/navbar'

import dynamic from "next/dynamic";
const DynamicSlider = dynamic(() => import("@/app/components/slider"), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      {heroPage()}
      {experiencePage()}
      {discover()}
      <DynamicSlider/>
      {/* {Slider()} */}
      <div className="identityandReviewsectionbg">
      {Identity()}
      {reviews()}
      {footer()}
      </div>
    </main>
  )
}
