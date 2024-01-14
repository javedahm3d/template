import "@/style/categorybar.scss";
import Link from "next/link";

export default function categoryicon({icon, name, context}){

    const queryEditor = () =>{
        var query = context.searchParams.type.split('+')
        if (query.includes(name)) {
            const index = query.indexOf(name);
            query.splice(index, 1);
        } else {
            query = query.concat(name);
        }
        query = query.join('+');
        return query;
    }

    return(
        <Link href={{ pathname: '/listing', query: { type: queryEditor() } }} className={context.searchParams.type.split('+').includes(name)? ' text-slate-950 justify-center' : 'categoryicon'}>
           <div>{icon}</div>
           <p>{name}</p>
        </Link>
    )
}