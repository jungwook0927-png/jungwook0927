"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { leads } from "@/drizzle/schema";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function updateLead(id: number, data: LeadInput) {
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const message = data.message.trim();

  if (!name || !email || !phone || !message) {
    throw new Error("모든 항목을 입력해 주세요.");
  }

  await db
    .update(leads)
    .set({ name, email, phone, message })
    .where(eq(leads.id, id));

  revalidatePath("/admin");
}

export async function deleteLead(id: number) {
  await db.delete(leads).where(eq(leads.id, id));
  revalidatePath("/admin");
}
