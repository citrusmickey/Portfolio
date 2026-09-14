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
        'holo-btn text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.03] ' +
        (className ?? '')
      }
      style={{
        background:
          'linear-gradient(123deg, #FF3EA5 0%, #9B5DE5 30%, #00D2FF 55%, #9B5DE5 80%, #FF3EA5 100%)',
        boxShadow:
          '0px 4px 4px rgba(255, 62, 165, 0.35), 4px 4px 12px #00D2FF inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  )
}
