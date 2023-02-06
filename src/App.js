import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import alexaImage from './images/alexa.jpg';

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99" image={alexaImage} description="Alexa made by Amazon" />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99" image={alexaImage} description="Alexa made by Amazon" />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99" image={alexaImage} description="Alexa made by Amazon" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;