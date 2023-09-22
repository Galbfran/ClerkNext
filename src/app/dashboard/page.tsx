"use client"
import { UserButton, useUser } from "@clerk/nextjs";

const Dashboard = () =>{
    const client = useUser()
    console.log(client)

    return(
        <div>
            <h2>pagina desboard</h2>
            <UserButton afterSignOutUrl="/"/>
            
        </div>
    )
}

export default Dashboard;