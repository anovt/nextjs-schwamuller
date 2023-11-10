import { useRouter } from 'next/router';

function CleintsDetailPage()
{

    const router = useRouter();
    console.log(router.query);

    function returnHandler()
    {
        router.push('/clients');

    }


    return <div>
        <div className="app">Client Detail Page - {router.query.clientsid}</div>

        <button onClick={returnHandler}>Back</button>

    </div>
}

export default CleintsDetailPage;