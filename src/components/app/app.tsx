import * as React from "react";
import { AppContainer } from "./styles";

export default function App() {
  return (
    <AppContainer>
      <h1>{process.env.TEST_ENV}</h1>
    </AppContainer>
  );
}
