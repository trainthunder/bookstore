import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const categories = [
    { text: "มังงะ/การ์ตูน", bgColor: "#daffd1" },
    { text: "นิยาย/วรรณกรรม", bgColor: "#fff8de" },
    { text: "สำหรับเด็ก", bgColor: "#fdffd6" },
    { text: "นิตยสาร", bgColor: "#ffe9cf" },
    { text: "ทั่วไป/อื่นๆ", bgColor: "#ffedfe" },
    { text: "พรีออเดอร์", bgColor: "#ffe0e0" },
  ];

  return (
    <div className="pt-[200px]">
      <div className="flex flex-wrap items-center justify-center">
      <Carousel className="w-full max-w-[90%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] text-center border-[1px] border-black">
    <CarouselContent>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
    </CarouselContent>
    <CarouselPrevious className=" max-lg:hidden max-md:hidden max-sm:hidden" />
    <CarouselNext className="max-lg:hidden max-md:hidden max-sm:hidden"/>
  </Carousel>
      </div>

      {/* type of book */}
      <div className="flex justify-center items-center gap-10 pt-[50px] overflow-x-auto px-4">
  <div className="flex flex-nowrap space-x-4">
    {categories.map((category, index) => (
      <button
        key={index}
        className="w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full text-center flex justify-center items-center"
        style={{ backgroundColor: category.bgColor }}
      >
        <span className="text-xs sm:text-sm md:text-base lg:text-lg">{category.text}</span>
      </button>
    ))}
  </div>
</div>



      {/* Daily books */}
      <div className="pb-20 pt-[50px] flex flex-col items-center gap-2 bg-[#e1ffff] mt-[50px] ">
        <h1 className="text-center text-[32px] font-semibold">
          หนังสือออกใหม่ประจำเดือน{" "}
          <span className="text-green-500">ธ.ค. 2567</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 pt-[50px] max-w-[1300px] mx-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-[1_1_calc(10%-5px)]"
            >
              <img className="w-[230px] h-[300px]" src="#" alt="" />
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
          ))}
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
        <div className="flex flex-wrap justify-center items-center gap-4 pt-[50px] max-w-[1300px] mx-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-[1_1_calc(10%-5px)]"
            >
              <img className="w-[230px] h-[300px]" src="#" alt="" />
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
          ))}
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-28">
          ดูทั้งหมด
        </button>
      </div>

      {/* Daily Books */}
      <div className="flex flex-col  justify-center items-center bg-[#ddffda] pb-20">
        <div>
          <h1 className="mt-20 text-3xl font-semibold">แนะนำโดย BookStore</h1>
          <p className="mt-2">มัดรวมมาให้แบบจัดเต็ม</p>
        </div>
        {/* row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-[50px] max-w-[1300px] mx-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-[1_1_calc(10%-5px)]"
            >
              <img className="w-[230px] h-[300px]" src="#" alt="" />
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
          ))}
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-28">
          ดูทั้งหมด
        </button>
      </div>
      {/* ความเคลื่อนไหว */}
      <div className="flex flex-col justify-center items-center bg-[#ffffff] pb-20">
  <h1 className="mt-20 mb-10 text-xl font-semibold sm:text-2xl md:text-3xl">
    ความเคลื่อนไหว
  </h1>
  <Carousel className="w-full max-w-[90%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] text-center border-[1px] border-black">
    <CarouselContent>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
      <CarouselItem></CarouselItem>
    </CarouselContent>
    <CarouselPrevious className="max-lg:hidden max-md:hidden max-sm:hidden " />
    <CarouselNext className="max-lg:hidden max-md:hidden max-sm:hidden"/>
  </Carousel>
  <button className="w-[120px] h-[40px] bg-black text-white rounded-3xl hover:bg-green-500 mt-20 sm:w-[140px] sm:h-[50px]">
    ดูทั้งหมด
  </button>
</div>

      {/* Books sale */}
      <div className="flex flex-col justify-center items-center gap-10 pt-[50px] pb-20 bg-[#ffddf2]">
        <h1 className="mt-20 mb-10 text-3xl font-semibold">ลกราคาพิเศษ</h1>
        {/* row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-[50px] max-w-[1300px] mx-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center flex-[1_1_calc(10%-5px)]"
            >
              <img className="w-[230px] h-[300px]" src="#" alt="" />
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
          ))}
        </div>
        <button className="w-[140px] h-[50px] bg-black text-white rounded-3xl hover:bg-green-500 mt-16">
          ดูทั้งหมด
        </button>
      </div>
    </div>
  );
}
