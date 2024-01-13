import dynamic from "next/dynamic";

const DynamicCrousel = dynamic(() => import("@/app/components/carousel"), { ssr: false });


export default function reviews(){
    return(
        <div className="reviewssection">
            <div>
            <h1 className="discoverTile">
            <div className='redline'></div>
            See what others have to say about us
            <div className='redline'></div>
            </h1>
            </div>

            <DynamicCrousel/>

        </div>
    )
}