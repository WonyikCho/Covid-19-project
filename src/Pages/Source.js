import React from "react";

function Source() {
    return (
        <div style={{
            backgroundColor: "",
            height: "100vh",
            textAlign: "center"}}>
          <br />
          <h2>Source</h2>
          <br />
          <div style={{
              padding: "20px",
              backgroundColor: "skyblue",
              margin: "20px",
              borderRadius: "20px"
          }}>
          <h3 style={{fontSize: "20px"}}>API used: </h3>
          <a href="https://corona.lmao.ninja/">https://corona.lmao.ninja/</a>
          <br/>
          <a href="https://www.npmjs.com/package/google-map-react">https://www.npmjs.com/package/google-map-react</a>
          <br/>
          <a href="https://www.npmjs.com/package/react-apexcharts">https://www.npmjs.com/package/react-apexcharts</a>
          <br/>
          </div>
        </div>
    )
}

export default Source;