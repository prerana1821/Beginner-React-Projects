const BlogList = ({ blogs, title, handleDelete }) => {

    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <div className='inner-blog'>
                        <p>Written by {blog.author}</p>
                        <button className='btn-delete' onClick={() => handleDelete(blog.id)}>delete blog</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList
