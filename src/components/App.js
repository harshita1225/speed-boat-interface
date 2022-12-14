import { useReducer, useEffect } from "react";
import "../components/App.css";

const initalState = {
  ignition: false,
  speed: 0,
  gear: 0,
};

/*const reducer = (state, action) => {
  switch (action.type) {
    case "onOff":
      if (random) {
        return { ...state, iginition: true };
      } else {
        return state;
      }

    case "gearUp":
      if (state.iginition && state.gear < 5) {
        return { ...state, gear: state.gear + 1 };
      } else {
        return state;
      }

    case "gearDown":
      if (state.iginition && state.gear > -2) {
        return { ...state, gear: state.gear - 1 };
      } else {
        return state;
      }
    case "SpeedUp":
      if (state.iginition && state.gear !== 0) {
        if (state.gear === 1 && state.speed < 20) {
          return { ...state, speed: state.speed + 5 };
        } else if (state.gear === 2 && state.speed < 30) {
          return { ...state, speed: state.speed + 10 };
        } else if (state.gear === 3 && state.speed < 50) {
          return { ...state, speed: state.speed + 20 };
        } else if (state.gear === 4) {
          return { ...state, speed: state.speed + 30 };
        } else if (state.gear === 5) {
          return { ...state, speed: state.speed + 35 };
        } else if (state.gear === -1) {
          return { ...state, speed: state.speed + 10 };
        } else if (state.gear === -2) {
          return { ...state, speed: state.speed + 20 };
        } else {
          return state;
        }
      } else {
        return state;
      }

    case "speedDown":
      if (state.iginition && state.speed > 0 && state.gear >= 0) {
        return { ...state, speed: state.speed + 10 };
      } else if (state.iginition && state.gear < 0) {
        return {
          ...state,
          speed: state.speed + 10,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}; */

const reducer = (state, action) => {
  const random = Math.random() > 0.5;
  switch (action.type) {
    case "onOff":
      if (random) {
        return { ...state, ignition: true };
      }
      if (state.ignition) {
        return { ...state, gear: 0, ignition: false };
      } else {
        return state;
      }
    case "gearUp":
      if (state.ignition && state.gear < 5) {
        return { ...state, gear: state.gear + 1 };
      } else {
        return state;
      }
    case "gearDown":
      if (state.ignition && state.gear > -2) {
        return { ...state, gear: state.gear - 1 };
      } else {
        return state;
      }
    case "speedUp":
      if (state.ignition && state.gear !== 0) {
        return { ...state, speed: state.speed + 10 * state.gear };
      } else {
        return state;
      }
    case "speedDown":
      if (state.ignition && state.gear > 0 && state.speed > 0) {
        return { ...state, speed: state.speed - 10 };
      }
      if (state.ignition && state.gear <= 0 && state.speed < 0) {
        return { ...state, speed: state.speed + 10 };
      } else {
        return state;
      }
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  //console.log(state);
  return (
    <div id="boat-container">
      <div>
        <h1 className="boat-title">DOLCE VITA</h1>
        <div>
          <button
            id="start"
            onClick={() => dispatch({ type: "onOff" })}
            className="button"
          >
            Start/stop
          </button>
          <button
            id="gearup"
            onClick={() => dispatch({ type: "gearUp" })}
            className=" button"
          >
            Gear up
          </button>
          <button
            id="geardown"
            onClick={() => dispatch({ type: "gearDown" })}
            className="button"
          >
            Gear down
          </button>
          <button
            id="speedup"
            onClick={() => dispatch({ type: "speedUp" })}
            className="button"
          >
            Speed up
          </button>
          <button
            id="speeddown"
            onClick={() => dispatch({ type: "speedDown" })}
            className="button"
          >
            Speed down
          </button>
        </div>
        <div className="boat-status">
          <li> Your engine is: {state.ignition ? "ON" : "OFF"}</li>
          <li>Boat gear:{state.gear}</li>
          <li> Boat speed:{state.speed}</li>
        </div>
      </div>
    </div>
  );
}

export default App;
