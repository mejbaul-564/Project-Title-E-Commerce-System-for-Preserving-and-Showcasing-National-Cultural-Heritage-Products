import Link from "next/link";
import divission from "./../../../stylesheet/divission.module.css";


export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-0">
          <div className={`grid grid-flow-col grid-rows-1 gap-0  p-5 bg-[#005f61]`}>
 <div className="col-span-2 flex justify-center items-center ">
      <ul className="flex space-x-4">

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Agricultural Machinery(কৃষি যন্ত্রপাতি)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Musical Instruments(বাদ্যযন্ত্র)</div></Link>
        </li>
      </ul>
 </div>
          </div>




       
        </nav>
        
      </header>
      {children}
    </div>
  );
}