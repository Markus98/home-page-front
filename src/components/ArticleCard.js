import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard({ title, abstract, id, thumbnail, ts }) {

    let tsDate = new Date(ts);
    let monthStr = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(tsDate);
    let tsString = monthStr + " " + tsDate.getFullYear();

    return (
        <Link className="article-card-link" to={"/projects/" + id}>
            <div className="article-card">
                <img className="article-card-thumbnail" src={thumbnail} />
                <div className="article-card-textarea">
                    <h2 className="article-card-title">{title}</h2>
                    <div className="article-card-timestamp">{tsString}</div>
                    <div className="articleCardAbstract">{abstract}</div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;