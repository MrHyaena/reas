import FormCarousel from "../_components/Formular/_components/FormCarousel";

export default function page() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(/hero.jpg)` }}
    >
      <div className="bg-radial from-slate-900/80 to-slate-900 to-85% px-10 w-full min-h-screen flex items-start justify-center bg-cover pt-40">
        <div className="w-wrapper flex flex-col items-center justify-start">
          <FormCarousel />
        </div>
      </div>
    </div>
  );
}
