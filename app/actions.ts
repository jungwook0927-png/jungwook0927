"use server";

import { db } from "@/lib/db";
import { leads } from "@/drizzle/schema";

export type SubmitLeadState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
): Promise<SubmitLeadState> {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const message = data.message.trim();

  if (!name || !email || !phone || !message) {
    return { status: "error", message: "모든 항목을 입력해 주세요." };
  }

  await db.insert(leads).values({ name, email, phone, message });

  return { status: "success" };
}
