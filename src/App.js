import StarImage from "../src/images/icon-star.svg";

import Container from "./components/Container";
import Mesboutons from "./components/Mesboutons";
import Star from "./components/Star";
import Text from "./components/Text";
import Boutonsubmit from "./components/Boutonsubmit";


function App() {
  return (
    <div className="App">
     <Container>
       <Star src={StarImage} alt="Star"/>
       <Text as="h2">
         How did we do ?
       </Text>
       <Text as="p">
         Please let us know how we did with your support
         request. All feedback is appreciated to help us
         impove our offering !
       </Text>
       <div className="flex-btns">
       <Mesboutons anotherClassName="nbr-button">1</Mesboutons>
       <Mesboutons anotherClassName="nbr-button">2</Mesboutons>
       <Mesboutons anotherClassName="nbr-button">3</Mesboutons>
       <Mesboutons anotherClassName="nbr-button">4</Mesboutons>
       <Mesboutons anotherClassName="nbr-button">5</Mesboutons>
       </div>
       <Boutonsubmit additionalClassName="submit-button">Submit</Boutonsubmit>
     </Container>
    </div>
  );
}

export default App;
