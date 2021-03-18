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
        <div className="App-content">
            <ReactTitle title="Projects - Markus Tuominen"/>
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className="padded-content-area">
                    <div style={{"width": "100%"}}>
                        <h1>My Projects</h1>
                        <p>Here is where I post about my recent projects.</p>
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
            </div>
            <div className="App-content-side"></div>
        </div>
    )
}

export default ProjectsPage;