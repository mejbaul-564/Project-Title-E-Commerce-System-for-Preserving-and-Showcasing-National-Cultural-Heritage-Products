import Image from "next/image";
import ProductCardStyle from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <main>
      <div
        className={
          ProductCardStyle.card +
          " rounded-lg shadow-lg p-4 pl-4 pt-4 pb-4 border border-gray-300 bg-white"
        }
      >
        {/* first line */}
        <div className="flex items-center gap-6">
          {/* first product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center w-full">
                  <Image
                    src="/uploadProduct/10-1.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    
                    className="object-contain w-full h-auto"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/10-2.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain w-full h-auto"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/10-3.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                    src="/uploadProduct/10-1.jpg"
                  alt="Basket"
                  width={250}
                  height={250}
                    className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 2 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/19-1.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain w-full h-auto"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/19-2.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain w-full h-auto"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/19-3.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center ">
                <Image
                    src="/uploadProduct/19-1.jpg"
                    
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 3 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/6-1.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                  className="object-contain "
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/6-2.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain "
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/6-3.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain  "
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/uploadProduct/6-1.jpg"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain  "
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves 
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 4 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                  src="/uploadProduct/15-1.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                  src="/uploadProduct/15-2.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/uploadProduct/15-3.jpg"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/uploadProduct/15-1.jpg"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>
        </div>
{/* 1st line */}
        <div className="p-3">  </div>

        {/* 2nd line */}
        <div className="flex items-center gap-6">
          {/* first product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 2 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 3 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 4 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 2nd line */}
                <div className="p-3">  </div>

        {/* 3rd line */}
        <div className="flex items-center gap-6">
          {/* first product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 2 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 3 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 4 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3rd line */}
        <div className="p-3">  </div>
        {/* 4rd line */}
        <div className="flex items-center gap-6">
          {/* first product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 2 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 3 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>

          {/* 4 product */}
          <div className="w-[320px] bg-[#e9f2f7] border border-blue-200 rounded-md p-3">
            {/* Top Section */}
            <div className="grid grid-cols-4 gap-2">
              {/* Left Small Icons */}
              <div className="flex flex-col gap-2">
                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-[#cce3f2] border rounded-md p-3 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white border rounded-md p-2 flex justify-center items-center">
                  <Image
                    src="/card-seller.png"
                    alt="basket small"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="col-span-3 bg-white border rounded-md p-3 flex justify-center items-center">
                <Image
                  src="/card-seller.png"
                  alt="Basket"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Title */}
            <div className="mt-3 text-center font-semibold text-gray-700">
              Basket made of woven vine leaves
            </div>

            {/* Price & Button */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-200 rounded-md py-3 text-center font-semibold">
                Price : 200
              </div>

              <button className="bg-gray-300 rounded-md py-3 font-semibold hover:bg-gray-400 transition">
                BUY
                <div className="text-xs font-normal text-gray-600">
                  Add to card first
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 4th line end */}
        

        {/* End  categories items */}
        {/* pagination */}

        {/* pagination */}
      </div>
    </main>
  );
}
