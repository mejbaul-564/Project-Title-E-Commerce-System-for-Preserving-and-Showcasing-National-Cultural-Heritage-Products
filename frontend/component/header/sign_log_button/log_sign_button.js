"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";

export default function RedirectButton() {
  const [showSelects, setShowSelects] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef();

  const handleRedirect = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(value);
      setShowSelects(false); // Close popup after redirect
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSelects(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-center">
      <button
        className=" text-white px-4 py-2 rounded  transition flex items-center"
        onClick={() => setShowSelects(!showSelects)}
      >
        <VscAccount className="text-white text-2xl" />
        <span className="text-white px-2 py-1 rounded-md hover:bg-white/20 cursor-pointer">
          Login / Signup
        </span>
      </button>

      {showSelects && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 bg-white border rounded shadow-lg p-2 flex flex-col gap-2 z-50 w-48"
        >
          <div
            className="border rounded px-2 py-1 cursor-pointer hover:bg-gray-400"
            onClick={() => router.push("/signup")}
          >
            Login
           
          </div>
{/* 2 */}
          <div
            className="border rounded px-2 py-1 cursor-pointer hover:bg-gray-400"
            onClick={() => router.push("/signup")}
          >
            Signup
           
          </div>


        </div>
      )}
    </div>
  );
}