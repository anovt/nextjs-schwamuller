import { useRouter } from 'next/router';

function PortFolioProjectPage()
{

    const router = useRouter();
    console.log(router.query.projectId);

    return <div>
        <div className="app">Portfolio Project Page</div>

    </div>
}

export default PortFolioProjectPage;