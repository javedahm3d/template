import Layout from '../../listing/layout';
import '@/style/detailsPage.scss'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { CgMenuGridR } from "react-icons/cg";
import Reservationcard from '../../components/reservationCard'
import Staydetails from './staydetails';
import { DateProvider } from './datecontext';


const Map = dynamic(() => import('@/app/components/map'), { ssr: false });

export default function Home() {

  return (
    <Layout>
      <DateProvider>

      <div className="detailsPageConatiner">
        <div className="imageandname">
         <h1 className='stayname'>Luxury pool villa: 4BHK: Curtorim,Goa </h1>
         <div className="imageconatiner">
            <div className="maindetailsimage"><Image src="/h1.jpg" alt='villa image' fill={true} objectFit='cover'/></div>
            <div className="maindetailsimagesecondary">
              <div className="maindetailsimagesecondaryinner"><Image src="/h2.jpg" alt='villa image' fill={true} objectFit='cover'/></div>
              <div className="maindetailsimagesecondaryinner"><Image src="/h3.jpg" alt='villa image' fill={true} objectFit='cover'/></div>
              <div className="maindetailsimagesecondaryinner"><Image src="/h4.jpg" alt='villa image' fill={true} objectFit='cover'/></div>
              <div className="maindetailsimagesecondaryinner"><Image src="/h5.jpg" alt='villa image' fill={true} objectFit='cover'/></div>
            </div>
            <div className="showallimagesbutton"><CgMenuGridR />Show all photos</div>
         </div>
        </div>
        <div className="detailspagelowerbody">

            {/* in same directory */}
            <Staydetails/>

            {/* reservationCard in components */}
            <Reservationcard price={25000}/>

        </div>
        <div className="maplocation">
        <Map/>
        
        

        </div>
         
      </div>

      </DateProvider>
    </Layout>
  );
}
