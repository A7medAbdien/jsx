function ProfileCard({ title, handle, image, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is 1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p>{title}</p>
                    <p>{handle}</p>
                </div>
                <div className="content">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard