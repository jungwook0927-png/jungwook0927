"use client";

import { useState } from "react";

function PlaceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M5 4.5h9.5L19 9v10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 4.5V9h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.5 12.5h9M7.5 15.5h9M7.5 18h5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="m12 4 2.47 5.18 5.53.72-4.06 3.98 1 5.62L12 16.7l-4.94 2.8 1-5.62-4.06-3.98 5.53-.72L12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" className="h-auto w-full max-w-sm">
      <rect x="16" y="24" width="288" height="150" rx="14" className="fill-white dark:fill-zinc-950" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
      <rect x="16" y="24" width="288" height="28" rx="14" className="fill-emerald-50 dark:fill-emerald-400/10" />
      <circle cx="34" cy="38" r="4" className="fill-emerald-400/70" />
      <circle cx="48" cy="38" r="4" className="fill-emerald-400/40" />
      <circle cx="62" cy="38" r="4" className="fill-emerald-400/20" />

      <rect x="34" y="68" width="120" height="10" rx="5" className="fill-zinc-200 dark:fill-zinc-800" />
      <rect x="34" y="86" width="80" height="8" rx="4" className="fill-zinc-100 dark:fill-zinc-800/60" />

      <rect x="34" y="108" width="252" height="1" className="fill-zinc-100 dark:fill-zinc-800" />

      <rect x="34" y="122" width="60" height="34" rx="8" className="fill-emerald-100 dark:fill-emerald-400/10" />
      <path d="M64 148s10-8.8 10-16.2a10 10 0 0 0-20 0c0 7.4 10 16.2 10 16.2Z" className="stroke-emerald-600 dark:stroke-emerald-300" strokeWidth="1.6" />
      <circle cx="64" cy="131.5" r="3.4" className="stroke-emerald-600 dark:stroke-emerald-300" strokeWidth="1.6" />

      <rect x="104" y="122" width="80" height="34" rx="8" className="fill-sky-100 dark:fill-sky-400/10" />
      <path d="M120 140.5h48M120 148h32" className="stroke-sky-600 dark:stroke-sky-300" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M120 133h48" className="stroke-sky-600 dark:stroke-sky-300" strokeWidth="1.6" strokeLinecap="round" />

      <rect x="194" y="122" width="92" height="34" rx="8" className="fill-amber-100 dark:fill-amber-400/10" />
      <path d="M208 148v-10M222 148v-16M236 148v-6M250 148v-13" className="stroke-amber-600 dark:stroke-amber-300" strokeWidth="1.8" strokeLinecap="round" />

      <circle cx="266" cy="196" r="18" className="fill-emerald-400/20" />
      <path d="M258 196.5l5.5 5.5L275 190" className="stroke-emerald-600 dark:stroke-emerald-300" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features = [
  {
    icon: PlaceIcon,
    title: "네이버플레이스 최적화",
    description:
      "매장 정보, 대표 사진, 소개 문구를 꾸준히 관리해 검색 노출과 방문 전환을 함께 끌어올립니다.",
  },
  {
    icon: BlogIcon,
    title: "블로그 콘텐츠 작성대행",
    description:
      "검색 유입에 최적화된 블로그 글을 정기적으로 기획하고 작성해 자연스러운 유입을 만듭니다.",
  },
  {
    icon: StarIcon,
    title: "리뷰 & 평판 관리",
    description:
      "고객 리뷰를 모니터링하고 응대 가이드를 제공해 매장 신뢰도를 함께 관리합니다.",
  },
  {
    icon: ChartIcon,
    title: "월간 리포트 제공",
    description:
      "작업 내역과 진행 현황을 정리한 리포트를 매달 공유해 진행 상황을 투명하게 확인하실 수 있습니다.",
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/[.06] dark:border-white/[.08]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
          <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            네이버 마케팅 대행
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            네이버플레이스 관리부터
            <br />
            블로그 작성대행까지, 한번에
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            매장 노출을 높이는 플레이스 관리와 꾸준한 블로그 콘텐츠 발행을
            전문팀이 대신해드립니다. 부담 없이 무료 상담을 신청해 보세요.
          </p>
          <a
            href="#contact-form"
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            무료 상담 신청하기
          </a>
          <HeroIllustration />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-2 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-2xl">
            이런 서비스를 제공합니다
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            매장 검색 노출부터 콘텐츠 제작까지 필요한 부분만 맡겨보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-950"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Icon />
              </div>
              <h3 className="text-base font-semibold text-black dark:text-zinc-50">
                {title}
              </h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="flex flex-col items-center justify-center border-t border-black/[.06] bg-white px-6 py-16 dark:border-white/[.08] dark:bg-black sm:py-20"
      >
        <div className="flex w-full max-w-lg flex-col gap-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              무료 상담 신청
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              아래 정보를 입력해 주시면 확인 후 연락드리겠습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-black dark:text-zinc-50"
              >
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-md border border-black/[.08] bg-white px-3 text-sm text-black outline-none transition-colors focus:border-black/40 dark:border-white/[.145] dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black dark:text-zinc-50"
              >
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-md border border-black/[.08] bg-white px-3 text-sm text-black outline-none transition-colors focus:border-black/40 dark:border-white/[.145] dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-black dark:text-zinc-50"
              >
                전화번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 rounded-md border border-black/[.08] bg-white px-3 text-sm text-black outline-none transition-colors focus:border-black/40 dark:border-white/[.145] dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-white/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-black dark:text-zinc-50"
              >
                문의내용
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="문의하실 내용을 입력해 주세요."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="resize-none rounded-md border border-black/[.08] bg-white px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black/40 dark:border-white/[.145] dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-white/40"
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-11 w-full rounded-md bg-foreground text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              제출하기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
