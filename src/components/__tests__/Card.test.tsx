import React from 'react';
import { render, screen } from "@testing-library/react";
import Card from "../Card";

test("renders card with title and description", () => {
  render(<Card title="My Card" description="This is a description" />);
  expect(screen.getByText("My Card")).toBeInTheDocument();
  expect(screen.getByText("This is a description")).toBeInTheDocument();
});
