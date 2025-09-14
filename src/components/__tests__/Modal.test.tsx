import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

test("renders modal when open", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen={true} onClose={handleClose} title="Test Modal">
      <p>Modal Content</p>
    </Modal>
  );
  expect(screen.getByText("Modal Content")).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("Close modal"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
