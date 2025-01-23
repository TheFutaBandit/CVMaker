import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BuildMaker } from './components/BuilderSection.jsx'
import { ResumeMaker } from './components/ResumeSection.jsx'

function LogoMaker() {
  return (
    <div className = "logo-container">

    </div>
  )
}

function Main() {
  const resumeProfileData = {
    firstName: '',
    secondName: '',
    phoneNumber: '',
    email: '',
    linkedin: '',
    github: ''
  }

  const resumeEducationData = [
    {
      uid: crypto.randomUUID(),
      firstName: '',
      degreeName: '',
      location: '',
      fromDate: '',
      toDate: '',
      grade: '',
    },
  ];

  const resumeExperienceData = [
    {
      uid: crypto.randomUUID(),
      companyName: '',
      position: '',
      role: '',
      fromDate: '',
      toDate: '',
      description: '',
    },
  ];
  

  const [resumeProfileState, setResumeProfileState] = useState(resumeProfileData);
  const [resumeEducationState, setResumeEducationState] = useState(resumeEducationData);
  const [resumeExperienceState, setResumeExperienceState] = useState(resumeEducationData);

  function changeResumeProfileState(value) {
    setResumeProfileState(value);
  }

  function changeResumeEducationState(value) {
    setResumeEducationState(value);
  }

  function changeResumeExperienceState(value) {
    setResumeExperienceState(value);
  }

  return (
    <StrictMode>
      <LogoMaker />
      <BuildMaker 
        resumeProfileState = {resumeProfileState} changeResumeProfileState = {changeResumeProfileState}
        resumeEducationState = {resumeEducationState} changeResumeEducationState = {changeResumeEducationState}
        resumeExperienceState = {resumeExperienceState} changeResumeExperienceState = {changeResumeExperienceState}
      />
      <ResumeMaker
        resumeProfileState = {resumeProfileState} changeResumeProfileState = {changeResumeProfileState}
        resumeEducationState = {resumeEducationState} changeResumeEducationState = {changeResumeEducationState}
        resumeExperienceState = {resumeExperienceState} changeResumeExperienceState = {changeResumeExperienceState}
      />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);

