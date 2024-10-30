// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Item from "./components/Item";

//  동적 반영시킬 item 목록을 배열로 정의
const items = [
  {
    id: 1,
    name: "notebook",
    checked: true,
  },
  {
    id: 2,
    name: "smartphone",
    checked: false,
  },
  {
    id: 3,
    name: "tablet",
    checked: true,
  },
  { id: 4 },
];

//  render 함수에서 사용할 함수 정의
const renderItems = (item) => (
  <Item key={item.id} name={item.name} checked={item.checked} />
);

function App() {
  //  원래 있던 코드는 모두 삭제
  /*
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    */

  /* Item 컴포넌트를 사용하여 item 정보를 출력 */
  /*
  return (
    <div>
      <Item name="notebook" checked={true} />
      <Item name="smartphone" />
      <Item name="tablet" checked />
      <Item name="monitor" checked />
    </div>
  );
  */

  /* items 배열을 사용하여 item 정보를 출력 */
  return (
    <div>
      {/* {items.map((item) => (
        <Item key={item.id} name={item.name} checked={item.checked} />
      ))} */}
      {/* map에 렌더링할 함수를 전달 */}
      {items.map(renderItems)}
    </div>
  );
}

export default App;
