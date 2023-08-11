import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeE from "./Components/IncomeE";
import TransactionList from "./Components/TransactionList";
import GlobalProvider from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div className="App bg-gray-400 p-10 rounded-xl">
      <div className="flex flex-col gap-2">
        <div className="bg-gray-800 p-5 rounded-xl">
          <Header title={"Expense Tracker"} />
          <Balance />
        </div>
        <div className="bg-gray-700 p-2 rounded-xl">
        <h2 className="text-xl font-bold text-gray-200 p-2 border-s-2 m-2">Transactions</h2>
          <IncomeE />
          <TransactionList />
        </div>
        <div className="bg-gray-600 rounded-xl p-5">
          <AddTransaction />
        </div>
      </div>
    </div>
    </GlobalProvider>

  );
}

export default App;
