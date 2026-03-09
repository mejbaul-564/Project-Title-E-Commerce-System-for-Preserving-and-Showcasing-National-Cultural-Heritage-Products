import Link from "next/link";
import { CiAirportSign1, CiCirclePlus, CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import styles from "./FooterSeller.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={`grid grid-cols-12 gap-4 ${styles.footerContent}`}>
          <div className="col-span-3">
            {/* ---complain */}
            <div
              className={`flex items-center justify-center gap-5 ${styles.title}`}
            >
              <h1
                className="bg-red-800 p-3 rounded-md
"
              >
                <nav>
                  <Link href="/complaint">Complaint</Link>
                </nav>
              </h1>
            </div>
            {/*  contact us */}
            <div>
              <h1 className={` ${styles.Contact} `}>Contact Us</h1>
              {/* icon */}
              <div
                className={`flex items-center justify-center gap-5 ${styles.icon}`}
              >
                <a
                  href="https://www.facebook.com/your-page-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.facebook.com/your-page-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.facebook.com/your-page-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://www.facebook.com/your-page-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin />
                </a>
              </div>
            </div>
            <div
              className="text-4xl text-green-400



 flex items-center justify-center gap-5 mt-5 mb-2"
            >
              <CiAirportSign1 />
            </div>
            {/* diu */}
            <a href="https://diu.ac/">
              {" "}
              <div className="p-3 text-center bg-gray-100 text-gray-800 rounded-md ">
                <p className={styles.diu}>
                  “Dhaka International University(DIU)”
                </p>
                <p>CSE-D-84</p>
              </div>
            </a>
          </div>

          {/* 2nd column */}
          <div
            className={`col-span-6 flex justify-center items-center ${styles.footerColumn_2}`}
          >
            <div
              className={`flex items-center justify-center gap-5 ${styles.title_2}`}
            >
              <div className="text-center inline gap-2">
                <nav>
                  <p className="pt-2">
                    {" "}
                    <Link className="pt-2 hover:underline" href="#">
                      তাঁত ও বস্ত্র শিল্প
                    </Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">মাটির কাজ ও মৃৎশিল্প</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">বেত ও বাঁশের কাজ</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">Jute Crafts (পাট শিল্প)</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">নকশা ও সেলাই শিল্প</Link>
                  </p>
                  <p className="pt-2 hover:underline    ">
                    {" "}
                    <Link href="#">চামড়া ও লোকশিল্প</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">চিত্র ও আলপনা শিল্প</Link>
                  </p>
                  <p className="pt-2 hover:underline">
                    {" "}
                    <Link href="#">অলঙ্কার শিল্প</Link>
                  </p>
                  <p className="pt-2 hover:underline">
                    {" "}
                    <Link href="#">গ্রামীণ যন্ত্রপাতি</Link>
                  </p>
                </nav>
              </div>

              {/* 2nd column */}
              <div className="text-center inline gap-2">
                <nav>
                  <p className="pt-2">
                    {" "}
                    <Link className="pt-2 hover:underline" href="#">
                      Festivals(উৎসব)
                    </Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">Eid(ঈদ)</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">Puja(পূজা)</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">Vesak(বৌদ্ধ পূর্ণিমা)</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">Christmas(ক্রিসমাস)</Link>
                  </p>
                  <p className="pt-2 hover:underline    ">
                    {" "}
                    <Link href="#">নবান্ন উৎসব</Link>
                  </p>
                  <p className="pt-2 hover:underline  ">
                    {" "}
                    <Link href="#">বিজু (Biju)</Link>
                  </p>
                  <p className="pt-2 hover:underline">
                    {" "}
                    <Link href="#">ঐতিহ্যবাহী খাবার</Link>
                  </p>
                  <p className="pt-2 hover:underline">
                    {" "}
                    <Link href="#">ঐতিহ্যবাহী পোশাক</Link>
                  </p>
                </nav>
              </div>
            </div>
          </div>
          {/* 3rd column */}
          <div className="col-span-3">
            {/* --- */}
            <nav>
              <Link href="/seller">
                {" "}
                <div
                  className={`pt-16 items-center justify-center gap-5 ${styles.title_3}`}
                >
                  <div
                    className={`flex items-center justify-center gap-5 ${styles.title_3} text-6xl`}
                  >
                    <CiCirclePlus />
                  </div>

                  <h1
                    className="flex items-center justify-center gap-5 text-lg p-2 text-black text-center border-radius-4
               border-amber-50 bg-gray-300"
                  >
                    Showcase & Sell Your Product
                  </h1>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* © [2025] Designed & Developed by Team “Scripted Synergy” (DIU). */}
      <div className={styles.copyright}>
        <bold className=" font-bold">© [2026]</bold> Designed & Developed by
        Team “Scripted Synergy” (DIU).
      </div>
    </div>
  );
}
