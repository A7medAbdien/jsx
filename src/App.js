import ProfileCard from "./ProfileCard";
import alexaImage from './images/alexa.jpg';

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexa99" image={alexaImage} />
        </div>
    )
}

export default App;