import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const [searchQuery,setSerachQuery] = useState("");
  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#daa0a6" />
      <input
        type="text"
        onChange={(e) => {return setSerachQuery(e.target.value)}}
        onKeyUp={(e) => console.log(e.target.value)}
        value={searchQuery}
        autoFocus
        className="grow outline-none text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
            <IoMdClose size={24} color="#70757a" className="cursor-pointer" onClick={()=>{setSerachQuery("")}}/>
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="Mic" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="Serach Images" />
      </div>
    </div>
  );
};

export default SearchInput;
