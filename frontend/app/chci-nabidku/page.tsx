import FormCarousel from "../_components/Formular/_components/FormParts/FormCarousel";

export default function page() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(/hero.jpg)` }}
    >
      <div className="bg-radial from-slate-900/80 to-slate-900 to-85% pagePadding w-full min-h-screen flex items-center justify-center bg-cover pt-headerPadding">
        <div className="w-wrapper flex flex-col items-center justify-center">
          <FormCarousel />
        </div>
      </div>
    </div>
  );
}
