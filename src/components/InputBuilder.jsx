import {useState} from 'react'
import '../styles/builderSectionStyles.css'

function Input({label, type, id, resumeProfileState, changeResumeProfileState,}) {
    const [submitState, toggleSubmitState] = useState(false)

    function handleChange(e,id) {
        const updatedResumeProfileObject = {
            ...resumeProfileState,
            [id] : e.target.value
        }
        changeResumeProfileState(updatedResumeProfileObject);
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
                    value = {resumeProfileState[id] || ''}
                    placeholder = {`Please enter ${label.toLowerCase()}`}
                    onChange = {(e) => handleChange(e,id)}
                    disabled = {submitState}
                />
                <button className = "edit-button" onClick  = {toggleSubmit}>
                    {submitState ? "edit" : "submit"}
                </button>
            </div>
        </div>
    )
}

export function InputSection({resumeProfileState, changeResumeProfileState, sectionInput}) {
    return (
        <>
            {sectionInput.map((obj) => {
                return <Input key = {obj.id} label = {obj.label} type = {obj.type} id = {obj.id} resumeProfileState = {resumeProfileState} changeResumeProfileState = {changeResumeProfileState}/>
            })}
        </>
    )
}