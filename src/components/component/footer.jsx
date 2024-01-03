/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uz7zOPNWukr
 */
import Link from "next/link"

export default function footer() {
  return (
    <footer className=" w-full py-6 px-4 bg-white shadow-black shadow-2xl ">
      <div className="container mx-auto flex flex-wrap  items-center justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
          <Link className="text-2xl text-red-500 font-bold" href="#">
            Warong Daging
          </Link>
        </div>
        <nav className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <Link className="mx-2 text-sm hover:underline" href="/">
            Shop
          </Link>
          <Link className="mx-2 text-sm hover:underline" href="/cart">
            Cart
          </Link>
          <Link className="mx-2 text-sm hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <div
          className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
          <Link className="mx-2" href="#">
            <FacebookIcon className="w-4 h-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="mx-2" href="#">
            <TwitterIcon className="w-4 h-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="mx-2" href="#">
            <InstagramIcon className="w-4 h-4" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
        <div className="w-full text-center md:w-auto text-sm">
          <p className="mb-1">© Warong Daging. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}