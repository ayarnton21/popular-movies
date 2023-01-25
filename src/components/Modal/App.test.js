import React from "react";
import { screen, render, getAllByRole } from "@testing-library/react";
import Modal from "./index";
import getMovies from "../../services/getMovies";

const movie = {
  id: 315162,
  original_title: "Puss in Boots: The Last Wish",
  overview:
    "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
  release_date: "2022-12-07",
};

describe("Modal", () => {
  it("should render a modal", () => {
    render(<Modal selectedMovie={movie} isOpen />);
    expect(
      screen.getByRole("heading", { name: "Puss in Boots: The Last Wish" })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("button")).toHaveLength(2);

    expect(
      screen.getByText(
        "Puss in Boots discovers that his passion for adventure has taken its toll",
        { exact: false }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("2022-12-07", { exact: false })
    ).toBeInTheDocument();
  });
});
