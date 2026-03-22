import React from "react";
import { Container } from "@mantine/core";
import "@mantine/core/styles.css";
import { Header } from "./components/Header/Header.tsx";
import { MainPage } from "./pages/mainPages.tsx";
 

const App: React.FC = () => {
  return (
    <>
      <Header />    
      <Container mt="md">
        <MainPage />
      </Container>
    </>
  );
};

export default App;
