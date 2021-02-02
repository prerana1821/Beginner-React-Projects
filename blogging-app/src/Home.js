import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [name, setName] = useState('Prerana');

    // useEffect(() => {
    //    console.log('Use Effect Ran');
    // //    console.log(blogs);
    // },[name]);

    const { data: blogs, isPending, error } = useFetch('http://localhost:9000/blogs');

    // const handleDelete = (id) => {
    //     setBlogs(blogs.filter(blog => blog.id !== id));
    // }

    return (
        <div className="home">
            {error && error}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs' />}
            {/* {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete} />} */}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Prerana')} title="Prerana's blogs" /> */}
            {/* <button onClick={() => setName('Siddhi')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;




// const Home = () => {

//     // let name = 'Prerana';

//     // const [name, setName] = useState('Prerana');
//     // const [age, setAge] = useState(17);

//     const handleClick = (e) => {
//         console.log('Prerana', e);
//     }

//     // OR function handleClick() {
//     //     console.log('Prerana');
//     // }

//     // function handleClickAnon(name, e) {
//     //     console.log(name, e.target);
//     // }

//     const handleUseStateClick = () => {
//         // name = 'Ritu';
//         setName('Siddhi');
//         setAge(18);
//     }

//     return (
//         <div>
//             <h1>HOME PAGE</h1>
//             <p>{name} is {age} years old.</p>
//             <button onClick={handleClick}>Click Me</button>
//             <br />
//             {/* <button onClick={(e) => {
//                 handleClickAnon('Siddhi', e);
//             }}>Click Me 2</button>
//             <br /> */}
//             {/* <button onClick={(e) => handleClickAnon('Ritu', e)}>Click Me 3</button> */}
//             <button onClick={() => handleUseStateClick()}>Click Me 4</button>
//         </div>
//     );
// }