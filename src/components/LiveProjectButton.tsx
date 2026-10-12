type LiveProjectButtonProps = {
  href?: string
  className?: string
}

export default function LiveProjectButton({ href = '#', className }: LiveProjectButtonProps) {
  const external = href !== '#'
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={
        'inline-block rounded-full border-2 border-[#00D2FF] text-[#E6F7FF] ' +
        'font-medium uppercase tracking-widest ' +
        'px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ' +
        'transition-all duration-200 hover:bg-[#00D2FF] hover:text-[#14002E] ' +
        'hover:scale-[1.05] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] ' +
        (className ?? '')
      }
    >
      Live Project
    </a>
  )
}
