import CompanieHeader from "./CompanieHeader";
import FinancialModel from "./FinancialModel";
import UseCase from "./UseCase";
import Questions from "../contact/Questions";
import Message from "@/utils/Message";
import Loanding from "@/utils/Loanding";

export default function CompaniesMain() {
  return (
    <main>
      <CompanieHeader />
      <UseCase />
      <FinancialModel />
      <Questions />
      <Message />
      <Loanding />
    </main>
  );
}
