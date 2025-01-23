import {useState} from 'react'
import '../styles/builderSectionStyles.css'

function Input({uid, object,  label, type, id, resumeEducationState, changeResumeEducationState}) {
    const [submitState, toggleSubmitState] = useState(false)

    function handleChange(e,id,object) {
        // console.log(resumeEducationState);
        const updatedResumeEducationList = resumeEducationState.map((obj) => {
            return obj.uid === object.uid
            ? { ...obj, [id] : e.target.value }
            : obj
        })
        // console.log(updatedResumeEducationList);
        changeResumeEducationState(updatedResumeEducationList);
    }

    function toggleSubmit() {
        toggleSubmitState(!submitState);
    }


    return (
        <div className = "input-group">
            <label className = "input-label" htmlFor = {id}>
                {label}
            </label>
            <div className = "input-bar">
                <input 
                    type = {type}
                    id = {id}
                    className = "form-input"
                    value = {object[id] || ''}
                    placeholder = {`Please enter ${label.toLowerCase()}`}
                    onChange = {(e) => handleChange(e,id,object)}
                    disabled = {submitState}
                    uid = {uid}
                />
                <button className = "edit-button" onClick  = {toggleSubmit}>
                    {submitState ? "edit" : "submit"}
                </button>
            </div>
        </div>
    )
}

export function EducationInputSection({uid, object, resumeEducationState, changeResumeEducationState, sectionInput}) {
    return (
        <>
            {sectionInput.map((obj) => {
                return <Input key = {obj.id} uid = {uid} object = {object} label = {obj.label} type = {obj.type} id = {obj.id} resumeEducationState = {resumeEducationState} changeResumeEducationState = {changeResumeEducationState}/>
            })}
        </>
    )
}