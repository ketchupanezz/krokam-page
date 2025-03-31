import './form.css';

const About = () => {
    return ( <section className="form">
        <div className="container">
            <div className="form__desc">
                <h2>Contacts</h2>
                <span>Whether you have a question about collaboration or usage, drop us a message via form below.</span>
            </div>
            <form action="#" method="POST">
                <div className="form__row">
                    <lable>
                        Name
                        <input type="text" name="name" required />
                    </lable>
                    <lable>
                        Email
                        <input type="text" name="email" required />
                    </lable>
                </div>
                <lable>
                    Message
                    <input type="text" name="mess" required></input>
                </lable>
                <lable className="form__checkbox-label">
                    <input type="checkbox" name="root" required></input>
                    I'm not a robot
                </lable>
                
                <button type="submit">Contact us</button>
            </form>
        </div>
    </section>
)};

export default About;