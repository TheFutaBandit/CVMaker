import {useState} from 'react'

import "../styles/educationSectionStyles.css"

import { EducationInputSection } from './EducationInputSection';


function EducationSectionMaker({name, children}) {
    const [displayMenu, setDisplayMenu] = useState(false);
    const plusAddress = "src/assets/icons/plus.png";
    return (
        <div className = "education-section">
            <div className = "education-section-header">
                <div className = "education-section-title">{name}</div>
                <button 
                    className = {displayMenu ? "education_expand_button active" : "education_expand_button"}
                    onClick = {() => {setDisplayMenu(!displayMenu)}}
                    style = {{backgroundImage: `url(${plusAddress})`}}
                >
                    {/* <img src='src/assets/icons/plus.png' /> */}
                </button>
            </div>
            {displayMenu 
                ? 
                <div className = "education-input-section">
                    {children}
                </div> 
                :
                null
            }   
        </div>
    )
}


export function EducationSectionInputMaker({uid, object, resumeEducationState, changeResumeEducationState, EducationSectionInput, index, barName}) {
    return (
        <EducationSectionMaker name = {`${barName} #${index+1}`}>
            <EducationInputSection uid = {uid} object = {object} resumeEducationState = {resumeEducationState} changeResumeEducationState = {changeResumeEducationState} sectionInput = {EducationSectionInput} /> 
        </EducationSectionMaker>
    )
}

export function EducationSectionInputAdder({resumeEducationState, changeResumeEducationState}) {
    function addEducation() {
        const updatedResumeEducationList = [
            ...resumeEducationState,
            {
                uid: crypto.randomUUID(),
                firstName: '',
                degreeName: '',
                location: '',
                fromDate: '',
                toDate: '',
                grade: '',
              },
        ]
        changeResumeEducationState(updatedResumeEducationList);
    }


    return (
        <div className = "addButton">
            <button onClick={addEducation}>+</button>
        </div>
    )
}