import '@/style/detailsPage.scss'

export default function Loading() {
  return (
      <div className="detailsPageConatiner animate-pulse">
        <div className="imageandname">
         <h1 className='stayname'></h1>
         <div className="imageconatiner"></div>
        </div>
        <div className="detailspagelowerbody">
            <div className="stayinfosection">
                <div className="villadetails"></div>
                <div className="clalender"></div>
            </div>
          <div className="reservationcard"></div>
        </div>
        <div className="maplocation"></div>
         
      </div>
  );
}
