type ContactButtonProps = {
  href?: string
  className?: string
}

export default function ContactButton({ href = '#contact', className }: ContactButtonProps) {
  return (
    <a
      href={href}
      className={
        'inline-block rounded-full text-white font-medium uppercase tracking-widest ' +
        'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 ' +
        'wave-btn text-xs sm:text-sm md:text-base transition-all duration-200 ' +
        'hover:scale-[1.05] hover:-translate-y-1 ' +
        'hover:drop-shadow-[0_0_22px_rgba(0,229,192,0.6)] ' +
        (className ?? '')
      }
      style={{
        background:
          'linear-gradient(123deg, #00E5C0 0%, #00D2FF 24%, #9B5DE5 50%, #FF3EA5 74%, #FFD84D 100%)',
        boxShadow:
          '0px 4px 4px rgba(0, 210, 255, 0.3), 4px 4px 12px #9B5DE5 inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      <span className="relative z-[1]">Contact Me</span>
    </a>
  )
}
