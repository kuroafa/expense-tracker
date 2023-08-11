import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADDED_MESSAGE } from "./Message";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    notify(ADDED_MESSAGE)
    console.log(newTransaction);
  };
  const notify = (message) =>{
    toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  return (
    <div>
      <h3 className="m-2 font-[500] text-2xl text-gray-200 text-center p-2 mb-[-10px]">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="flex flex-col w-60 h-[70px]">
          <label
            htmlfor="text"
            className="text-gray-300 m-2 text-lg font-bold mb-[-4px] "
          >
            Name
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="m-2 rounded p-2 bg-slate-300 focus:outline-0  h-8"
            placeholder="Name of Transaction"
            required
          />
        </div>
        <div className="flex flex-col w-70 h-[105px] ">
          <label
            htmlfor="amount"
            className="text-gray-300 m-2 font-bold text-lg mb-[-4px]"
          >
            Amount <br />
            <span className="text-sm text-gray-400">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="m-2 rounded focus:outline-0 bg-slate-300 p-2  h-8"
            placeholder="Transaction Amount"
            required
          />
        </div>
        <button className="bg-slate-800 p-2 mt-[40px] ml-[20px] mr-[20px] text-lg font-[500] text-gray-400 hover:bg-slate-700 rounded">
          Add transaction
        </button>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
};

export default AddTransaction;
