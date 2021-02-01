import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Prerana', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Siddhi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ritu', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
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