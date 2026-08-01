import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { leads } from "@/drizzle/schema";
import LeadRow from "./LeadRow";

export default async function AdminPage() {
  const allLeads = await db
    .select()
    .from(leads)
    .orderBy(desc(leads.createdAt));

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 px-6 py-10 font-sans dark:bg-black sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            리드 관리
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            접수된 문의 {allLeads.length}건
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-black/[.08] bg-white dark:border-white/[.145] dark:bg-zinc-950">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/[.08] bg-zinc-50 dark:border-white/[.145] dark:bg-zinc-900">
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  이름
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  이메일
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  전화번호
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  문의내용
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  제출일시
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {allLeads.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-sm text-zinc-500"
                  >
                    아직 접수된 문의가 없습니다.
                  </td>
                </tr>
              ) : (
                allLeads.map((lead) => <LeadRow key={lead.id} lead={lead} />)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
