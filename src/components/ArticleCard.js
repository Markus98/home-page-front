import './ArticleCard.css';
import { Link } from 'react-router-dom';

function ArticleCard({ title, abstract, id, thumbnail, ts }) {

    let tsDate = new Date(ts);
    let monthStr = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(tsDate);
    let tsString = monthStr + " " + tsDate.getFullYear();

    return (
        <Link className="articleCardLink" to={"/projects/" + id}>
            <div className="articleCard">
                <img className="articleCardThumbnail" src={thumbnail} />
                <div className="articleCardTextArea">
                    <h2 className="articleCardTitle">{title}</h2>
                    <div className="articleCardTimeStamp">{tsString}</div>
                    <div className="articleCardAbstract">{abstract}</div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;