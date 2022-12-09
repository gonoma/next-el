import React, { useState, useEffect } from "react";

const Fader = (text: any) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 4000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <h1 data-testid="fader" className={fadeProp.fade}>
        {text}
      </h1>
    </>
  );
};

export default Fader;
