import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style">List Of Top 4 Netflix Webseries in 2021</h1>
    {Sdata.map((cvalue) => {
      return (
        <Card
          key={cvalue.id}
          imgsrc={cvalue.imgsrc}
          title={cvalue.title}
          sname={cvalue.sname}
          link={cvalue.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
