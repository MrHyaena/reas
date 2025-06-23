export default function page() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(/hero.jpg)` }}
    >
      <div className="pagePadding bg-radial from-slate-900/60 to-slate-900 to-85% w-full min-h-screen flex md:items-center justify-center bg-cover pt-headerPadding">
        <div className="w-wrapper gap-5 md:grid grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start">
              <p className="text-primary font-bebas text-xl">
                Váš digitální společník pro prodej nemovitostí
              </p>
              <h1 className="text-textLight max-w-[700px] font-semibold">
                Prodejte nemovitost
                <br /> bez realitky
              </h1>
            </div>
            <p className="text-textLight font-oswald md:text-xl text-lg">
              S námi dostanete prostor pro správu vašeho prodeje, zdarma
              nemovitost oceníme a v případě zájmu domluvíme konzultaci s
              realitním specialistou.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="/chci-nabidku"
                className="buttonBasics md:px-4 md:py-3 p-2 md:text-lg font-semibold hover:scale-105"
              >
                Pojďte to s námi zkusit
              </a>
              <p className="text-textLight text-xl font-oswald">
                Je to zdarma!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
