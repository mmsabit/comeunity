export default function Loading() {
  return (
    <section
      aria-busy="true"
      aria-live="polite"
      className="flex min-h-[90vh] w-full items-center justify-center px-4 py-16 sm:px-6"
      role="status"
    >
      <div className="flex w-full max-w-sm flex-col items-center rounded-3xl border border-slate-200 bg-surface-container-lowest px-8 py-10 text-center shadow-subtle">
        <span
          aria-hidden="true"
          className="mb-6 size-12 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600 motion-reduce:animate-none"
        />
        <p className="text-base font-semibold text-slate-800">
          Loading your community
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Just a moment while everything gets ready.
        </p>
      </div>
    </section>
  );
}
