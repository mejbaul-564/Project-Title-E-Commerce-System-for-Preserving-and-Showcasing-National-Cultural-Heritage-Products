import Link from "next/link";
import divission from "./../../../stylesheet/divission.module.css";
 

export default function layout({ children }) {
  return (
    <div>
      <header>
        <nav className="m-0">
          <div
            className={`grid grid-flow-col grid-rows-1 gap-0  p-5 bg-[#005f61]`}
          >
            <div className="col-span-8 flex justify-center items-center ">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Dhaka Division (ঢাকা বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Chattogram Division (চট্টগ্রাম বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Rajshahi Division (রাজশাহী বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Khulna Division (খুলনা বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Barishal Division (বরিশাল বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Sylhet Division (সিলেট বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Rangpur Division (রংপুর বিভাগ)
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <div className={`${divission.sub_cat_style}   text-white`}>
                      Mymensingh Division (ময়মনসিংহ বিভাগ)
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
{/* Sidebar */}
<div className="grid grid-cols-12 gap-0.5">
        <div className="col-span-2 mt-16 pb-10 pl-5 pr-5 text-center text-black  text-2xl " >
          Sort By
        </div>
        <div className="col-span-10 ">
           {/* Main Content  */}
      {children}
          </div>
</div>
{/* Sidebar */}

     
    </div>
  );
}
