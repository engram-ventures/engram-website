type LogoPlaceholderProps = {
  name: string;
  size?: "default" | "featured";
  style?: "plain" | "tile";
};

export default function LogoPlaceholder({
  name,
  size = "default",
  style = "plain",
}: LogoPlaceholderProps) {
  const sizeClasses =
    size === "featured"
      ? "text-xl md:text-2xl py-6 px-4"
      : "text-sm md:text-base py-3 px-3";

  const styleClasses =
    style === "tile"
      ? "border border-parchment-dark rounded-xs bg-white/50 hover:bg-white transition-colors"
      : "";

  return (
    <div
      className={`flex items-center justify-center font-display font-light text-navy tracking-tight text-center ${sizeClasses} ${styleClasses}`}
    >
      {name}
    </div>
  );
}
