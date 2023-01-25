import React from "react";
import { screen, render } from "@testing-library/react";
import Heading from "./index";

describe("Heading", () => {
  it("should render a h1 element", () => {
    render(<Heading text="My heading" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveClass("text-2xl", {
      exact: false,
    });
  });

  it("should render a h3 element", () => {
    render(<Heading text="My heading" subHeading />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveClass("text-lg", {
      exact: false,
    });
  });
});
