import CouponCard from "@/app/components/couponCard";
import '@/style/profile/couponscreen.scss'

export default function couponsScreen(){
    return(
        <>
        
        <p className="profilePageTitle">YOUR COUPONS</p>
        <div className="couponsScreen">
            {
                data.map((d)=>(
                    <span key={d.id}>
                        <CouponCard name={d.name} discount={d.dicount} text={d.text} />
                    </span>
                ))
            }
            
        </div>
        </>
        
    )
}

const data = [
    {
      id:1,
      name: "NEW10",
      dicount: "10",
      text: "Get 10% discount on your first booking"
      
    },
  ];