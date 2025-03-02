import { useState, useEffect } from 'react';
import './ContactPage.css';
import axios from 'axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { ReactTitle } from 'react-meta-tags';
import { SocialIcon } from 'react-social-icons';
import ReactGA from 'react-ga';
import Footer from './Footer';

function ContactPage() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
    const [formDisabled, setFormDisabled] = useState(false);

    const handleFnameChange = (event) => setFname(event.target.value);
    const handleLnameChange = (event) => setLname(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const title = "Contact - Markus Tuominen"

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search, [], title);
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        const messageObject = { fname, lname, email, message };
        setSendButtonDisabled(true);
        axios.post('/api/contact', messageObject).then((response) => {
            ReactGA.event({
                category: 'User',
                action: 'Sent a Message'
            });
            store.addNotification({
                title: "Success!",
                message: response.data,
                type: "success",
                container: "top-right",
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            setFormDisabled(true);
        }, (error) => {
            store.addNotification({
                title: "Error " + error.response.status,
                message: error.response.data,
                type: "danger",
                container: "top-right",
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        });
    }

    return (
        <div className="App-content">
            <ReactTitle title={title}/>
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className=" padded-content-area">
                    <div className="contact-page">
                        <div className="contact-page__info">
                            <div>
                                <h1>Contact me</h1>
                                <p>If you want to contact me directly to chat or whatever the reason, send me a message with the form on this page and I will get back to you!</p>
                            </div>
                            <div className="social-links">
                                <h2 className="social-links__title">Social Links</h2>
                                <div className="social-links__icon-container">
                                    <SocialIcon url="https://www.linkedin.com/in/markus-tuominen-706b0a17a/" network="linkedin" />
                                    <SocialIcon url="https://github.com/Markus98" network="github" />
                                </div>
                            </div>
                        </div>
                        <form className="contact-page__form" onSubmit={sendMessage}>
                            <div id="name-input">
                                <div className="contact-page__form__input">
                                    <label htmlFor="fname">First Name *</label>
                                    <input type="text" onChange={handleFnameChange} value={fname} disabled={formDisabled} required={true} name="firstname" id="fname" placeholder="first name" />
                                </div>
                                <div className="contact-page__form__input">
                                    <label htmlFor="lname">Last Name *</label>
                                    <input type="text" onChange={handleLnameChange} value={lname} disabled={formDisabled} required={true} name="lastname"  id="lname" placeholder="last name" />
                                </div>
                            </div>
                            <div className="contact-page__form__input">
                                <label htmlFor="email">Email Address *</label>
                                <input type="text" onChange={handleEmailChange} value={email} disabled={formDisabled} required={true} name="email"  id="email" placeholder="email" />
                            </div>
                            <div className="contact-page__form__input">
                                <label htmlFor="msg">Message *</label>
                                <textarea required={true} onChange={handleMessageChange} value={message} disabled={formDisabled} name="message"  id="msg"  placeholder="message..." />
                            </div>
                            <div id="sendButton">
                                <input type="submit" disabled={sendButtonDisabled} value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default ContactPage;