"use client";

// Rotation key for the Caesar cipher layer.
// To encode a new email, run this in your browser console:
//   const ROT = 7;
//   const rot = s => [...s].map(c => /[a-zA-Z]/.test(c) ? String.fromCharCode(((c.charCodeAt(0)-(c<'a'?65:97)+ROT)%26)+(c<'a'?65:97)) : c).join('');
//   btoa(rot('your@email.com'))
const ROT = 7;

function decode(encoded: string): string {
  const rotated = atob(encoded);
  return rotated.replace(/[a-zA-Z]/g, (c) => {
    const base = c < "a" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + (26 - ROT)) % 26) + base);
  });
}

type Props = {
  encoded: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ObfuscatedLink({ encoded, className, children }: Props) {
  const address = decode(encoded);
  return (
    <a href={`mailto:${address}`} className={className}>
      {children ?? address}
    </a>
  );
}
