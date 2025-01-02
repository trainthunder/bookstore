const CampaignPage = () => {
  return <div className="pt-[200px] pb-[30px] bg-[#ffeccf] max-sm:pt-[114px]">
  <div className="flex flex-col gap-5 items-center">
    <div className="flex flex-col items-center p-5">
      <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" src="#" alt="" />
      <h1 className="text-3xl font-extrabold pt-2 text-center sm:text-2xl md:text-3xl lg:text-4xl">สินค้าแลกแต้ม</h1>
    </div>
    <div className="flex flex-col items-center p-5">
      <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" src="#" alt="" />
      <h1 className="text-2xl font-bold pt-2 text-center sm:text-xl md:text-2xl lg:text-3xl">ไม่พบสินค้าแลกแต้ม</h1>
    </div>
  </div>
</div>

};
export default CampaignPage;
