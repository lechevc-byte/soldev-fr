export function FloatingShapesHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float absolute top-[15%] right-[10%] h-16 w-16 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/10 blur-sm" />
      <div className="animate-float-reverse animation-delay-2000 absolute top-[60%] right-[15%] h-10 w-10 rounded-full bg-gradient-to-br from-accent-400/25 to-accent-500/10 blur-sm" />
      <div className="animate-float-slow animation-delay-1000 absolute top-[30%] right-[25%] h-12 w-20 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm" />
      <div className="animate-pulse-soft animation-delay-3000 absolute top-[75%] right-[8%] h-6 w-6 rounded-full bg-accent-400/30" />
      <div className="animate-float animation-delay-4000 absolute top-[20%] left-[8%] h-10 w-10 rotate-45 rounded-lg bg-gradient-to-br from-primary-300/15 to-primary-500/10" />
      <div className="animate-float-slow animation-delay-2000 absolute top-[50%] left-[5%] h-24 w-24 rounded-full bg-gradient-to-br from-accent-300/10 to-transparent blur-md" />
      <div className="animate-float-reverse animation-delay-5000 absolute top-[40%] right-[5%] h-1 w-12 rounded-full bg-white/20" />
      <div className="animate-pulse-soft absolute top-[85%] left-[15%] h-3 w-3 rounded-full bg-primary-400/30" />
      <div className="animate-pulse-soft animation-delay-2000 absolute top-[10%] left-[20%] h-2 w-2 rounded-full bg-accent-400/40" />
    </div>
  );
}

export function FloatingShapesLight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float absolute top-[10%] right-[8%] h-20 w-20 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 opacity-60" />
      <div className="animate-float-reverse animation-delay-3000 absolute bottom-[15%] left-[5%] h-14 w-14 rounded-full bg-gradient-to-br from-accent-100 to-accent-50 opacity-50" />
      <div className="animate-float-slow animation-delay-1000 absolute top-[40%] right-[3%] h-8 w-14 rounded-xl bg-primary-100/40" />
      <div className="animate-pulse-soft animation-delay-2000 absolute top-[25%] left-[10%] h-4 w-4 rounded-full bg-accent-200/50" />
      <div className="animate-pulse-soft animation-delay-4000 absolute bottom-[30%] right-[12%] h-3 w-3 rounded-full bg-primary-200/50" />
      <div className="animate-float animation-delay-5000 absolute bottom-[20%] right-[20%] h-6 w-6 rotate-45 rounded bg-accent-100/40" />
    </div>
  );
}
