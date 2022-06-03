import StarImage from "../src/images/icon-star.svg";

import Container from "./components/Container";
import Star from "./components/Star";
import Text from "./components/Text";


function App() {
  return (
    <div className="App">
     <Container>
       <Star src={StarImage} alt="Star" />
       <Text as="h2">
         How did we do ?
       </Text>
       <Text as="p">
         Please let us know how we did with your support
         request. All feedback is appreciated to help us
         impove our offering !
       </Text>
     </Container>
    </div>
  );
}

export default App;
