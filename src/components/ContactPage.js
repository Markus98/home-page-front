import { useState } from 'react';
import './ContactPage.css';
import axios from 'axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

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

    const sendMessage = (event) => {
        event.preventDefault();
        const messageObject = { fname, lname, email, message };
        axios.post('/api/contact', messageObject).then((response) => {
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
            setSendButtonDisabled(true);
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
            if (error.response.status == 403) {
                setSendButtonDisabled(true);
            }
        });
    }

    return (
        <div className="App-content">
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className="contact-page">
                    <div className="contact-page__info">
                        <h1>Contact me</h1>
                        <p>Please fill out your name and so on so that we can chat.</p>
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
            <div className="App-content-side"></div>
        </div>
    );
}

export default ContactPage;