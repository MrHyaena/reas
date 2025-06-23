import { IoIosExit } from "react-icons/io";

export function Heading({ text }: { text: string }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center gap-3">
        {" "}
        <a href="/">
          {" "}
          <IoIosExit className="text-2xl text-textLight rotate-180 justify-self-end mt-1 hover:text-rose-300 cursor-pointer transition-all ease-in-out" />
        </a>{" "}
        <h3 className="text-textLight col-start-2">{text}</h3>
      </div>
    </>
  );
}
