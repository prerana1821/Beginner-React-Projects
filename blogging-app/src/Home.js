import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [name, setName] = useState('Prerana');

    const [blogs, setBlogs] = useState(null);
    var [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //    console.log('Use Effect Ran');
    // //    console.log(blogs);
    // },[name]);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:9000/blogs')
                .then(res => { 
                    // console.log(res);
                    if (!res.ok) {
                       throw Error('Sorry, could not fetch data, Please try again later!'); 
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    // isPending = false;
                    setIsPending(false);
                    setError(null);
                    setBlogs(data);
                }).catch(error => {
                    // console.log(error);
                    // console.log(error.message);
                    setIsPending(false);
                    setError(error.message);
                });
        }, 1000);
    }, []);

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    return (
        <div className="home">
            {error && error}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete} />}
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