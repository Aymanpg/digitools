export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#2E2190] px-6 py-16 md:py-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Transform Your Workflow?</h2>
        <p className="mt-3 text-lg text-white/80">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#products-section" className="rounded-lg bg-white px-7 py-3.5 font-semibold text-indigo-700 transition hover:opacity-90">
            Explore Products
          </a>
          <a href="#pricing-section" className="rounded-lg border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20">
            View Pricing
          </a>
        </div>
        <p className="mt-4 text-sm text-white/70">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}