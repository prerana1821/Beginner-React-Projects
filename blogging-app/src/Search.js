import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Search = () => {

    const [name, setName] = useState('');
    const { data: blogs, isPending, error } = useFetch('http://localhost:9000/blogs');
    let blogg = blogs && blogs.filter(blog => blog.author === name);
    return (
        <div className='search'>
            <h1>Searching...</h1>
            <form>
                <label>Search by Author:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>

            {error && error}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogg}
                title={name && `${name}'s Blogs`} />}
        </div>
    )
}

export default Search;