interface HeroPersonProps {
  src: string;
  alt: string;
  className?: string;
}

export default function HeroPerson({ src, alt, className }: HeroPersonProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}
