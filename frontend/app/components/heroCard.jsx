import "@/style/heroCard.scss";
import Image from "next/image";

export default function heroCard(path, alt) {
  return (
    <>
      <div className="heroCard">
        <div className="imageConatiner">     
        <Image
          src={path}
          alt={alt}
          layout="fill"
          objectFit="contain"
          />
        </div>
        <p className="cardName">{alt}</p>
      </div>
    </>
  );
}
