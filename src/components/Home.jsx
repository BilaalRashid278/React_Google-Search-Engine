import React from 'react'
import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
      <div className="flex h-[100vh] flex-col">
        <HomeHeader/>
        <main className="flex grow justify-center">
            <div className="w-full px-5 flex flex-col items-center mt-16">
                <img className="w-[200px]  md:w-[280px] mb-5" src={Logo} alt="Google Imgae" />
                <SearchInput/>
                <div className="flex gap-2 text-[#3c4043] mt-8">
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                        Google Search
                    </button>
                    <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                        I'm Feeling Lucky
                    </button>
                </div>
            </div>
        </main>
        <Footer/>
      </div>
    );
};

export default Home;

