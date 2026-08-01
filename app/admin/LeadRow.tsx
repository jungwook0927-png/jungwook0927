"use client";

import { useState, useTransition } from "react";
import { updateLead, deleteLead } from "./actions";

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
};

export default function LeadRow({ lead }: { lead: Lead }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(lead.name);
  const [email, setEmail] = useState(lead.email);
  const [phone, setPhone] = useState(lead.phone);
  const [message, setMessage] = useState(lead.message);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const resetFields = () => {
    setName(lead.name);
    setEmail(lead.email);
    setPhone(lead.phone);
    setMessage(lead.message);
  };

  const handleCancel = () => {
    resetFields();
    setError(null);
    setEditing(false);
  };

  const handleSave = () => {
    setError(null);
    startTransition(async () => {
      try {
        await updateLead(lead.id, { name, email, phone, message });
        setEditing(false);
      } catch {
        setError("저장에 실패했습니다. 다시 시도해 주세요.");
      }
    });
  };

  const handleDelete = () => {
    if (!window.confirm(`"${lead.name}"님의 문의를 삭제할까요?`)) return;
    startTransition(async () => {
      await deleteLead(lead.id);
    });
  };

  const cellClass = "px-4 py-3 align-top text-sm";
  const inputClass =
    "w-full rounded-md border border-black/[.08] bg-white px-2 py-1 text-sm text-black outline-none focus:border-black/40 dark:border-white/[.145] dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-white/40";

  if (editing) {
    return (
      <tr className="border-b border-black/[.06] align-top dark:border-white/[.08]">
        <td className={cellClass}>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        <td className={cellClass}>
          <input
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </td>
        <td className={cellClass}>
          <input
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </td>
        <td className={cellClass}>
          <textarea
            className={`${inputClass} resize-none`}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </td>
        <td className={`${cellClass} whitespace-nowrap text-zinc-500`}>
          {lead.createdAt.toLocaleString("ko-KR")}
        </td>
        <td className={`${cellClass} whitespace-nowrap`}>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={isPending}
              className="rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-60 dark:hover:bg-[#ccc]"
            >
              {isPending ? "저장 중..." : "저장"}
            </button>
            <button
              onClick={handleCancel}
              disabled={isPending}
              className="rounded-md border border-black/[.08] px-3 py-1 text-xs font-medium transition-colors hover:bg-black/[.04] disabled:opacity-60 dark:border-white/[.145] dark:hover:bg-white/[.06]"
            >
              취소
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className="border-b border-black/[.06] align-top dark:border-white/[.08]">
      <td className={cellClass}>{lead.name}</td>
      <td className={cellClass}>{lead.email}</td>
      <td className={cellClass}>{lead.phone}</td>
      <td className={`${cellClass} max-w-xs whitespace-pre-wrap`}>
        {lead.message}
      </td>
      <td className={`${cellClass} whitespace-nowrap text-zinc-500`}>
        {lead.createdAt.toLocaleString("ko-KR")}
      </td>
      <td className={`${cellClass} whitespace-nowrap`}>
        <div className="flex gap-2">
          <button
            onClick={() => setEditing(true)}
            disabled={isPending}
            className="rounded-md border border-black/[.08] px-3 py-1 text-xs font-medium transition-colors hover:bg-black/[.04] disabled:opacity-60 dark:border-white/[.145] dark:hover:bg-white/[.06]"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            disabled={isPending}
            className="rounded-md border border-red-200 px-3 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-60 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
          >
            {isPending ? "처리 중..." : "삭제"}
          </button>
        </div>
      </td>
    </tr>
  );
}
