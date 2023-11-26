import SideBar from "../../components/mypage/SideBar";
import VlogNav from "../VlogNav";

const TotalPage = () => {
  return (
    <div className="max-w-[1820px] mx-auto h-screen flex flex-col">
      <header className="p-2 sm:p-6">
        <VlogNav isUserPage={true} />
      </header>
      <div className="grow flex py-8 mb-4  bg-white text-gray-800">
        <SideBar page={"total"} />
        <main className="mx-10 border-2	w-full rounded-lg shadow">
          전체 로그보기
        </main>
      </div>
    </div>
  );
};

export default TotalPage;
