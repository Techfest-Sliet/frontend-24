import React, {useMemo} from "react";

const Loader = ({when}) => {
  const style = useMemo(() => ({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  }), []);

  if (when) {
    return (
      <div style={style}>
        <h1>
          Please wait... I SAID PLEASE WAIT, COME BACK!!!
        </h1>
      </div>
    );
  }

  return null;
};

export default Loader;