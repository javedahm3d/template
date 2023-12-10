import '@/style/card.css'
import Image from 'next/image'

function card(){
    
    return(
        <>
        <div className="card">
        <div className="cardImagecontainer">
        <Image className="CardImage" src='/h1.jpg' alt="NextJS"  fill={true} objectFit='cover'/>      
        </div>
        
        <div className="cardBody">    
            <div className="cardTitle">Person Name</div>
            <div className="cardbodytext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex quae, iure voluptatem minus tenetur cum atque repellendus illum doloremque.</div>
        </div>
    </div>
        </>
    )
}

export default card;