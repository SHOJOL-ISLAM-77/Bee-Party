import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BlogCards from "../Components/BlogCards/BlogCards";


const Blog = () => {
    const blogData = useLoaderData();
    return (
        <div className="bg-gradient-to-bl from-red-300 via-blue-200 to-purple-200">
            <Navbar></Navbar>
            <h3 className="md:text-5xl text-3xl text-center py-7 gradient-text font-semibold">Our Blogs</h3>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    blogData.map(data => <BlogCards key={data.id} card={data}></BlogCards>)
                }
            </div>
        </div>
    );
};

export default Blog;