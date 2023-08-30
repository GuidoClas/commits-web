import Button from "@mui/material/Button";
import Link from "next/link";


export default function Custom404() {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-4">The page you are looking for doesn't exist</p>
                <Link href='/'>
                    <Button variant="contained" className="bg-gray-700 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full">Go back Home</Button>
                </Link>
            </div>
        </div>
      </>
    )
}