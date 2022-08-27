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
        setAdvice(tip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GetAdvice();

  const [imgDog, setImgDog] = useState();

  const DogImages = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        // console.log(response);
        const data = response.data;
        const dogimg = data[0].url;

        // setImgDog(dogimg);
        console.log(dogimg);
      })
      .catch((error) => console.log(error));
  };

  DogImages();

  return (
    <Container>
      <Title> Your Daily Advice</Title>
      <Text>{advice}</Text>
      <img src={imgDog} />
      <Button onClick={GetAdvice}>New Advice</Button>
    </Container>
  );
};

export default DailyAdvice;
