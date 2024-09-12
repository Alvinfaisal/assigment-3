"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newItem = { title: title, ispacked: false };

    await fetch("https://v1.appbackend.io/v1/rows/8xh8N0sWAO0Y", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([newItem]),
    });

    router.refresh("/");
    setTitle("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Add item..."
        onChange={handleTitle}
        value={title}
      />
      <button>Add</button>
    </form>
  );
};
