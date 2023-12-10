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

export default function categorybar() {
  return (
    <div className="categorybar">
      <div className="category">
      <Categoryicon icon={<TbBeach size={30} />} name={'beach'} />
      <Categoryicon icon={<LiaMountainSolid size={30} />} name={'mountains'} />
      <Categoryicon icon={<PiCactusLight size={30} />} name={'desert'} />
      <Categoryicon icon={<HiOutlineHomeModern size={30} />} name={'modern'} />
      <Categoryicon icon={<IoIosSnow size={30} />} name={'snow'} />
      <Categoryicon icon={<LiaSwimmerSolid size={30} />} name={'pool'} />
      <Categoryicon icon={<BsTree size={30} />} name={'forest'} />
      <Categoryicon icon={<IoDiamondOutline size={30} />} name={'luxury'} />
      </div>
    </div>
  );
}
