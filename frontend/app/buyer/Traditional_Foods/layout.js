import Link from "next/link";
import divission from "./../../../stylesheet/divission.module.css";


export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-0">
          <div className={`grid grid-flow-col grid-rows-1 gap-0  p-5 bg-[#005f61]`}>
 <div className="col-span-8 flex justify-center items-center ">
      <ul className="flex space-x-4">
        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>রাজশাহী ও বরেন্দ্র (North-West / Barendra Region)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>উত্তর-পশ্চিমাঞ্চলের আঞ্চলিক অঞ্চল (North-Western Region)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>খুলনা ও সুন্দরবন অঞ্চল (South-West / Sundarbans Region)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>বরিশাল ও দক্ষিণাঞ্চল (South-Central / Delta Region)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>চট্টগ্রাম ও পাহাড়ি অঞ্চল (South-East / Chittagong Hill Tracts)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>সিলেট ও পার্বত্য উত্তরের অঞ্চল (North-East / Sylhet Region)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>মধ্যাঞ্চল (Central Region / Dhaka & Mymensingh)</div></Link>
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