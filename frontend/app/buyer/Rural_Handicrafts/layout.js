import Link from "next/link";
import divission from "./../../../stylesheet/divission.module.css";


export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-0">
          <div className={`grid grid-flow-col grid-rows-1 gap-0  p-5 bg-[#005f61]`}>
 <div className="col-span-10 flex justify-center items-center ">
      <ul className="flex space-x-4">
        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Handloom & Textile Crafts (তাঁত ও বস্ত্র শিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Clay & Pottery Works (মাটির কাজ ও মৃৎশিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Cane & Bamboo Crafts (বেত ও বাঁশের কাজ)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Jute Crafts (পাট শিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Wood & Metal Works (কাঠ ও ধাতব শিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Embroidery & Stitch Works (নকশা ও সেলাই শিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Leather & Folk Art (চামড়া ও লোকশিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Painting & Alpana Arts(চিত্র ও আলপনা শিল্প)</div></Link>
        </li>

        <li >
          <Link href="/"><div className={`${divission.sub_cat_style}   text-white`}>Jewellery & Ornament Craft(অলঙ্কার শিল্প)</div></Link>
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