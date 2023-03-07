import React from "react";
import { DefaultLayout, Navbar } from "ui";
import authConfig from "./authConfig";

function App() {
  return (
    <div className="App">
      {authConfig.token && (
        <DefaultLayout navbar={<Navbar />}>
          access token:{authConfig.token}
        </DefaultLayout>
      )}

      {!authConfig.token && <div>Bạn không có quyền truy cập</div>}
    </div>
  );
}

export default App;
