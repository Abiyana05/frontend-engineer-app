"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 gap-6">
      <h1 className="text-4xl font-bold text-blue-500">Component Library Demo</h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
          Secondary Button
        </Button>
      </div>

      {/* Input */}
      <Input
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Hello Modal">
        <p>This is a reusable modal component.</p>
      </Modal>

      {/* Cards */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </div>
    </main>
  );
}
