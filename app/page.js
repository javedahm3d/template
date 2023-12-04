import servicesscroll from "./components/servicesInfiniteScroll"
import aboutUs from "./screens/about"
import heroPage from "./screens/hero"

export default function Home() {
  return (
    <main className="">
      {heroPage()}
      {aboutUs()}
      {servicesscroll()}
    </main>
  )
}
