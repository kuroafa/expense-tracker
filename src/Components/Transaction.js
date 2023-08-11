import { GlobalContext } from "../Context/GlobalState";
import React, { useContext } from "react";

const Transaction = ({ transactions }) => {
  const sign = transactions.amount < 0 ? "-" : "+";
  const {deleteTransaction} = useContext(GlobalContext);
  return (
    <div>
      <li className={transactions.amount < 0 ? 'minus' : 'plus'} >
      <button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">X</button>
        <span className="flex justify-between text-gray-300">
          {transactions.text}
        </span>{" "}
        <span className="btn text-md">{sign}${Math.abs(transactions.amount)}</span>
      </li>
    </div>
  );
};

export default Transaction;
