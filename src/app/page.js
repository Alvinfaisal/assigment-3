import { Form } from "@/components/Form";
import { Item } from "@/components/Item";
import React from "react";

async function getItems() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/8xh8N0sWAO0Y", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [
      {
        id: 1,
        title: "Dummy",
        ispacked: true,
      },
    ];
  }
}

export default async function Page() {
  const { data } = await getItems();
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <main className="container-main">
        <div className="text-center">
          <h1>PACK-BEJO</h1>
          <p className="text-sm text-slate-400">
            ♠ -- Pack your items before your journey-- ♠
          </p>
        </div>
        <Form />

        <ol className="grid grid-cols-1 items-center gap-2 md:grid-cols-2">
          {data.map((item) => {
            return (
              <Item
                key={item._id}
                title={item.title}
                id={item._id}
                ispacked={item.ispacked}
              />
            );
          })}
        </ol>
      </main>
    </div>
  );
}
