import React from "react";

function Button(props) {
  return (
    <td>
      <input
        id="button"
        type="button"
        value={props.value}
        onClick={props.func}
      />
    </td>
  );
}

export default Button;
