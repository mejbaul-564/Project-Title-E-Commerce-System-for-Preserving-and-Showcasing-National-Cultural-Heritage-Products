import Link from "next/link";
import divission from "./../../../stylesheet/divission.module.css";


export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-0">
          <div className={`grid grid-flow-col grid-rows-1 gap-0  p-5 bg-[#005f61]`}>
 <div className="col-span-9 flex justify-center items-center ">
      <ul className="flex space-x-4">
        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Eid(ঈদ)</div></Link>
        </li>

         <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>মহরম ও আশুরা (Muharram / Ashura)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Puja(পূজা)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Vesak(বৌদ্ধ পূর্ণিমা)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Christmas(ক্রিসমাস)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>New Harvest Festival(নবান্ন উৎসব)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Spring Festival(বসন্ত উৎসব)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>বিজু (Biju)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Others</div></Link>
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