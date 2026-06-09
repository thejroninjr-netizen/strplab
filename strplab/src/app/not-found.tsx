import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-padding text-center">
      <p className="text-[10rem] font-light text-brand-text/5 leading-none tracking-[-0.05em] select-none">404</p>
      <div className="-mt-10">
        <p className="label-eyebrow mb-4">Not Found</p>
        <h1 className="text-4xl lg:text-5xl font-light text-brand-text tracking-[-0.02em] mb-4">
          This page<br /><span className="font-semibold">doesn&apos;t exist.</span>
        </h1>
        <p className="text-brand-secondary text-sm mb-8">The link may have changed or the page has been removed.</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
