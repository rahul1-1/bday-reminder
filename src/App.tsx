import React ,{useState} from 'react';
import List from './List';
import data from './data';
export interface IPeople {
  id:number;
  name:string;
  age:number;
  image:string;
}


const App:React.FC = () => {
  const [people,setPeople] = useState<IPeople[]>(data)
 console.log(people)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthads today</h3>
        <List  people={people}/>
        <button onClick={()=>setPeople([])}> clear all</button>
      </section>
    </main>
  );
}

export default App;
