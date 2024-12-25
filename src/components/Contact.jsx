import { CONTACT, FOOTER } from "./Constants";
import { FaHandHoldingHand } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div id="contactMe" className="mt-20 mb-6 title">
                <div>Get In Touch</div>
                <FaHandHoldingHand className="font-icon"/>
            </div>
            <div className="text-center">
                <div className="contact">
                <MdLocationOn className="text-pink-500"/>
                    <p className="my-2">
                        {CONTACT.address}
                    </p>
                </div>
                <div className="contact">
                    <FaEnvelope className="text-pink-500"/>
                    <p className="my-2 cursor-pointer hover:underline hover:underline-offset-2">
                        {CONTACT.email}
                    </p>
                </div>
            </div>
            <footer className="mt-8 py-8 text-center text-xs bg-[#202032] shadow-md">
                {FOOTER.footer} 
            </footer>
        </>
    )
}

export default Contact