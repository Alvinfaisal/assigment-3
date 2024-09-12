"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Item = ({ id, title, ispacked }) => {
  const router = useRouter();

  async function handleDelete() {
    await fetch("https://v1.appbackend.io/v1/rows/8xh8N0sWAO0Y", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh("/");
  }

  function handlePacked() {
    const data = { _id: id, title: title, ispacked: !ispacked };

    fetch("https://v1.appbackend.io/v1/rows/8xh8N0sWAO0Y", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    router.refresh("/");
  }

  return (
    <li className="flex w-[200px] items-center justify-between gap-2 rounded-md p-2 text-center shadow-sm">
      <input
        type="checkbox"
        checked={ispacked === true ? true : false}
        onChange={handlePacked}
      />
      <p
        style={
          ispacked === true
            ? { textDecoration: "line-through", color: "gray" }
            : {}
        }
      >
        {title}
      </p>
      <div className="cursor-pointer" onClick={handleDelete}>
        ✖
      </div>
    </li>
  );
};
