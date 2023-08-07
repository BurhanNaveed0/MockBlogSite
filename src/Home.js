import useFetch from './useFetch';
import Bloglist from './Bloglist';

const Home = () => {

    // Start JSON Server --> npx json-server --watch data/db.json --port 8000
    const { data: blogs, isPending, error, handeDelete } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" handeDelete={handeDelete} />}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handeDelete={handeDelete} />}
        </div>
    );
}

export default Home;