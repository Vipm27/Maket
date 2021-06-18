import React from 'react';
import './StyleNew.css';
import WeekDate from "./WeekDate";
import './StyleNew.css';
import Math from "./Math";
import English from "./English";
import IT from "./IT";
import Sport from "./Sport";
import Phisics  from "./Phisics";
import Ather from "./Ather";

function App() {
  return (
    <>
      <div>
        <WeekDate />
      </div>
      <div>
        <Math />
      </div>
      <div>
        <English />
      </div>
      <div>
        <IT />
      </div>
      <div>
        <Sport />
      </div>
      <div>
        <Phisics />
      </div>
      <div>
        <Ather />
      </div>
    </>
  );
}
export default App;

