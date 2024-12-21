const AboutPage = () => {
  return (
    <div className="pt-[200px] flex flex-col items-center justify-center">
      <div className="text-center mb-10 text-[45px] font-semibold">
        <p className="text-3xl font-semibold mb-5">เกี่ยวกับเรา</p>
        <p>เราคือ <span className="text-green-500">“ผู้เชี่ยวชาญ”</span> ในการแปล</p>
        <p>และจัดพิมพ์หนังสือการ์ตูนญี่ปุ่นฉบับไทย</p>
      </div>
      <div className="w-[1080px] text-center flex flex-col justify-center items-center mb-24 bg-gradient-to-b from-[#e6fce8] to-white">
        <img
          className="w-[500px] h-[300px]  "
          src="app/about/img/aboutPic.webp"
          alt=""
        />
        <h1 className="mt-14 text-green-500 text-3xl font-bold pb-5">
          บริษัท BookStoer จำกัด
        </h1>
        <p className="text-[#808180] pr-[200px] pl-[200px]">
          ประกอบด้วยกลุ่มผู้จัดพิมพ์มืออาชีพที่มีประสบการณ์หลายปีในอุตสาหกรรมการ์ตูน
          อย่างไรก็ตามบริษัทสิ่งพิมพ์ของเรายังมีความสามารถในการเผยแพร่สื่อสิ่งพิมพ์ประเภทต่างๆ
          เช่น ตําราเรียน นวนิยาย การ์ตูน เบราว์เซอร์ ฯลฯ
          เราพยายามที่จะขยายสายการเผยแพร่ของเรา
        </p>
      </div>
      {/* row 1 */}
      <div className="flex flex-row  mb-10">
        <div className="text-center pr-14">
          <h3>ปีที่ก่อตั้ง</h3>
          <p className="text-2xl font-medium text-green-500 ">
            10 ธันวาคม 2567
          </p>
        </div>
        <div className=" text-center border-r-2 border-l-2 pl-14 pr-14">
          <h3>ประธาน</h3>
          <p className="text-2xl font-medium text-green-500 ">
            นาย qqqqqqq wwwwwww
          </p>
        </div>
        <div className=" text-center pl-14 pr-14">
          <h3>จำนวนพนักงาน</h3>
          <p className="text-2xl font-medium text-green-500 ">20</p>
        </div>
      </div>
      {/* row2  */}
      <div className="flex flex-row  ">
        <div className=" text-center pl-14 pr-14 border-r-2">
          <h3>ประเภทธุระกิจ</h3>
          <p className="text-2xl font-medium text-green-500 ">
            จัดพิมพ์ แปล และ
            <br />
            จัดจำหน่ายสื่อสิ่งพิมพ์
          </p>
        </div>
        <div className=" text-center pl-14 pr-14">
          <h3>ที่ปรึกษา</h3>
          <p className="text-2xl font-medium text-green-500 ">
            นาย วชิโรดล ทองเนตร <br />
            (ผู้ช่วยทำเว็บไซต์)
          </p>
        </div>
      </div>
      {/* 4 point */}
      <h1 className="mt-20 mb-20 text-3xl font-semibold">คุณสมบัติของเรา</h1>

      <div className="flex bg-gradient-to-b from-[#e6fce8] to-white">
        <div className="flex flex-col justify-center items-center w-[270px] h-[420px] pr-5 pl-5 hover:bg-[#fcfcfc] transition-transform duration-300 transform hover:-translate-y-8 ">
          <img className="w-[170px] h-[170px]" src="#" alt="" />
          <div className="text-center">
            <h1 className="mt-2 mb-2">กลุ่มเป้าหมายที่ชัดเจน</h1>
            <p>
              กลุ่มเป้าหมายหลักของเรา(80%) เป็นผู้ชาย อายุระหว่าง 13 ถึง 35ปี
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[270px] h-[420px] pr-5 pl-5 hover:bg-[#fcfcfc] transition-transform duration-300 transform hover:-translate-y-8">
          <img className="w-[170px] h-[170px]" src="#" alt="" />
          <div className="text-center">
            <h1 className="mt-2 mb-2">การแปลที่เหมาะสม</h1>
            <p>
              ความสามารถในการแปลเป็นภาษาไทยได้ย่างเหมาะสมทั้งถูกต้องตามหลักไวยากรณ์และถูกต้องตามวัฒนธรรม
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[270px] h-[420px] pr-5 pl-5 hover:bg-[#fcfcfc] transition-transform duration-300 transform hover:-translate-y-8 ">
          <img className="w-[170px] h-[170px]" src="#" alt="" />
          <div className="text-center">
            <h1 className="mt-2 mb-2">
              การจัดจำหน่าย
              <br />
              และการพิมพ์
            </h1>
            <p>บริษัทมีระบบการพิมพ์และการจัดจำหน่ายเป็นของตนเอง</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[270px] h-[420px] pr-5 pl-5 hover:bg-[#fcfcfc] transition-transform duration-300 transform hover:-translate-y-8 ">
          <img className="w-[170px] h-[170px]" src="#" alt="" />
          <div className="text-center">
            <h1 className="mt-2 mb-2">การบริหารลูกค้าสัมพันธ์ (CRM)</h1>
            <p>
              บริษัทมีแผนลงทุนระบบสมาชิกเว็บไซต์และจัดกิจกรรมพิเศษเปิดตัวหนังสือเล่มใหม่
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
