const AboutPage = () => {
  return (
    <div className="pt-[200px] flex flex-col items-center justify-center max-lg:pt-[120px]">
      <div className="text-center mb-10 text-[45px] font-semibold">
        <p className="text-3xl font-semibold mb-5 max-lg:text-xl">
          เกี่ยวกับเรา
        </p>
        <p className="pr-[500px] pl-[500px] max-md:text-2xl max-lg:px-56">
          เราคือ <span className="text-green-500">“ผู้เชี่ยวชาญ”</span>{" "}
          ในการแปลและจัดพิมพ์หนังสือการ์ตูนญี่ปุ่นฉบับไทย
        </p>
      </div>
      <div className="w-[1080px] max-lg:w-[700px] text-center flex flex-col justify-center items-center mb-24 bg-gradient-to-b from-[#e6fce8] to-white">
        <img
          className="w-[500px] h-[300px]  "
          src="app/about/img/aboutPic.webp"
          alt=""
        />
        <h1 className="mt-14 text-green-500 text-3xl font-bold pb-5 max-md:text-xl">
          บริษัท BookStoer จำกัด
        </h1>
        <p className="text-[#808180] pr-[200px] pl-[200px] max-md:text-sm">
          ประกอบด้วยกลุ่มผู้จัดพิมพ์มืออาชีพที่มีประสบการณ์หลายปีในอุตสาหกรรมการ์ตูน
          อย่างไรก็ตามบริษัทสิ่งพิมพ์ของเรายังมีความสามารถในการเผยแพร่สื่อสิ่งพิมพ์ประเภทต่างๆ
          เช่น ตําราเรียน นวนิยาย การ์ตูน เบราว์เซอร์ ฯลฯ
          เราพยายามที่จะขยายสายการเผยแพร่ของเรา
        </p>
      </div>
      {/* about us */}
      <div className="flex flex-wrap flex-col sm:flex-row mb-10 gap-y-6 sm:gap-y-0">
        <div className="flex flex-col justify-start gap-5 text-center w-full sm:w-1/5 px-4">
          <h3>ปีที่ก่อตั้ง</h3>
          <p className="text-2xl font-medium text-green-500 max-lg:text-[16px]">
            10 ธันวาคม 2567
          </p>
        </div>

        <div className="flex flex-col justify-start gap-5 text-center w-full sm:w-1/5 sm:border-r-2 sm:border-l-2 px-4 ">
          <h3>ประธาน</h3>
          <p className="text-2xl font-medium text-green-500  max-lg:text-[16px]">
            นาย qqqqqqq wwwwwww
          </p>
        </div>

        <div className="flex flex-col justify-start gap-5 text-center w-full sm:w-1/5 px-4 border-r-2">
          <h3>จำนวนพนักงาน</h3>
          <p className="text-2xl font-medium text-green-500  max-lg:text-[16px]">
            20
          </p>
        </div>

        <div className="flex flex-col justify-start gap-5 text-center w-full sm:w-1/5 sm:border-r-2 px-4">
          <h3>ประเภทธุระกิจ</h3>
          <p className="text-2xl font-medium text-green-500  max-lg:text-[16px]">
            จัดพิมพ์ แปล และ
            <br />
            จัดจำหน่ายสื่อสิ่งพิมพ์
          </p>
        </div>

        <div className=" flex flex-col justify-start gap-5 text-center w-full sm:w-1/5 px-4">
          <h3>ที่ปรึกษา</h3>
          <p className="text-2xl font-medium text-green-500  max-lg:text-[16px]">
            นาย วชิโรดล ทองเนตร <br />
            (ผู้ช่วยทำเว็บไซต์)
          </p>
        </div>
      </div>

      {/* 4 point */}
      <h1 className="my-8 text-3xl font-semibold max-lg:text-2xl">
        คุณสมบัติของเรา
      </h1>

      <div className="flex flex-wrap justify-center bg-gradient-to-b from-[#e6fce8] to-white">
        {[
          {
            title: "กลุ่มเป้าหมายที่ชัดเจน",
            description:
              "กลุ่มเป้าหมายหลักของเรา (80%) เป็นผู้ชายอายุระหว่าง 13 ถึง 35 ปี",
            imgSrc: "#",
          },
          {
            title: "การแปลที่เหมาะสม",
            description:
              "ความสามารถในการแปลเป็นภาษาไทยได้อย่างเหมาะสมทั้งถูกต้องตามหลักไวยากรณ์และถูกต้องตามวัฒนธรรม",
            imgSrc: "#",
          },
          {
            title: "การจัดจำหน่ายและการพิมพ์",
            description: "บริษัทมีระบบการพิมพ์และการจัดจำหน่ายเป็นของตนเอง",
            imgSrc: "#",
          },
          {
            title: "การบริหารลูกค้าสัมพันธ์",
            description:
              "บริษัทมีแผนลงทุนระบบสมาชิกเว็บไซต์และจัดกิจกรรมพิเศษเปิดตัวหนังสือเล่มใหม่",
            imgSrc: "#",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full sm:w-[300px] md:w-[270px] h-auto sm:h-[420px] px-6 my-4 sm:my-6 hover:bg-[#fcfcfc] transition-transform duration-300 transform hover:-translate-y-4"
          >
            <img
              className="w-[100px] sm:w-[150px] md:w-[170px] h-[100px] sm:h-[150px] md:h-[170px] my-6"
              src={item.imgSrc}
              alt={item.title}
            />
            <div className="text-center my-1">
              <h1 className="text-[17px] max-sm:text-xl font-bold text-gray-800 my-3 ">
                {item.title}
              </h1>
              <h2 className="text-[14px] max-sm:text-base text-gray-600 my-2 leading-relaxed">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default AboutPage;
