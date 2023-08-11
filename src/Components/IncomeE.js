import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeE = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="flex gap-10 m-3 justify-center items-center    p-2 ">
      <div className="bg-gray-600 p-3 rounded ">
        <h4 className="text-white text-2xl ">{income}</h4>
        <p className="text-green-400">+$0.00</p>
      </div>
      <div className="bg-gray-600 p-3 rounded ">
        <h4 className="text-white text-2xl">{expense}</h4>
        <p className="text-red-400">-$0.00</p>
      </div>
    </div>
  );
};

export default IncomeE;
