import { useEffect } from "react";
import Loader from "./Loader";
import "./LoaderContainer.css";

function LoaderContainer() {
  useEffect(() => {
    document.body.classList.add("prevent-scroll");

    return () => document.body.classList.remove("prevent-scroll");
  });

  return (
    <div className="loader-container">
      <Loader />
    </div>
  );
}

export default LoaderContainer;
