import InitialContent from "./InitialContent";
import AboutHome from "./AboutHome";
import Solution from "./Solution";
import Operation from "./Operation";
import BenefitForAll from "./BenefitForAll";
import CommitmentFuture from "./CoommitmentFuture";
import Questions from "../contact/Questions";
import Message from "@/utils/Message";

export default function HomeMain() {
  return (
    <main>
      <InitialContent />
      <AboutHome />
      <Solution />
      <Operation />
      <BenefitForAll />
      <CommitmentFuture />
      <Questions />
      <Message/>
    </main>
  );
}
