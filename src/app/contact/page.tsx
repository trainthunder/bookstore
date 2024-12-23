const ContactPage = () => {
  return (
    <div className="pt-[165px] flex justify-center items-center gap-[150px] bg-[#eff6f3]">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 ">
          <i className="bx bxs-message-square-dots bx-flip-horizontal text-green-500 text-6xl"></i>
          <h3 className="text-3xl font-semibold">ติดต่อเรา</h3>
        </div>
        <h1 className="text-[55px] text-green-500 font-semibold pb-4 pt-4">
          บริษัท บุ๊คสโตร์ จำกัด
        </h1>
        <div className="flex flex-col justify-center">
          <div className="flex gap-2">
            <i className="bx bx-map-alt text-2xl"></i>
            <h2 className="text-xl">99/99 หมู่9 ประเทศไทย 99999</h2>
          </div>
          <div className="flex gap-2">
            <i className="bx bx-calendar text-2xl"></i>
            <h2 className="text-xl">จันทร์-ศุกร์ 09.00-17.00 น.</h2>
          </div>
          <div className="flex gap-2">
            <i className="bx bx-phone text-2xl"></i>
            <div className="flex flex-col">
              <h2 className="text-xl">โทรศัพท์</h2>
              <div className="text-xl text-green-500">
                <p>090-000-0000</p>
                <p>091-111-1111</p>
                <p>092-222-2222</p>
              </div>
            </div>
          </div>

          <button className="bg-black w-[170px] h-[45px] rounded-full mt-10 text-white text-[18px]">
            ขอเส้นทาง <i className="bx bxs-navigation"></i>
          </button>
        </div>
      </div>

      <div>
        <img
           className="w-[650px] h-[600px] rounded-full border-4 border-black"
          src="#"
          alt=""
        />
      </div>
    </div>
  );
};
export default ContactPage;
