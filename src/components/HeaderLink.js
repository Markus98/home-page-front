import { Link } from "react-router-dom"

function HeaderLink(props) {
    return (
        <Link className="App-header-link" to={props.to}>
            {props.name}
        </Link>
    )
}

export default HeaderLink