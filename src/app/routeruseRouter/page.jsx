"use client"
import { useRouter } from 'next/navigation'

const RouteruseRouter = () => {
    const router = useRouter();
    return (
        <div>RouteruseRouter
            <button onClick={() => router.push('/groupingroute/employees')}>Go to Dynamic Route</button>
            <button onClick={() => router.back()}>Back</button>
        </div>
    )
}

export default RouteruseRouter