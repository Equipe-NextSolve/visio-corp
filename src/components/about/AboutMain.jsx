"use client";
import SectionInitial from "./SectionInitial";
import SectionTwo from "./SectionTwo";
import SectionFinal from "./SectionFinal";
import Message from "@/utils/Message";
import Loanding from "@/utils/Loanding";

export default function AboutMain() {
  return (
    <main className="flex flex-col mt-30 items-center overflow-hidden">
      <SectionInitial />
      <SectionTwo />
      <SectionFinal />
      <Message />
      <Loanding />
    </main>
  );
}
