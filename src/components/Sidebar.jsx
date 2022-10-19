import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from "react-icons/hi";

import { logo2 } from "../assets";

import { links } from "../assets/constants";



//for mobile or small screen devices
const NavLinks = ({ handleClick }) => (
        <div className="mt-10">
            {links.map((item) => (
              <NavLink key={item.name} to={item.to} 
               className="flex flex-row justify-start items-center
              my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
              onClick={() => handleClick &&  handleClick()} >
              <item.icon className="w-6 h-6 mr-2 " />
                {item.name}
              </NavLink>
            ))}
        </div>
 )


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 
      bg-[#191624]">
         <img src={logo2} alt='logo' className="w-full h-16 object-contain"/>
         <h3 className="text-white ml-14 font-semibold p-3">Soundli</h3>
         <NavLinks />
      </div>

      {/* Mobile menu || sidebar*/}
      <div className="absolute md:hidden block top-6 right-6">
         {mobileMenuOpen ? (
          <RiCloseLine onClick={() => setMobileMenuOpen(false)}
          className="w-6 h-6 text-white mr-2 "/>
         ) : <HiOutlineMenu onClick={() => setMobileMenuOpen(true)}
         className="w-6 h-6 text-white mr-2 "/>}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 
      bg-gradient-to-tl from-white/10 to-[#483d8b] 
      backdropbackdrop-blur-lg z-10 p-6 md:hidden 
      smooth-transition ${mobileMenuOpen ? 'left-0': 'left-full'}`}>
         <img src={logo2} alt='logo' className="w-full h-14 object-contain"/>
         <h3 className="text-white font-semibold p-3 ml-16">Soundli</h3>
         <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  )
};

export default Sidebar;
