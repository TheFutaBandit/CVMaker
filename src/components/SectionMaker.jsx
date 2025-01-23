import {useState} from 'react'

import '../styles/builderSectionStyles.css'

export default function SectionMaker({name, children}) {
    const [displayMenu, setDisplayMenu] = useState(false);
    const downArrowAddress = "src/assets/icons/down-arrow.png";
    return (
        <div className = {displayMenu ? "section sectionActive" : "section"}>
            <div className = "section-header">
                <div className = "section-title">{name}</div>
                <button 
                    className = {displayMenu ? "expand_button active" : "expand_button"}
                    onClick = {() => {
                        setDisplayMenu(!displayMenu);
                    }}
                    style = {{backgroundImage: `url(${downArrowAddress})`}}
                >
                    <img src='src/assets/icons/down-arrow.png' />
                </button>
            </div>
            {displayMenu 
                ? 
                <div className = "section-form">
                    {children}
                </div> 
                :
                null
            }   
        </div>
    )
}