import { useRouter } from "next/router"

export default function Reading() {
    const router = useRouter()
    return (
        <div className="bg-slate-900">
            <h1 className={`text-center text-green-900 font-bold text-4xl`}>
                This is Reading Training Page {JSON.stringify(router.query)}
            </h1>
        </div>
    )
}
