import "./App.css";
import Button from "./components/Practice/Button/Button";
import Tooltip from "./components/Practice/Tooltip/Tooltip";

function App() {
  return (
    <div>
      <h1>My React + Storybook Setup</h1>
      <Button>Click Me</Button>
      <br />
      <Tooltip TooltipText="This is Tooltip Text." Position="Top">
        Click Me
      </Tooltip>
      <br />
      <Tooltip TooltipText="This is Tooltip Text." Position="Bottom">
        Click Me
      </Tooltip>
      <br />
      <Tooltip TooltipText="This is Tooltip Text." Position="Right">
        Click Me
      </Tooltip>
      <br />
      <Tooltip TooltipText="This is Tooltip Text." Position="Left">
        Click Me
      </Tooltip>
      <br />
      <Tooltip TooltipText="This is Tooltip Text." Position="Left">
        <Button>Click Me</Button>
      </Tooltip>
    </div>
  );
}

export default App;
