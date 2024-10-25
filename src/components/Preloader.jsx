import React from "react";
import { Oval } from "react-loader-spinner";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <Oval
        height={100}
        width={100}
        color="#343e47"
        visible={true}
        ariaLabel="loading"
      />
    </div>
  );
}

export default Preloader;
