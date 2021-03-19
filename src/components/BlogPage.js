import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./BlogPage.css";
import { Link, Redirect } from 'react-router-dom';
import { store } from 'react-notifications-component';
import { ReactTitle } from 'react-meta-tags';
import ReactGA from 'react-ga';
import Footer from "./Footer";



function BlogPage({ apipath }) {
    const [ postContent, setPostContent ] = useState([]);
    const [ title, setTitle ] = useState(document.title);
    const [ timestamp, setTimestamp ] = useState(0);
    const [ imagePath, setImagePath ] = useState(null);
    
    const postRoute = apipath + useParams().projectid;

    useEffect(() => {
        axios.get(postRoute).then(response => {
            setPostContent(response.data.content);
            setTitle(response.data.title);
            setTimestamp(response.data.ts);
            setImagePath(response.data.image);
            ReactGA.pageview(window.location.pathname + window.location.search, [], response.data.title);
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

    const makeTimeStampStr = (tsInt) => {
        let dateObj = new Date(tsInt);
        let month = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(dateObj);
        return month +  " " + dateObj.getDate() + ", " + dateObj.getFullYear();
    }

    // if searching for article "home", redirect to front page
    if (useParams().projectid == "home") return (
        <Redirect to="/" />
    );

    return (
        <div className="App-content">
            <ReactTitle title={title}/>
            <div className="App-content-side" id="blogpage-left">
                <Link to="/projects" id="back-button"> <i className="arrow left"></i> Back</Link>
            </div>
            <div className="App-content-area">
                <div className="padded-content-area">
                    <span className="article-timestamp">{makeTimeStampStr(timestamp)}</span>
                    <h1 className="article-title">{title}</h1>
                    <img className="article-image" src={imagePath} style={{"width": "100%"}} />
                    <div className="article-text-area" dangerouslySetInnerHTML={{__html: postContent}} />
                </div>
                <Footer />
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default BlogPage;