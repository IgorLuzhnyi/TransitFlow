import { Container } from "@mui/material";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Header />
      <Navbar />
      <div>Here</div>
    </Container>
  );
};

export default Home;
