import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";


function NavSm(){
  return(
    <>
      <div className="text-white flex items-center justify-between">
         <div>
           <h3 className="text-xl font-bold">
            It All Starts Here !
           </h3>

           <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore <BiChevronDown />
           </span>

           <div className="w-8 h-8">
            <button>Use App</button>
            <BiSearch className="w-full h-full"></BiSearch>
           </div>
         </div>
      </div>
    </>
  )
}


function NavMd() {
  return (
    <>
      <div className="w-10 h-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N4_6FnK6MvQg1lQVkWTM6tZPKz81VrGfMQ&s"
          alt="logo"
          className="w-full h-full"
        ></img>
      </div>

      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-9">
          <div className="w-10 h-10 ml-5" >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N4_6FnK6MvQg1lQVkWTM6tZPKz81VrGfMQ&s"
              alt="logo"
              className="w-full h-full"
            ></img>
          </div>

          <div className="w-full flex items-center gap-3  bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events,plays,sports and activites"
            />
          </div>
        </div>


          <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Hospet <BiChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 py-1 text-sm-rounded">
            Sign In{" "}
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full " />{" "}
          </div>
        </div>


      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 p-4 py-3">
        {/* Small Screen Size Navbar*/}

        {/* If the Condtition is satisfied then call NavSm  
        
        'md:hidden' :- It Should be Hidden for any scrren size which is greater than medium.(It's only visiable for small screen size
        */}

        <div className="md:hidden">
          <NavSm />
        </div>

        {/* Medium Screen Size Navbar*/}
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>

        {/* Large Screen Size Navbar*/}
        <div className="hidden md:hidden lg:flex">
          <NavLg/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
