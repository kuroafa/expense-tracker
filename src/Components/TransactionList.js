import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3 className="text-xl font-[500] text-gray-200 m-3 border-s-2 p-2">
        History
      </h3>
      <ul className="list flex-col">
        {transactions.map((transactions) => (
        <Transaction key={transactions.id} transactions={transactions}/>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
