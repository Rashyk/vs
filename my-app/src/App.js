import './App.css';

import jsonData from "./data.json";

function App() {

  console.log(jsonData)

  let menu = jsonData.menu.popup.menuitem

  let text = 'default'

  return (
    <div className="App">
        {
            menu.map( (menuItem, key) => <li>{menuItem.value}</li>)
        }
        //зробить для селекта
        <h3>{text}</h3>


        //
    </div>
  );
}

export default App;
