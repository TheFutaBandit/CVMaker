import {useState} from 'react'

import { InputSection } from './InputBuilder'

import TitleSection from './TitleSection'

import { EducationSectionInputMaker, EducationSectionInputAdder } from './EducationSection'

import SectionMaker from './SectionMaker'


const profileSectionInput = [
    {
        label: "FIRST NAME",
        type: "text",
        id: "firstName"
    },
    {
        label: "SECOND NAME",
        type: "text",
        id: "secondName"
    },
    {
        label: "PHONE NUMBER",
        type: "number",
        id: "phoneNumber"
    },
    {
        label: "EMAIL",
        type: "mail",
        id: "email"
    },
    {
        label: "LINKEDIN",
        type: "url",
        id: "linkedin"
    },
    {
        label: "GITHUB",
        type: "url",
        id: "github"
    },
]

const EducationSectionInput = [
    {
        label: "COLLEGE NAME",
        type: "text",
        id: "firstName"
    },
    {
        label: "DEGREE NAME",
        type: "text",
        id: "degreeName"
    },
    {
        label: "LOCATION",
        type: "text",
        id: "location"
    },
    {
        label: "FROM",
        type: "date",
        id: "fromDate"
    },
    {
        label: "TO",
        type: "date",
        id: "toDate"
    },
    {
        label: "GRADE",
        type: "text",
        id: "grade"
    },
]

const ExperienceSectionInput = [
    {
        label: "COMPANY NAME",
        type: "text",
        id: "companyName"
    },
    {
        label: "POSITION",
        type: "text",
        id: "position"
    },
    {
        label: "ROLE",
        type: "text",
        id: "role"
    },
    {
        label: "FROM",
        type: "date",
        id: "fromDate"
    },
    {
        label: "TO",
        type: "date",
        id: "toDate"
    },
    {
        label: "DESCRIPTION",
        type: "text",
        id: "description"
    },
]



export function BuildMaker({
    resumeProfileState, changeResumeProfileState, 
    resumeEducationState, changeResumeEducationState,
    resumeExperienceState, changeResumeExperienceState
    }) {
    return (
        <div className = "builder-section">
            <TitleSection />
            <SectionMaker name = "PROFILE">  
                <InputSection 
                    resumeProfileState = {resumeProfileState} 
                    changeResumeProfileState = {changeResumeProfileState} 
                    sectionInput = {profileSectionInput}
                />
            </SectionMaker>
            <SectionMaker name = "EDUCATION">
                {resumeEducationState.map((obj,index) => {
                    return <EducationSectionInputMaker 
                                key = {obj.uid} 
                                uid = {obj.uid} 
                                object = {obj} 
                                resumeEducationState = {resumeEducationState} 
                                changeResumeEducationState = {changeResumeEducationState} 
                                EducationSectionInput = {EducationSectionInput}
                                index = {index}
                                barName = "EDUCATION"
                            />
                })}
                <EducationSectionInputAdder 
                    resumeEducationState = {resumeEducationState} 
                    changeResumeEducationState = {changeResumeEducationState}
                />
            </SectionMaker>
            <SectionMaker name = "EXPERIENCE">
                {resumeExperienceState.map((obj,index) => {
                    return <EducationSectionInputMaker 
                                key = {obj.uid} 
                                uid = {obj.uid} 
                                object = {obj} 
                                resumeEducationState = {resumeExperienceState} 
                                changeResumeEducationState = {changeResumeExperienceState} 
                                EducationSectionInput = {ExperienceSectionInput}
                                index = {index}
                                barName = "EXPERIENCE"
                            />
                })}
                <EducationSectionInputAdder 
                    resumeEducationState = {resumeExperienceState} 
                    changeResumeEducationState = {changeResumeExperienceState}
                />
            </SectionMaker>
        </div>
    )
}