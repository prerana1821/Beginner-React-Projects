import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from "./Create";
import Search from "./Search";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* OR <Navbar></Navbar> */}
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


// function App() {

//   // const title = 'Hello World';
//   // const likes = 10;
//   // const names = ['Prerana ', 'Siddhi ', 'Ritu '];
//   // // const bool = false; // connot use booleans in JSX
//   // const person = {
//   //   'name': 'Om',
//   //   'age': 20
//   // }; // connot use objects directly in JSX but we can use object.key 
//   // const link = 'https://www.google.com/';

//   return (
//     <div className="App">
//       <Navbar />
//       {/* OR <Navbar></Navbar> */}
//       <div className="content">
//         <Home />
//         {/* <h1>{title}</h1>
//         <p>Likes {likes}</p>
//         <p>Names: {names}</p>
//         {/* <p>Girls: {bool}</p> ERROR */}
//         {/* <p>Person: {person}</p> ERROR */}
//         {/* <p>Person: {person.name}</p>

//         <h1>{'Hello Prerana'}</h1>
//         <h1>Hello Vijay</h1>
//         <p>{19}</p>
//         <p>{[1, 2, 3, 44, 6]}</p>
//         <p>{['ABC', 'PQR']}</p>
//         <p>{ Math.floor(Math.random() * 10) }</p>

//         <a href="https://www.google.com/">Google Site</a>
//         <br/>
//         <a href={link}>Dynamic Google Site link</a>  */}
//       </div>
//     </div>
//   );
// }
