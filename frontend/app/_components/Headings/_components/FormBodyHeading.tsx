import Link from "next/link";
import { IoIosExit } from "react-icons/io";

//Heading component used in form
export function FormBodyHeading({ text }: { text: string }) {
  return (
    <>
      <div className="md:grid grid-cols-[1fr_3fr_1fr] text-center flex flex-col items-center gap-3">
        <Link href="/">
          <IoIosExit className="text-2xl text-textLight rotate-180 justify-self-end mt-1 hover:text-rose-300 cursor-pointer transition-all ease-in-out" />
        </Link>
        <h3 data-testid="heading" className="text-textLight col-start-2">
          {text}
        </h3>
      </div>
    </>
  );
}
