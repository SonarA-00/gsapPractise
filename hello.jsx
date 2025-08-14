import { useState } from "react";
function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const animals=[1,2,43,4,5,]

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log(`during render:`,person ,animals);

  return (
    <div className=" flex gap-2 justify-center  text-red-700 w-full mx-auto">
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </div>
  );
}
export default Person;
