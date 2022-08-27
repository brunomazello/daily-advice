import logo from "./logo.svg";
import "./App.css";
import Index from "./components/pages/Index";
import { Background, Container } from "./styles";
import DailyAdvice from "./components/pages/DailyAdvice";

function App() {
  return (
    <Background>
      <Index />
      <DailyAdvice />
    </Background>
  );
}

export default App;
