import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] w-full items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-surface-container-lowest px-6 py-10 text-center shadow-subtle sm:px-12 sm:py-14">
        
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          404 <br /> Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
          We couldn&apos;t find the page you were looking for. It may have moved
          or the address might be mistyped.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-subtle transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            href="/"
          >
            Go to homepage
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-surface-container-low px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            href="/event"
          >
            Explore events
          </Link>
        </div>
      </div>
    </section>
  );
}
