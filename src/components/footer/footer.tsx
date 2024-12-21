import "boxicons/css/boxicons.min.css";

const footer = () => {
  return (
    <footer className="w-full h-full bg-[#bbff66]">
      <h1 className="text-center text-4xl font-bold mb-10 pt-10 ">มาร่วมกลุ่มกับเราที่นี่</h1>

      <div className="flex justify-center gap-96 mb-12 pb-12 items-center border-b-2 border-[#b4f662] w-1/2 mx-auto ">
        <div className="flex justify-center items-center">
        <i className='bx bxs-envelope mr-4 text-[50px] ' ></i>
          <div>
            <h1 className="text-2xl">ส่งข้อความ</h1>
            <p className="text-sm">Bookstore@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
        <i className='bx bxl-facebook-circle mr-4 text-[50px] '></i>
          <div>
            <h1 className="text-2xl">ถูกใจ</h1>
            <p className="text-sm">Bookstore</p>
          </div>    
        </div>

        <div className="flex justify-center items-center">
        <i className='bx bxl-twitter mr-4 text-[50px] '></i>
        
          <div>
            <h1 className="text-2xl">ถูกใจ</h1>
            <p className="text-sm">@BookstoreOffcial</p>
          </div> 
        </div>
      </div>
        <div className="flex flex-row gap-10 items-center justify-center text-[10.25px] pb-10 ">
          <p className="text-[#859570]">© 2567 Bookstore Co., Ltd. All rights reserved</p>  
          <div className="flex gap-10">
            <a href="#">ข้อจำกัดและเงื่อนไขการใช้งาน</a>
            <a href="#">นโยบายความเป็นส่วนตัว</a>
            <a href="#">นโยบายการใช้งานคุกกี้</a>
          </div>
        </div>
      
    </footer>
  );
};

export default footer;
