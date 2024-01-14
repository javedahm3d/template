import "@/style/categorybar.scss";
import { TbBeach } from "react-icons/tb";
import { LiaMountainSolid } from "react-icons/lia";
import { PiCactusLight } from "react-icons/pi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoIosSnow } from "react-icons/io";
import { LiaSwimmerSolid } from "react-icons/lia";
import { BsTree } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import Categoryicon from "./categoryicon";

export default function categorybar(context) {

  return (
    <div className="categorybar">
      <div className="category">
      <Categoryicon icon={<TbBeach size={27} />} name={'beach'} context={context}/>
      <Categoryicon icon={<LiaMountainSolid size={27} />} name={'mountains'} context={context}/>
      <Categoryicon icon={<PiCactusLight size={27} />} name={'desert'} context={context} />
      <Categoryicon icon={<HiOutlineHomeModern size={27} />} name={'modern'} context={context}/>
      <Categoryicon icon={<IoIosSnow size={27} />} name={'snow'} context={context}/>
      <Categoryicon icon={<LiaSwimmerSolid size={27} />} name={'pool'} context={context}/>
      <Categoryicon icon={<BsTree size={27} />} name={'forest'} context={context}/>
      <Categoryicon icon={<IoDiamondOutline size={27} />} name={'luxury'} context={context}/>
      </div>
    </div>
  );
}
