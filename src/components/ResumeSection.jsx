import { useState } from "react"

import "/home/futabandit/reactRepos/resume-project/src/styles/resumeSection.css";

function ProfileSectionResume({ resumeProfileState }) {
    let fullName = resumeProfileState.firstName + " " + resumeProfileState.secondName;
    let phoneNumber = resumeProfileState.phoneNumber;
    let email = resumeProfileState.email;
    let github = resumeProfileState.github;
    return (
        <div className = "profile-section">
            <div className = "left-column">
                <div className = "first-name">{resumeProfileState.firstName ? fullName : "Pramesh Anand"}</div>
                <div className = "linkedin">LinkedIn: {resumeProfileState.linkedin || "linkedin.com/in/pramesh-anand"}</div>
                <div className = "github">Github: {github || "TheFutaBandit"}</div>
            </div>
            <div className = "right-column">
                <div className = "email">Email: {email || "thefutabandit@gmail.com"}</div>
                <div className = "Mobile">Mobile: +91-{phoneNumber || "9999999999"}</div>
            </div>
        </div>
    )
}

function EducationSectionResume({object}) {
    return (
        <div className = "general-resume-section">
            <div className = "bullet-point">
                <div className = "bulletPoint"></div>
            </div>
            <div className = "education-resume-section">
                <div className = "left-column">
                    <div className = "college-name">{object.firstName ? object.firstName : "Netaji Subhash University Of Technology"}</div>
                    <div className = "degree-name">{object.degreeName || "Bachelor of Technology - Information Technology"}</div>
                </div>
                <div className = "right-column">
                    <div className = "location">{object.location || "New Delhi, India"}</div>
                    <div className = "date">{object.fromDate || "December, 2021"} - {object.toDate || "Present"}</div>
                </div>
            </div>
        </div>
    );
}

function ExperienceSectionResume({object}) {
    return (
        <div className = "general-resume-section">
            <div className = "bullet-point">
                <div className = "bulletPoint"></div>
            </div>
            <div className = "experience-resume-section">
                <div className = "education-resume-section">
                    <div className = "left-column">
                        <div className = "college-name">{object.companyName ? object.companyName : "Covalent - Data Alchemist Program"}</div>
                        <div className = "degree-name">{object.role || "Data Analyst"}</div>
                    </div>
                    <div className = "right-column">
                        <div className = "location">{object.position || "Apprenticeship"}</div>
                        <div className = "date">{object.fromDate || "December, 2021"} - {object.toDate || "Present"}</div>
                    </div>
                </div>
                <div className = "experience-description-section">
                    <p className = "experienceDescription">{object.description || "Used the RRR metric (Reach, Retention, Revenue) to conduct in-depth analysis of decentralized application, blockchains and protocols leveraging business metrics to compare over 50+ blockchains"}</p>
                </div>
            </div>
        </div>
    );
}

function ResumeSectionMaker({name,children}) {
    return (
        <div className = "general-section">
            <div className = "sectionName">
                <p>{name}</p>
            </div>
            <div className = "content-section">
                {children}
            </div>
        </div>
    );
}


export function ResumeMaker({
        resumeProfileState,
        resumeEducationState,
        resumeExperienceState
    }) {
    return (
        <div className = "resume-section">
            <ProfileSectionResume resumeProfileState = {resumeProfileState} />
            <ResumeSectionMaker name = "EDUCATION">
                {resumeEducationState.map((obj) => {
                    return <EducationSectionResume key = {obj.uid} object = {obj} />
                })}
            </ResumeSectionMaker>
            <ResumeSectionMaker name = "EXPERIENCE">
                {resumeExperienceState.map((obj) => {
                    return <ExperienceSectionResume key = {obj.uid} object = {obj} />
                })}
            </ResumeSectionMaker>
        </div>
    )
}