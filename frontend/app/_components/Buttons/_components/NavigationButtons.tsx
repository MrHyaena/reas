//NavigationButton components used in form part with inputs

export function NavigationButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      data-testid="navigationButton"
      onClick={onClick}
      className="buttonBasics md:px-4 p-2 md:py-3   hover:scale-105"
    >
      {text}
    </button>
  );
}
