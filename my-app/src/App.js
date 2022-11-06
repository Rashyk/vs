import './App.css';

import jsonData from "./data.json";

function App() {
  console.log(jsonData)
  let menu = jsonData.menu.popup.menuitem
  return (
    <div className="App">
        {
            menu.map( (menuItem, key) => <li>{menuItem.value}</li>)
        }
        //зробить для селекта

    </div>
  );
}

export default App;
