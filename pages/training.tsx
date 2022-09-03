import { useRouter } from "next/router"

export default function Reading() {
    const router = useRouter()
    return <h1>This is Reading Training Page {JSON.stringify(router.query)}</h1>
}