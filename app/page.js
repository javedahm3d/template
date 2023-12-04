"use client";

import servicesscroll from "./components/servicesInfiniteScroll"
import aboutUs from "./screens/about"
import heroPage from "./screens/hero"
import slider from './components/slider'

export default function Home() {
  return (
    <main className="">
      {heroPage()}
      {aboutUs()}
      {slider()}
      {servicesscroll()}
    </main>
  )
}
