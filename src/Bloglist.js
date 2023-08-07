const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handeDelete = props.handeDelete;

    return (
        <div className="Bloglist">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button className="blog-delete-button" onClick={() => handeDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;