import { Link } from "react-router-dom";



export const MovieItem = ({id, title}: {id: number, title: string}) => (
    <Link to={"movie/"+id}>
        {title}
    </Link>
)