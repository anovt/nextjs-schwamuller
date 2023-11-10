import Link from 'next/link';

function HomePage()
{



    return <div>
        <div className="app">My Home Page</div>
       <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
       
       </ul>

    </div>
}

export default HomePage;