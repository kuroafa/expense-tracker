import  { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc,item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4 className='font-[500] text-xl  m-2 text-gray-300'>Your Balance</h4>
      <h1 className='font-[500] text-xl m-2 mt-[-9px] text-gray-300' >${total}</h1>
    </div>
  )
}

export default Balance
