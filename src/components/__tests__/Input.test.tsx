import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

test("renders input and updates value", () => {
  let value = "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value = e.target.value;
  };
  render(<Input value={value} onChange={handleChange} placeholder="Type..." />);
  const input = screen.getByPlaceholderText("Type...");
  fireEvent.change(input, { target: { value: "Hello" } });
  expect(value).toBe("Hello");
});
