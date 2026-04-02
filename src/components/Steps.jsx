import step1 from "../assets/user.png";
import step2 from "../assets/package.png";
import step3 from "../assets/rocket.png";

const steps = [
  { 
    num: "01", 
    icon: step1, 
    title: "Create Account", 
    desc: "Sign up for free in seconds. No credit card required to get started." 
  },
  { 
    num: "02", 
    icon: step2, 
    title: "Choose Products", 
    desc: "Browse our catalog and select the tools that fit your needs." 
  },
  { 
    num: "03", 
    icon: step3, 
    title: "Start Creating", 
    desc: "Download and start using your premium tools immediately." 
  },
]

export default function Steps() {
  return (
    <section className="bg-slate-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header - Exact match */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Get Started in 3 Steps
          </h2>
          <p className="mt-3 text-slate-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={step.num}
              className={`rounded-2xl bg-white p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift fade-up`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Step Number Circle */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-2xl font-bold text-white">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mb-3 text-4xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


