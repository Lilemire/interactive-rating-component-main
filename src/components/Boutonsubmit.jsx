import React, {useState} from 'react'


const Boutonsubmit = ({children, additionalClassName}) => {
    const[isHovered, setIsHovered] = useState(false);

    //On change l'état de isHovered à true
    const onMouseEnter = () => setIsHovered(true);

    //On change l'état de isHovered à false
    const onMouseLeave = () => setIsHovered(false);

    const hoveredClassName = isHovered ? "hovered" : "";
    const className = `${hoveredClassName} ${additionalClassName}`;

    return (
        <div
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>{children}</div>
    );
}

export default Boutonsubmit;
