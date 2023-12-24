import '@/style/villareviewcard.scss'
import React from 'react';
import { FaStar } from "react-icons/fa";


export default function VillaReviewCard({imageurl,name , rating , comment}){
    
    return(
        <div className="villareviewcard">
            <div className="villareviewcardupperbody">
                <div className="villareviewcardimage"></div>
                <div className="villareviewcardnameandstar">
                    <p className="name">{name}</p>
                    <div className="villareviewcardstarrating">
                        <div className="villareviewcardstartsconatiner">
                        {
                            [...Array(rating)].map((_, index) => (
                                <div key={`star-${index}`}>
                                    <FaStar/>
                                </div>
                            ))
                        }
                        </div>
                        <p className="villareviewcardstarscount">{rating} star</p>
                    </div>
                </div>
            </div>

            <div className="villareviewcardlowerbody">
                <p>{comment}</p>
            </div>
        </div>
    )
}
