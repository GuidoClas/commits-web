import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";


export default function Custom404() {
    return (
      <>
        <Head>
          <title>Not Found</title>
          <meta name="description" content="Commits Page." />
          <meta name="author" content="Guido Clas"/>
          <meta name="keywords" content="Guido, Clas, Commit-Web, Frontend"/>
          <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
        </Head>
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg">The page you are looking for doesn't exist</p>
                <Link href='/'>
                    <Button variant="contained" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Go back Home</Button>
                </Link>
            </div>
        </div>
      </>
    )
}