import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-2">
        <ul className=" gap-10 flex">
          <li><Link href="/">Mission</Link></li>
          <li> <Link href="/">Vision</Link></li>
        </ul>
        </nav>
        
      </header>
      {children}
    </div>
  );
}