import { useRouter } from "next/router"

export default function Reading() {
    const router = useRouter()
    return (
        <div className="bg-green-400">
            <h1 className={`text-center text-black-400 font-bold text-4xl`}>
                This is Reading Training Page {JSON.stringify(router.query)}
            </h1>
        </div>
    )
}
