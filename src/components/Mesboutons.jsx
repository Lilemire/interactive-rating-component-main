import React, {useState} from 'react'


const Mesboutons = ({children, anotherClassName}) => {
  const [isHovered, setIsHovered] = useState(false);

  //On change l'état de isHovered à true
  const onMouseEnter = () => setIsHovered(true);
  
  //On change l'état de isHovered à false
  const onMouseLeave = () => setIsHovered(false);

  const additionalHoveredClassName = isHovered ? "hoverednbr" : "";
  const className = `${additionalHoveredClassName} ${anotherClassName}`;

  return (
      <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>{children}</div>
  );
}

export default Mesboutons