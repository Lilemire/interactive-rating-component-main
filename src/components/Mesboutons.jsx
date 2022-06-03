import React, {useState} from 'react'


const Mesboutons = ({children}) => {
  const [isHovered, setIsHovered] = useState(false);

  //On change l'état de isHovered à true
  const onMouseEnter = () => setIsHovered(true);
  
  //On change l'état de isHovered à false
  const onMouseLeave = () => setIsHovered(false);

  const className = isHovered ? "yes" : "no";

  return (
      <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>{children}</div>
  );
}

export default Mesboutons

//onclick https://fr.reactjs.org/docs/handling-events.html