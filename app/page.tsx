import Image from "next/image";
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="mb-4 text-4xl font-bold">Página Inicial</h1>
            <Link href="/tablePage" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Table
            </Link>
        </main>
    );
}

