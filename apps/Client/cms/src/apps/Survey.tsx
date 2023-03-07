// @ts-ignore
import { mount } from "survey/SurveyApp";
import React, { useRef } from "react";

function Survey({ accessToken }: { accessToken: string }) {
  const ref = useRef(null);

  React.useEffect(() => {
    mount(ref.current, {
      accessToken,
    });
  }, []);

  return (
    <>
      <div ref={ref} />
    </>
  );
}

export default Survey;
