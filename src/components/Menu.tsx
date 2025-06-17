import React, { useState } from 'react';
import { MenuItem } from '@/@type/Menu';
import iconCart from '@/assets/icon-cart.svg';
import iconAngleDown from '@/assets/icon-angle-down.svg';

interface MenuProps {
     items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
     const [openDropdownId, setOpenDropdownId] = useState(null);

     const toggleDropdown = (id: any) => {
          setOpenDropdownId(openDropdownId === id ? null : id);
     };

     return (
          <>

               <ul className="hidden sm:flex sm:items-center">
                    {items?.map((item) => (
                         <li key={item.id} className="relative">
                              <button
                                   onClick={() => toggleDropdown(item.id)}
                                   className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 flex items-center focus:outline-none cursor-pointer"
                              >
                                   <span>{item.title}</span>
                                   {item.items?.length ? (
                                        <img src={iconAngleDown} className="w-4 h-4 mt-1 ml-1" alt="Dropdown icon" />
                                   ) : null}
                              </button>

                              {item.items?.length ? (
                                   <ul
                                        className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-10 transform transition-all duration-300 origin-top ${openDropdownId === item.id ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                                             } w-64`}
                                   >
                                        {item.items.map((subItem) => (
                                             <li key={subItem.id}>
                                                  <a
                                                       href={subItem.url}
                                                       className="block px-4 py-2 text-gray-800 text-sm font-semibold hover:text-purple-600"
                                                  >
                                                       {subItem.title}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              ) : null}
                         </li>
                    ))}
               </ul>

               <div className="hidden sm:flex sm:items-center">
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 flex">
                         <img src={iconCart} className="w-6 h-6" alt="Cart icon" /> (0)
                    </a>
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign up</a>
               </div>
          </>

     );
}

export default Menu;