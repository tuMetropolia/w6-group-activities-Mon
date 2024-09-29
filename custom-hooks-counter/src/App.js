// import useLocalStorage from "./useLocalStorage";

// const App = () => {
//   const [name, setName] = useLocalStorage("name", "");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Your name is stored in localStorage: {name}</p>
//     </div>
//   );
// };

// export default App;

// AppWithCustomHook.js
import useField from "./useField";
import "./App.css"; // Add CSS if needed

const AppWithCustomHook = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br />
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br />
        <div>
          Height: <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default AppWithCustomHook;

// import { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [born, setBorn] = useState("");
//   const [height, setHeight] = useState("");

//   return (
//     <div>
//       <form>
//         <div>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           Birthdate:
//           <input
//             type="date"
//             value={born}
//             onChange={(event) => setBorn(event.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           Height:
//           <input
//             type="number"
//             value={height}
//             onChange={(event) => setHeight(event.target.value)}
//           />
//         </div>
//       </form>
//       <div>
//         {name} {born} {height}
//       </div>
//     </div>
//   );
// };

// export default App;
