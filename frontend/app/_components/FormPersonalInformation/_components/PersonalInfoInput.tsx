export function PersonalInfoInput({
  text,
  testId,
  type,
  value,
  setter,
}: {
  text: string;
  testId: string;
  type: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <label className="flex flex-col text-textLight font-oswald md:text-xl gap-1 text-center w-full">
      {text}
      <input
        type={type}
        data-testid={testId}
        value={value}
        className="bg-slate-700/90 p-2  rounded-sm border-2 border-slate-600"
        onChange={(e) => {
          setter(e.target.value);
        }}
      ></input>
    </label>
  );
}
