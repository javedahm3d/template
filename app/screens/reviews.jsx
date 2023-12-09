import carousel from "../components/carousel";

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

            {carousel()}

        </div>
    )
}