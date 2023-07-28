import { useRouter } from "next/router"

const logout = async()=>{
    const data = await fetch('http://localhost:3000/api/logout',{
        method: 'GET',
     })
     const res = await data.json()
     return res
}

export default function Home2(){

    const router = useRouter()

    const logoutHandler = async()=>{
        const res = await logout()
        alert(res.message)
        router.push('/login')

    }
    return (
        <h1 onClick={logoutHandler}>LOGOUT</h1>
    )
}

