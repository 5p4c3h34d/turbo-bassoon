import React from "react";
import "yet-another-react-lightbox/dist/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/dist/plugins/zoom";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";

export const Case = ({previeImageUrl, imageUrl}) => {
    const [open, setOpen] = React.useState(false);
    const zoomRef = React.useRef({zoom: 100});

    return (
    <>
        <div className="frame-3">
        <img className="image" alt="Image" src={previeImageUrl} />
        <div onClick={() => setOpen(true)}><PropertyDefaultWrapper
            className="button-instance"
            href="https://mir-s3-cdn-cf.behance.net/project_modules/1400/965b3b81101087.5cf53e7053ef3.jpg"
            property1="default"
        /></div>
    </div>

    <Lightbox
    plugins={[Zoom]}
    zoom={{ref: zoomRef}}
    open={open}
    close={() => setOpen(false)}
    slides={[{src:imageUrl}]}
    />

    </>
    )
}