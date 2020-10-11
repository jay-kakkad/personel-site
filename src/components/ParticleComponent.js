import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  </div>
);
