import React, { useState } from "react"; 
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input"; // make sure this path is correct

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />
    );
  },
};
