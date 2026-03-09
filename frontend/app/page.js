import Carousel from "@/component/carousel/carousel";
import allCommon from "@/stylesheet/allCommonClass.module.css";
import mainPage from "@/stylesheet/global.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>OUR BANGLADESH</div>
      </h1>
      <h1 className={`text-4xl font-bold text-center ${mainPage.main}`}>
        <div>
          {/* hero section */}
          <div className={`grid grid-cols-12 gap-2`}>
            <div className={`${mainPage.border1} col-span-8`}>
              <Carousel />
            </div>
            <div className={`${mainPage.border1} col-span-4`}>
              <div className={`grid grid-rows-2 gap-2`}>
                {/* 1 */}
                <div className={`${mainPage.border1} row-span-1`}>
                  {/*  */}
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/heroSection/home_page_heroSec_rightSide_top_Image.png"
                      alt="Responsive Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* 2 */}
                <div className={`${mainPage.border1} row-span-1`}>
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/heroSection/home_page_heroSec_rightSide_button_Image.png"
                      alt="Responsive Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
      {/* Notice */}

      <div className={`${allCommon.allCommonClass_component_area} text-center`}>
        <div className={`grid grid-cols-12 gap-2`}>
          <div className={`${mainPage.stt1} col-span-2 text-white  font-bold`}>
            Notice :
          </div>
          <div className={`${mainPage.stt1} col-span-10`}>
            <marquee
              className={`${mainPage.stt2}`}
              behavior="scroll"
              direction="left"
            >
              সকলকে জানানো যাচ্ছে যে আগামীকাল সকাল ১০টায় গুরুত্বপূর্ণ একটি
              মিটিং অনুষ্ঠিত হবে | অনুগ্রহ করে সবাই সময়মতো উপস্থিত থাকবেন
            </marquee>
          </div>
        </div>
      </div>

      {/*Top categories */}

      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>Top Categories</div>
      </h1>

      {/* categories */}
      <div
        className={`${allCommon.allCommonClass_component_area} text-center ml-10 mr-10`}
      >
        <div className={`grid grid-cols-12 gap-4`}>
          {/* first line */}
          {/* 1 */}
          <div
            className={`${mainPage.border1} col-span-2 flex justify-center items-center gap-1.5`}
          ></div>
          {/*  */}
          <div
            className={`${mainPage.border1} col-span-8  flex justify-center items-center gap-8.5`}
          >
            {/*  */}
            {/* image -1 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_1.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
                  মৃৎশিল্প
                </span>
              </div>
            </div>
            {/* image -2 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_2.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
                 সেলাই 
                </span>
              </div>
            </div>
            {/* image -3 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_3.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
                  বাদ্যযন্ত্র
                </span>
              </div>
            </div>
            {/* image -4 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_4.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
                উৎসব
                </span>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className={`${mainPage.border1} col-span-2  flex justify-center items-center gap-1.5`}
          ></div>
        </div>
          {/* 2nd line */}
      <div className={`grid grid-cols-12 gap-4 mt-3`}>
          {/* first line */}
          {/* 1 */}
          <div
            className={`${mainPage.border1} col-span-2 flex justify-center items-center gap-1.5`}
          ></div>
          {/*  */}
          <div
            className={`${mainPage.border1} col-span-8  flex justify-center items-center gap-8.5`}
          >
            {/*  */}
            {/* image -1 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_5.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
খাবার                </span>
              </div>
            </div>
            {/* image -2 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_6.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
পোশাক                </span>
              </div>
            </div>
            {/* image -3 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_7.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
বাঁশের কাজ                </span>
              </div>
            </div>
            {/* image -4 */}
            <div className=" relative group cursor-pointer">
              {/* Image */}
              <Image
                src="/TopCategories/Top Categories_8.png"
                width={300}
                height={300}
                alt="Top Category"
                className="object-contain"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
তাঁত              </span>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className={`${mainPage.border1} col-span-2  flex justify-center items-center gap-1.5`}
          ></div>
        </div>
          {/* end */}





      </div>
       {/* Our Collection*/}

      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>Our Collection</div>
      </h1>

       {/* Our Entrepreneurial Life Story*/}

      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>Our Entrepreneurial Life Story</div>
      </h1>
       {/* Made By*/}

      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>Made By</div>
      </h1>
        {/* Our Partner*/}

      <h1 className={`${allCommon.allCommonClass_head} text-center`}>
        <div>Our Partner </div>
      </h1>
      {/*  */}
    </main>
  );
}
