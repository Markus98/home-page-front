import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./BlogPage.css";
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import { ReactTitle } from 'react-meta-tags';



function BlogPage({ apipath }) {
    const postRoute = apipath + useParams().projectid;

    const [ postContent, setPostContent ] = useState([]);
    const [ title, setTitle ] = useState(document.title);

    useEffect(() => {
        axios.get(postRoute).then(response => {
            setPostContent(response.data.content);
            setTitle(response.data.title);
        }, (error) => {
            store.addNotification({
                title: "Error " + error.response.status,
                message: error.response.data,
                type: "danger",
                container: "top-center"
            });
            setTitle("404 Post not Found");
        });
    }, []);

    return (
        <div className="App-content">
            <ReactTitle title={title}/>
            <div className="App-content-side" id="left">
                <Link to="/projects" id="back-button"> <i class="arrow"></i> Back</Link>
            </div>
            <div className="App-content-area">
                <div className="ContentTextArea" dangerouslySetInnerHTML={{__html: postContent}} />
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default BlogPage;