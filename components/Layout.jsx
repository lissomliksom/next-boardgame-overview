import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Brettspillsøndag</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">

          { children }

        </div>
      </main>
    </div>
  );
}