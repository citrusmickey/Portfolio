type LiveProjectButtonProps = {
  href?: string
  className?: string
}

export default function LiveProjectButton({ href = '#', className }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className={
        'inline-block rounded-full border-2 border-[#00D2FF] text-[#E6F7FF] ' +
        'font-medium uppercase tracking-widest ' +
        'px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ' +
        'transition-colors duration-200 hover:bg-[#00D2FF]/20 ' +
        (className ?? '')
      }
    >
      Live Project
    </a>
  )
}
