import React from "react";
import { screen, render } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("should render a button component", () => {
    render(<Button text="Click me" />);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("should render an outline button", () => {
    render(<Button text="Click me" outline />);
    expect(screen.getByRole("button", { name: "Click me" })).toHaveClass(
      "bg-white  border-blue-400 hover:bg-blue-500 text-blue-400 hover:text-white",
      { exact: false }
    );
  });
});
