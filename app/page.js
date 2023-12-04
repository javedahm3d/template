import discover from "./screens/discover"
import experiencePage from "./screens/experience"
import heroPage from "./screens/hero"

export default function Home() {
  return (
    <main className="">
      {heroPage()}
      {experiencePage()}
      {discover()}
    </main>
  )
}
