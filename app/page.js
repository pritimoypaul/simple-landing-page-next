import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import RevBox from "./components/RevBox";

export default function Home() {
  return (
    <>
      <div className="ml-[106px] mr-[106px]">
        <div className="flex">
          <div></div>
          <div></div>
        </div>
        <div className="flex justify-between mx-[200px]">
          <RevBox />
          <RevBox />
          <RevBox />
        </div>
      </div>
    </>
  );
}
