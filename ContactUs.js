import React, { useState } from "react";
import './ContactUs.css';

export default function ContactUs() {
    const [query, setQuery] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the submission of query and email, 
        // for example, sending them to a server or displaying them
        // on the console.
        console.log("Query:", query);
        console.log("Email:", email);
        // You can add further logic here, like sending the data to a server.
    };

    return(
        <div>
            <h2>Contact Us</h2>
            <div>
            <h3>Reception</h3>
                <h4>Campus Recruitment System Management</h4>
                <p>Email: Campusrecruitmentsystemmanagement@example.com</p>
                <p>Phone: +44 2680710664</p>
                <p>Address:Campusrecruitment Park Way
Cupertino, CA 95014
United States</p>
            </div>
            <div>
                <h3>Frontend developer</h3>
                <h4>Campus Recruitment System Management</h4>
                <p>Email: kallurivenkatakartheek@example.com</p>
                <p>Phone: +44 4851639822</p>
                <p>Address:701 Main Street
Los Angeles, CA 90001</p>
            </div>
            {/* Contact Details */}
            <div>
            <h3>Backend developer</h3>
                <h4>Campus Recruitment System Management</h4>
                <p>Email: marrikarunyareddy@example.com</p>
                <p>Phone: +44 8096381727</p>
                <p>Address: 121 Main Street
New York, NY 10001</p>
            </div>

            <hr />

            {/* Query Form */}
            <div>
                <h3>Have a Query?</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="query"><strong>Your Query:</strong></label>
                        <textarea id="query" value={query} onChange={(e) => setQuery(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email"><strong>Your Email:</strong></label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
