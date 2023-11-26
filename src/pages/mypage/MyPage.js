import SideBar from "../../components/mypage/SideBar";
import VlogNav from "../VlogNav";

const MyPage = () => {
  return (
    <div className="max-w-[1820px] mx-auto h-screen overflow-hidden flex flex-col">
      <header className="p-2 sm:p-6">
        <VlogNav isUserPage={true} />
      </header>
      <div className="grow flex py-8 mb-4  bg-white text-gray-800">
        <SideBar page={"mypage"} />
        <main className="mx-10 border-2	w-full rounded-lg shadow">
          main page 내용 넣기
        </main>
      </div>
    </div>
  );
};

export default MyPage;
