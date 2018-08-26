import React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { Button } from "reactstrap";
import Buttons from "../src/reactstrap/examples/Button";
import ButtonOutline from "../src/reactstrap/examples/ButtonOutline";
import ButtonStateful from "../src/reactstrap/examples/ButtonStateful";

storiesOf("Buttons", module)
  .add("regular styles", () => <Buttons />)
  .add("outline buttons", () => <ButtonOutline />)
  .add("sizes", () => (
    <div>
      <Button color="primary" size="lg">
        Large Button
      </Button>{" "}
      <Button color="secondary" size="lg">
        Large Button
      </Button>
      <Button color="primary" size="sm">
        Small Button
      </Button>{" "}
      <Button color="secondary" size="sm">
        Small Button
      </Button>
      <Button color="primary" size="lg" block>
        Block level button
      </Button>
      <Button color="secondary" size="lg" block>
        Block level button
      </Button>
    </div>
  ))
  .add("active state", () => (
    <div>
      <Button color="primary" size="lg" active>
        Primary link
      </Button>{" "}
      <Button color="secondary" size="lg" active>
        Link
      </Button>
    </div>
  ))
  .add("disabled", () => (
    <div>
      <Button color="primary" size="lg" disabled>
        Primary button
      </Button>{" "}
      <Button color="secondary" size="lg" disabled>
        Button
      </Button>
    </div>
  ))
  .add("checkbox and radio buttons (stateful)", () => <ButtonStateful />);
