import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard({ title, abstract, id }) {

    return (
        <Link className="articleCardLink" to={"/projects/" + id}>
            <div className="articleCard">
                <h2 className="articleCardTitle">{title}</h2>
                <div className="articleCardAbstract">{abstract}</div>
            </div>
        </Link>
    );
}

export default ArticleCard;