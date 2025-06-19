export default function page() {
  const startingTexts: string[] = ["Jak to bude probíhat"];

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(/hero.jpg)` }}
    >
      <div className="bg-radial from-slate-900/60 to-slate-900 to-85% px-10 w-full min-h-screen flex items-center justify-center bg-cover">
        <div className="w-wrapper flex flex-col items-center justify-center">
          <h1 className="text-textLight">Nejprve vyplňte formulář</h1>
        </div>
      </div>
    </div>
  );
}
