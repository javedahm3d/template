import "@/style/footer.css"
import Image from "next/image"
import Link from "next/link"

export default function footer(){

    return(
        <div className="footer">
            <form className="contactussection">
            <div className="contactbg">
            <Image src="/worldmap.jpg" alt="world map Img"  layout="fill" objectFit="cover"/>
            </div>
                <div className="contactusTitle">Contact Us Now</div>
                <div className="contactinfo">
                    <textarea className="contactinfoitem" id="name" type="text" placeholder="name*" wrap="off" required></textarea>
                    <textarea className="contactinfoitem" id="email" type="text" placeholder="email id*" wrap="off" required></textarea>
                    <textarea className="contactinfoitem" id="phone" type="text" placeholder="phone no" wrap="off" ></textarea>
                    <textarea className="contactinfoitem" id="location" type="text" placeholder="location" wrap="off"></textarea>
                </div>
                <div className="contactmessage">
                    <textarea className="message" type="text" placeholder="enter message here ..." required></textarea>
                    <button className="submitButton">send now</button>
                </div>
            </form>
            <div className="footersection">
                <div className="footerbody">

                <div className="footermenu">
                    <div className="footerlogo">
                       <Image src="/logo.png" alt="company logo"  layout="fill" objectFit="contain"/>
                    </div>
                    <p className="footerlogoname">CodeMonkey</p>
                    <p className="footertagline">Providing reliable tech since 2023</p>
                    <p className="footermenuitem">Copyright © 2023 - All right reserved</p>
                </div>
                <div className="footermenu">
                    <p className="footermenutitle">Company</p>
                    <p className="footermenuitem">About us</p>
                    <p className="footermenuitem">services</p>
                    <p className="footermenuitem">contact us</p>
                </div>

                <div className="footermenu">
                    <p className="footermenutitle">legal</p>
                    <p className="footermenuitem">faq</p>
                    <p className="footermenuitem">privacy policy</p>
                    <p className="footermenuitem">Affiliate Program</p>
                </div>

                <div className="footermenu">

                <p className="footermenutitle">Social</p>
                    <div className="footermenuitem socialicons">
                        <div className="socialiconconatiner">
                           <Image src="/whatsapp.png" alt="company logo"  layout="fill" objectFit="contain"/>
                        </div>
                        <div className="socialiconconatiner">
                           <Image src="/gmail.png" alt="company logo"  layout="fill" objectFit="contain"/>
                        </div>
                        <div className="socialiconconatiner">
                           <Image src="/instagram.png" alt="company logo"  layout="fill" objectFit="contain"/>
                        </div>
                            
                    </div>
                    <p className="footermenuitem">codemonkeyservices@gmail.com</p>
                    <p className="footermenuitem">+91 9168391923</p>

                </div>
                
                </div>
            </div>
        </div>
    )

}