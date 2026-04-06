"use client";

export function NewsletterForm() {
  return (
    <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder="you@example.com"
        className="h-10 flex-1 min-w-0 rounded-lg border border-ktf-gray-700 bg-ktf-navy px-3 text-sm text-white placeholder:text-ktf-gray-600 focus:border-ktf-blue focus:outline-none focus:ring-1 focus:ring-ktf-blue"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="h-10 rounded-lg bg-ktf-blue px-4 text-sm font-medium text-white transition-colors hover:bg-ktf-blue-deep active:bg-ktf-blue-pressed"
      >
        Subscribe
      </button>
    </form>
  );
}
