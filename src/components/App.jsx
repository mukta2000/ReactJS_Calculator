import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [result, answer] = useState("");
  const [num_clicked, question] = useState("");

  function calculate() {
    answer(eval(num_clicked));
  }

  function input(event) {
    question((document.getElementById("dis").value += event.target.value));
  }

  function clear() {
    question((document.getElementById("dis").value = ""));
    answer((document.getElementById("res").value = ""));
  }

  function delete_num() {
    question(
      document.getElementById("dis").value.substring(0, num_clicked.length - 1)
    );
  }

  return (
    <div>
      <input
        type="text"
        id="dis"
        onChange={num_clicked}
        placeholder="EQUATION"
        disabled
      />
      <table>
        <tr>
          <Button value={"9"} func={input} />
          <Button value={"8"} func={input} />
          <Button value={"7"} func={input} />
          <Button value={"+"} func={input} />
        </tr>
        <tr>
          <Button value={"6"} func={input} />
          <Button value={"5"} func={input} />
          <Button value={"4"} func={input} />
          <Button value={"-"} func={input} />
        </tr>
        <tr>
          <Button value={"3"} func={input} />
          <Button value={"2"} func={input} />
          <Button value={"1"} func={input} />
          <Button value={"*"} func={input} />
        </tr>
        <tr>
          <Button value={"."} func={input} />
          <Button value={"0"} func={input} />
          <Button value={"="} func={calculate} />
          <Button value={"/"} func={input} />
        </tr>
        <tr>
          <Button value={"C"} func={clear} />
          <Button value={"("} func={input} />
          <Button value={")"} func={input} />
          <Button value={"DEL"} func={delete_num} />
        </tr>
      </table>

      <input
        type="text"
        id="res"
        value={result}
        placeholder="RESULT"
        disabled
      />
    </div>
  );
}

export default App;
