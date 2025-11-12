"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }: { id: string }) {
  //여기 수정함
  const router = useRouter();
  async function removeTopic() {
    const confirmed = confirm(`이 토픽을 정말로 지우시겠습니까? ${id}? `);
    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
