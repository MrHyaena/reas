//Shows error message

export function ErrorMessage({ text }: { text: string }) {
  return (
    <p data-testid="error" className="text-center text-rose-400">
      {text}
    </p>
  );
}
