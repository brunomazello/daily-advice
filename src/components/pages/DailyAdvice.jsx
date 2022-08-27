import { Container, Text } from "../../styles";
import axios from "axios";

const url = "http://localhost:5500/api";

const GetAdvice = () => {
  axios.get(url).then().catch();
};

const DailyAdvice = () => {
  return (
    <Container>
      <Text>Daily</Text>
    </Container>
  );
};

export default DailyAdvice;
