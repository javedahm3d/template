import '@/style/profile/couponscreen.scss'

export default function couponCard({name,discount,text}){
     return(
        <div className="couponCard">
            <div className="leftdicountbar">{discount}% OFF</div>
            <div className="couponbody">
                <div className="coupontitlecontainer">
                    <div className="coupontitle">{name}</div>
                    <div className="apply">APPLY</div>
                </div>

                <div className="couponcontext">{text}</div>
            </div>
        </div>
     )
}