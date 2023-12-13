"use client";
import Layout from '../../listing/layout';
import '@/style/detailsPage.scss'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/map'), { ssr: false });

export default function Home() {
  return (
    <Layout>   
      <div className="detailsPageConatiner">
        <div className="imageandname">
         <h1 className='stayname'>Hotel name</h1>
         <div className="imageconatiner"></div>
        </div>
        <div className="detailspagelowerbody">
            <div className="stayinfosection">
                <div className="villadetails"></div>
                <div className="clalender"></div>
            </div>
          <div className="reservationcard"></div>
        </div>
        <div className="maplocation">
        <Map/>
        </div>
         
      </div>
    </Layout>
  );
}
