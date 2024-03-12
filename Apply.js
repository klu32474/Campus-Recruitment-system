import React, { useState } from "react";
import './Apply.css';

export default function Apply() {
    const [companies, setCompanies] = useState([
        { 
            id: 1, 
            name: "Apple Inc.", 
            description: "Apple Inc. (formerly Apple Computer, Inc.) is an American multinational corporation and technology company headquartered in Cupertino, California", 
            applied: false,
            requirements: "Bachelor's degree in Computer Science or related field. Proficiency in iOS development.",
            jobDescription: "As an iOS Developer at Apple Inc., you will be responsible for designing and developing innovative iOS applications that redefine the user experience.",
        },
        { 
            id: 2, 
            name: "Adobe Inc.", 
            description: "Adobe Inc. is an American multinational computer software company incorporated in Delaware", 
            applied: false,
            requirements: "Bachelor's degree in Computer Science or related field. Experience with Adobe Creative Suite.",
            jobDescription: "As a Software Engineer at Adobe Inc., you will collaborate with a team of developers to create cutting-edge software solutions.",
        },
        { 
            id: 3, 
            name: "Amazon", 
            description: "Amazon Marketplace is an e-commerce platform owned and operated by Amazon that enables third-party sellers to sell new or used products", 
            applied: false,
            requirements: "Bachelor's degree in Business Administration or related field. Strong analytical and problem-solving skills.",
            jobDescription: "As a Business Analyst at Amazon, you will analyze market trends and customer data to drive business growth and profitability.",
        },
        { 
            id: 4, 
            name: "Deloitte", 
            description: "Deloitte is the largest professional services network by revenue and number of employees in the world and is considered one of the Big Four accounting firms", 
            applied: false,
            requirements: "Bachelor's degree in Accounting or Finance. CPA certification preferred.",
            jobDescription: "As a Consultant at Deloitte, you will work with clients to solve complex business problems and drive strategic initiatives.",
        },
        { 
            id: 5, 
            name: "BMW", 
            description: "Bayerische Motoren Werke AG, commonly abbreviated to BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.", 
            applied: false,
            requirements: "Bachelor's degree in Mechanical Engineering or related field. Experience in automotive design preferred.",
            jobDescription: "As an Automotive Engineer at BMW, you will be responsible for designing and testing innovative automotive technologies.",
        },
        { 
            id: 6, 
            name: "Meta Platforms", 
            description: "Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.", 
            applied: false,
            requirements: "Bachelor's degree in Computer Science or related field. Proficiency in software development.",
            jobDescription: "As a Software Engineer at Meta Platforms, you will work on cutting-edge technologies to build innovative social media platforms.",
        },
        { 
            id: 7, 
            name: "Google LLC", 
            description: "Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence.", 
            applied: false,
            requirements: "Bachelor's degree in Computer Science or related field. Experience with web development frameworks.",
            jobDescription: "As a Software Engineer at Google LLC, you will work on projects that impact billions of users worldwide.",
        },
        { 
            id: 8, 
            name: "Mercedes-Benz", 
            description: "Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG is headquartered in Stuttgart, Baden-Württemberg, Germany.", 
            applied: false,
            requirements: "Bachelor's degree in Mechanical Engineering or related field. Experience in automotive manufacturing.",
            jobDescription: "As an Automotive Engineer at Mercedes-Benz, you will design and develop state-of-the-art vehicles that set new standards in automotive excellence.",
        },
        { 
            id: 9, 
            name: "Twitter", 
            description: "Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and previously the Vine short video app and Periscope livestreaming service", 
            applied: false,
            requirements: "Bachelor's degree in Communication or related field. Experience with social media marketing.",
            jobDescription: "As a Marketing Specialist at Twitter, you will develop and execute marketing campaigns to promote brand awareness and engage with our global audience.",
        },
        { 
            id: 10, 
            name: "Netflix", 
            description: "Netflix is an American subscription video on-demand over-the-top streaming service.", 
            applied: false,
            requirements: "Bachelor's degree in Film Studies or related field. Experience in video production.",
            jobDescription: "As a Content Creator at Netflix, you will produce compelling original content that captivates audiences around the world.",
        },
        { 
            id: 11, 
            name: "Tata group", 
            description: "It is India's largest conglomerate, with products and services in over 150 countries, and operations in 100 countries across six continents", 
            applied: false,
            requirements: "Bachelor's degree in Business Administration or related field. Experience in corporate strategy.",
            jobDescription: "As a Strategy Analyst at Tata Group, you will analyze market trends and competitive landscapes to develop strategic initiatives that drive business growth.",
        },
        { 
            id: 12, 
            name: "Microsoft", 
            description: "Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington.", 
            applied: false,
            requirements: "Bachelor's degree in Computer Science or related field. Proficiency in software development.",
            jobDescription: "As a Software Engineer at Microsoft, you will work on cutting-edge technologies to develop innovative software solutions that empower millions of users worldwide.",
        },
    ]);

    const handleApply = (companyId) => {
        setCompanies(prevCompanies => {
            return prevCompanies.map(company => {
                if (company.id === companyId) {
                    return { ...company, applied: true };
                }
                return company;
            });
        });
    };

    return (
        <div className="apply-page">
            <h2>Apply for Jobs</h2>
            <div className="company-list">
                {companies.map(company => (
                    <div className="company-box" key={company.id}>
                        <h3>{company.name}</h3>
                        <p>{company.description}</p>
                        <p><strong>Requirements:</strong> {company.requirements}</p>
                        <p><strong>Job Description:</strong> {company.jobDescription}</p>
                        <button
                            className={company.applied ? "applied-button" : "apply-button"}
                            onClick={() => handleApply(company.id)}
                            disabled={company.applied}
                        >
                            {company.applied ? "Applied" : "Apply"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
