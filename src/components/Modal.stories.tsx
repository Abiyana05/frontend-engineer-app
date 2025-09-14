import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Demo Modal">
          <p>This is a reusable modal</p>
        </Modal>
      </>
    );
  },
};
