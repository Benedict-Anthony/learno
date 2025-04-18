import "./index.css";
import { Stack } from "@chakra-ui/react";
import Header from "./components/Header/Index";
import Home from "./pages/Home";

function App() {
  return (
    <Stack>
      <Header />
      <Home />
    </Stack>
  );
}

export default App;
