import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-row items-center m-3 py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Link
        href={'/views/firstPage'}
        className="p-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >Create pdf from text</Link>
      </main>
    </div>
  );
}
