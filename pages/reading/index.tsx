import { useRouter } from "next/router";
import React, { useState, useEffect, createContext, useContext } from "react";
import Row from "react-bootstrap/Row";
import Navbar from "@components/common/navbar";

const themes = {
  light: {
    textColor: "#000000",
    backgroundColor: "#eeeeee",
  },
  dark: {
    textColor: "#ffffff",
    backgroundColor: "#222222",
  },
};

export default function Reading() {
  // Context lets us pass a value deep into the component tree
  // without explicitly threading it through every component.
  // Create a context for the current theme (with "light" as the default).
  const ThemeContext = createContext("light");
  const LocaleContext = createContext(themes.light);

  const [readingSpeed, setReadingSpeed] = useState(0);
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  // const width = useWindowWidth();
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");

  useEffect(() => {
    // Update the readingSpeed using the browser API
    document.title = "Reading Speed " + readingSpeed;
  });

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    // Update the readingSpeed using the browser API
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    // <div className="bg-green-400">
    //   <h1 className={`text-center text-black-400 font-bold text-4xl`}>
    //     This is Reading Training Page {JSON.stringify(router.query)}
    //   </h1>
    //   <p>Your current reading speed is {readingSpeed}</p>
    //   <p className="reading-test-text">
    //     HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
    //     HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
    //     HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
    //     HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
    //   </p>
    // </div>
    <section className={theme}>
      <Navbar></Navbar>

      <Row label="Name">
        <input {...name} /> {/* Simplified*/}
      </Row>
      <Row label="Surname">
        <input {...surname} /> {/* Simplified*/}
      </Row>
      {/* <Row label="Language">{locale}</Row> */}
      <Row label="Width">{width}</Row>

      {/* <div className="bg-green-400">
        <h1 className={`text-center text-black-400 font-bold text-4xl`}>
          This is Reading Training Page {JSON.stringify(router.query)}
        </h1>
        <p>Your current reading speed is {readingSpeed}</p>
        <p className="reading-test-text">
          HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
          HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
          HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
          HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO HALO
        </p>
      </div> */}
    </section>
  );
}

function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
