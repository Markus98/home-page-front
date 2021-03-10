import './ContactPage.css';

function ContactPage() {

    return (
        <div className="App-content">
            <div className="App-content-side"></div>
            <div className="App-content-area">
                <div className="contact-page">
                    <div className="contact-page__info">
                        <h1>Contact me</h1>
                        <p>Please fill out your name and so on so that we can chat.</p>
                    </div>
                    <form className="contact-page__form">
                        <div id="name-input">
                            <div className="contact-page__form__input">
                                <label for="fname">First Name</label>
                                <input type="text" required="true" name="firstname" id="fname" placeholder="first name" />
                            </div>
                            <div className="contact-page__form__input">
                                <label for="lname">Last Name</label>
                                <input type="text" required="true" name="lastname"  id="lname" placeholder="last name" />
                            </div>
                        </div>
                        <div className="contact-page__form__input">
                            <label for="email">Email Address</label>
                            <input type="text" required="true" name="email"  id="email" placeholder="email" />
                        </div>
                        <div className="contact-page__form__input">
                            <label for="msg">Message</label>
                            <textarea required="true" name="message"  id="msg"  placeholder="Message..." />
                        </div>
                        <div id="sendButton">
                            <input type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="App-content-side"></div>
        </div>
    );
}

export default ContactPage;