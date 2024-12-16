import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <div className="pt-[200px] flex items-center justify-center">
        <Carousel className="w-[1700px] h-[500px] text-center bg-black">
          <CarouselContent>
            <CarouselItem>5555555555555555555555555555</CarouselItem>
            <CarouselItem>55555555555555555555555555555555555555</CarouselItem>
            <CarouselItem>5555555555555555555555555555555</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center items-center gap-10 pt-[50px]">
        <button className="w-[180px] h-[180px] bg-[#daffd1] rounded-full">
          มังงะ/การ์ตูน
        </button>
        <button className="w-[180px] h-[180px] bg-[#fff8de] rounded-full">
          นิยาย/วรรณกรรม
        </button>
        <button className="w-[180px] h-[180px] bg-[#fdffd6] rounded-full">
          สำหรับเด็ก
        </button>
        <button className="w-[180px] h-[180px] bg-[#ffe9cf] rounded-full">
          นิตยสาร
        </button>
        <button className="w-[180px] h-[180px] bg-[#ffedfe] rounded-full">
          ทั่วไป/อื่นๆ
        </button>
        <button className="w-[180px] h-[180px] bg-[#ffe0e0] rounded-full">
          พรีออเดอร์
        </button>
      </div>
      {/* Daily books */}
      <div className="pb-20 pt-[50px] flex flex-col items-center gap-2 bg-[#e1ffff] mt-[50px] ">
        <h1 className="text-center text-[32px] font-semibold">
          หนังสือออกใหม่ประจำเดือน{" "}
          <span className="text-green-500">ธ.ค. 2567</span>
        </h1>
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-28">
          ดูทั้งหมด
        </button>
      </div>

      {/* TOP 10 books */}
      <div className="flex flex-col justify-center items-center bg-[#fdf6ba] pb-10">
        <h1 className="text-center text-[32px] font-semibold mt-16">
          TOP 10 หนังสือยอดนิยม
        </h1>
        {/* row 1 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
      </div>

      {/* Daily Books */}
      <div className="flex flex-col  justify-center items-center bg-[#ddffda] pb-20">
        <div>
          <h1 className="mt-20 text-3xl font-semibold">แนะนำโดย BookStore</h1>
          <p className="mt-2">มัดรวมมาให้แบบจัดเต็ม</p>
        </div>
        {/* row 1 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-28">
          ดูทั้งหมด
        </button>
      </div>
      {/* ความเคลื่อนไหว */}
      <div className="flex flex-col  justify-center items-center gb-[#ffffff] pb-20">
        <h1 className="mt-20 mb-10 text-3xl font-semibold">ความเคลื่อนไหว</h1>
        <Carousel className="w-[1700px] h-[500px] text-center bg-black">
          <CarouselContent>
            <CarouselItem>5555555555555555555555555555</CarouselItem>
            <CarouselItem>55555555555555555555555555555555555555</CarouselItem>
            <CarouselItem>5555555555555555555555555555555</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-28">
          ดูทั้งหมด
        </button>
      </div>
      {/* Books sale */}
      <div className="flex flex-col justify-center items-center gap-10 pt-[50px] pb-20 bg-[#ffddf2]">
        <h1 className="mt-20 mb-10 text-3xl font-semibold">ลกราคาพิเศษ</h1>
        {/* row 1 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>

        {/* row2 */}
        <div className="flex justify-center items-center gap-10 pt-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img className="w-[230px] h-[300px] bg-black " src="#" alt="" />
            <a className="hover:text-green-500" href="#">
              <p className="text-sm pt-2">type of books</p>
            </a>
            <a className="hover:text-green-500" href="#">
              <h3 className="text-xl">Name of books</h3>
            </a>
            <h1 className="pt-6 pb-2 text-red-700 text-xl font-[650] ">
              199.50 บาท
            </h1>
            <button className="w-[200px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500">
              เพิ่งลงตะกร้า
            </button>
          </div>
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-16">
          ดูทั้งหมด
        </button>
      </div>
    </div>
  );
}
