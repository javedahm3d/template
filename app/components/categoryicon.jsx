import "@/style/categorybar.scss";

export default function categoryicon({icon, name}){
    return(
        <div className="categoryicon">
           <div>{icon}</div>
           <p>{name}</p>
        </div>
    )
}