import Link from "next/link";

function ClientsListPage()
{


    const clientslist = [
        {id:'anoop',name:"Anoop"},{id:"akhil",name:"Akhil"},{id:'sarath',name:"Sarath"}
    ]

    return <div>
       <h1>Client List</h1>
       <ul>
        {
            clientslist.map((item)=> <li key={item.id}><Link href={{pathname:'/clients/[id]',query:{id:item.id}}}>{item.name}</Link></li>)
        }
</ul>

    </div>
}

export default ClientsListPage;