import React, { useEffect } from 'react';
function Contact(){
    
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return(
        <>
        <div 
        className="visme_d"
        data-title="Business Prospect Contact Form"
        data-url="vd6yxvvw-business-prospect-contact-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="94022"
    ></div>
    </>
       
    )
}
export default Contact;