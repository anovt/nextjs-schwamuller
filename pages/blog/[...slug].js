import { useRouter } from 'next/router';

function BlogPostPage()
{

    const router = useRouter();
    console.log(router.query);

    return <div>
        <div className="app">This is a Blog post page</div>

    </div>
}

export default BlogPostPage;