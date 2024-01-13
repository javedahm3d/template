import footer from "../components/footer";
import Navbar from "../components/navbar";
import '@/style/otherlayout.css'
import {ToastContainer,toast } from 'react-toastify';

// export const metadata = {
//   title: 'Listing | CodeMonkey',
//   description: 'codemonkey Listing page',
// }

export default function RootLayout({ children }) {
  return (
        <>
        <ToastContainer />
        <Navbar setNavbarvalue={true} />
        <div className="mainBackgroundpattern">
        {children}
        {footer()}
        </div>
        </>
  )
}
