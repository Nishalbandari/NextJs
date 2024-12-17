import logo from "../../public/logo.png";
import profile from "../../public/profile.png";
import Image from "next/image";

interface HeaderProps {
  isMobile: boolean;
  toggleSidebar: () => void;
}

const Header = ({ isMobile, toggleSidebar }: HeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-4 lg:px-8 bg-blue-600"
        aria-label="Global"
      >
        <div className="flex">
          <Image src={logo} alt="Logo" width={32} height={32} />
        </div>
        <div className="flex">
          <Image
            className="h-8 w-auto"
            src={profile}
            alt="Profile"
            width={32}
            height={32}
          />
        </div>
      </nav>
      <section className="w-full h-20 bg-slate-100 flex items-center justify-center">
        <div className="w-[29rem] flex">
          <div className="px-2 flex justify-end items-end text-black text-2xl  hover:text-gray-300 focus:outline-none">
            {isMobile && <button onClick={toggleSidebar}>☰</button>}
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-800 mb-1 border-blue-700">
              Search CV
            </h3>
            <div className="flex">
              <div className="flex items-center space-x-2 w-full">
                <input
                  type="text"
                  placeholder="Experience in Hyderabad"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="!px-5 !py-2 !font-semibold text-sm bg-gradient-to-r from-blue-500 to-green-500 !text-white rounded-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
