import logoAsset from "@/assets/brew-bean-logo.png";

type Props = {
  className?: string;
  /** Wrap the logo in a warm cream plate so it stays legible on dark surfaces. */
  onDark?: boolean;
  priority?: boolean;
};

/**
 * Official Brew & Bean Cafe horizontal logo.
 * Used as-is: original artwork, colors and proportions. Never recreate or restyle.
 */
export function BrandLogo({ className = "h-10", onDark = false, priority = false }: Props) {
  const img = (
    <img
      src={logoAsset}
      alt="Brew & Bean Cafe — Brewed with Passion, Served with Love."
      width={1162}
      height={406}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`${className} w-auto object-contain`}
    />
  );

  if (!onDark) return img;

  return (
    <span className="inline-flex items-center rounded-lg bg-cream px-4 py-2.5">{img}</span>
  );
}
