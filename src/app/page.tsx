import Topiclist from "@/components/Topiclist";
import React from "react";

export default function MainPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mt-4">MongoDB CRUD examples</p>
      <Topiclist />
    </div>
  );
}
