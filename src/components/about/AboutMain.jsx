"use client";
import SectionInitial from "./SectionInitial";
import SectionTwo from "./SectionTwo";
import SectionFinal from "./SectionFinal";
import Message from "@/utils/Message";

export default function AboutMain() {
  return (
    <main className="flex flex-col mt-30 items-center w-full">
      <SectionInitial />
      <SectionTwo />
      <SectionFinal />
      <Message />
    </main>
  );
}
