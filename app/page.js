import heroPage from "./screens/hero"
import discover from "./screens/discover"
import experiencePage from "./screens/experience"

export default function Home() {
  return (
    <main className="">
      {heroPage()}
      {experiencePage()}
      {discover()}
    </main>
  )
}
