import InitialPolicie from "./InitialPolicie";
import DescriptionPolicie from "./DescriptionPolicie";
import Message from "@/utils/Message";
import Loanding from "@/utils/Loanding";
import Questions from "../contact/Questions";

export default function PoliciesAndPrivacy() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col">
      <InitialPolicie />
      <DescriptionPolicie />
      <Questions />
      <Message />
      <Loanding />
    </main>
  );
}
