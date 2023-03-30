import React from "react";
import images from "../../assets/images";

function NotFound() {
    return (
        <div>
            <img src={images.notFoundGif} alt="Not Found" />
        </div>
    );
}

export default NotFound;