import "@/style/listingloadingscreen.scss";
import '@/style/otherlayout.css'



export default function Home() {
  return (
     <div className="loadingscreen">
    <div className=" mainBackgroundpattern animate-pulse">
        <div className="loadingcategorybarcontainer "><div className="loadingcategorybar"></div></div>
        <div className="h-4"></div>

        <div className="listinglistingpage">
        <div className="loadinglistingpagecontainer">
          <div className="listingloadingcard">
          <div className="loadinglistingcardimagepart"></div>
          </div>
          <div className="listingloadingcard">
            <div className="loadinglistingcardimagepart"></div>
          </div>
          <div className="listingloadingcard">
            <div className="loadinglistingcardimagepart"></div>
          </div>
          <div className="listingloadingcard">
            <div className="loadinglistingcardimagepart"></div>
          </div>
          <div className="listingloadingcard">
            <div className="loadinglistingcardimagepart"></div>
          </div>
          <div className="listingloadingcard">
            <div className="loadinglistingcardimagepart"></div>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
}

