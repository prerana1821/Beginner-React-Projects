import { useState } from "react";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ritu');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);

        setIsPending(true);
        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: { 'Context-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false)
        });
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Prerana">Prerana</option>
                    <option value="Siddhi">Siddhi</option>
                    <option value="Ritu">Ritu</option>
                </select>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <br /> */}
                {/* {title}
                {body}
                {author} */}
            </form>
        </div>
    )
}

export default Create;
