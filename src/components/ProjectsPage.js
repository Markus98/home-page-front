import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

function ProjectsPage() {


    const [ projectCards, setProjectCards ] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ENDPOINT + "/projectslist").then(response => {
            setProjectCards(response.data);
        });
    }, []);

    return (
        <div className="ContentTextArea">
            <h1>This is the home of my projects.</h1>
            {projectCards.map(card => 
                <ArticleCard id={card.id} title={card.title} abstract={card.abstract} thumbnail={card.thumbnail} />
            )}
        </div>
    )
}

export default ProjectsPage;