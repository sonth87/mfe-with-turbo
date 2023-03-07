import React from "react";

import { DefaultLayout, Header } from "ui";
import GZButton from "./components/GZButton";
import Survey from "./apps/Survey";

function App() {
  return (
    <DefaultLayout
      header={<Header logo={{ src: "images/logo.svg", alt: "VBI" }} />}
    >
      <div>
        <Survey accessToken="my-token-h324g534u82435h34h53g45juyj23nsdfg" />
        <GZButton />
      </div>
    </DefaultLayout>
  );
}

export default App;
