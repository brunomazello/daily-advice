import { Container, Text, Title, Button } from "../../styles";
import axios from "axios";
import { useState } from "react";

const url = "https://api.adviceslip.com/advice";

const DailyAdvice = () => {
  const [advice, setAdvice] = useState();
  const GetAdvice = () => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const tip = data.slip.advice;
        console.log(data);
        setAdvice(tip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GetAdvice();

  return (
    <Container>
      <Title> Your Daily Advice</Title>
      <Text>{advice}</Text>
      <Button onClick={GetAdvice}>New Advice</Button>
    </Container>
  );
};

export default DailyAdvice;
