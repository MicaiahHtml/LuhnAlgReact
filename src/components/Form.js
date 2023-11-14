import { useState } from "react";
import { useEffect } from "react";
import LuhnAlg from "./LuhnAlg.js";
import Results from "./Results.js";

export default function Form(props) {
  const [input, setInput] = useState("");
  useEffect(() => {
    LuhnAlg(input);
  });

  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} />
      <button
        onClick={() =>
          alert(
            LuhnAlg(input) ? "This card is valid." : "This card is invalid."
          )
        }
      >
        Submit
      </button>
      <Results result={LuhnAlg(input)} />
    </div>
  );
}
