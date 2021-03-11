import axios from 'axios';
import { store } from 'react-notifications-component';
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { ReactTitle } from 'react-meta-tags';

function ProjectsPage() {


    const [ projectCards, setProjectCards ] = useState([]);

    useEffect(() => {
        axios.get("/api/projects").then(response => {
            setProjectCards(response.data);
        }, (error) => {
            store.addNotification({
                title: "Error " + error.response.status,
                message: error.response.data,
                type: "danger",
                container: "top-right"
            });
        });
    }, []);

    return (
        <div className="App-content-area">
            <ReactTitle title="Projects - Markus Tuominen"/>
            <div className="ContentTextArea">
                <h1>This is the home of my projects.</h1>
                {projectCards.map(card => 
                    <ArticleCard 
                        id={card.id} 
                        title={card.title} 
                        abstract={card.abstract} 
                        thumbnail={card.thumbnail} 
                        ts={card.ts} 
                        key={card.id}
                    />
                    )}
            </div>
        </div>
    )
}

export default ProjectsPage;