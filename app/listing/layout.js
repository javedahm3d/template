import footer from "../components/footer";
import Navbar from "../components/navbar";
import '@/style/otherlayout.css'

export default function RootLayout({ children }) {
  return (
        <>
        <Navbar setNavbarvalue={true} />
        <div className="mainBackgroundpattern">
        {children}
        {footer()}
        </div>
        </>
  )
}
