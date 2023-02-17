import { useState } from "react";

import Quotes from "data/quotes";
import Navbar from "@components/common/navbar";

export default function Home() {
  console.log("private api url", process.env.API_URL);
  console.log("public api url", process.env.NEXT_PUBLIC_API_URL);

  const [index, setIndex] = useState(Number);

  const generate = () => {
    const index = Math.floor(Math.random() * Quotes.length);
    setIndex(index);
  };

  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h1 className="font-bold text-center text-gray-900 dark:text-white pt-20 p-5">
          Welcome to 🧠 🚂!
        </h1>
        <h1 className="m-auto font-bold text-center w-96 text-gray-900 dark:text-white">
          In the Memory section you can play a memory game, there will be new
          games coming up shortly, meanwhile, you can generate random quotes
          about life or coding here below
        </h1>

        <blockquote className="border-2 border-slate-100 bg-slate-100 rounded-md mt-20 m-auto w-2/3 text-center items-center justify-center">
          <p className="m-4 text-xl italic font-semibold text-gray-900 dark:text-white">
            "{Quotes[index] && Quotes[index].quote}"
          </p>
          <p className="text-xl m-4 italic font-semibold text-gray-900 dark:text-white">
            - {Quotes[index] && Quotes[index].cite}
          </p>
          <button
            onClick={generate}
            className="inline-flex font-bold m-4 py-2.5 px-4 text-xs text-black bg-slate-300 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            new quote
          </button>
        </blockquote>
      </div>
    </div>
  );
}
