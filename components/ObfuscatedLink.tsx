"use client";

type Props = {
  charCodes: readonly number[];
  className?: string;
  children?: React.ReactNode;
};

export default function ObfuscatedLink({ charCodes, className, children }: Props) {
  const address = charCodes.map((c) => String.fromCharCode(c)).join("");
  return (
    <a href={`mailto:${address}`} className={className}>
      {children ?? address}
    </a>
  );
}
