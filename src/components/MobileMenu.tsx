import React, { useState } from "react";
import { MenuItem } from "@/@type/Menu";
import iconAngleRight from '@/assets/icon-angle-right.svg';
import iconAngleDown from '@/assets/icon-angle-down.svg';

interface MenuProps {
     items: MenuItem[];
     isMobileMenuOpen: boolean;
}

const MobileMenu: React.FC<MenuProps> = ({ items, isMobileMenuOpen }) => {
     const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

     const toggleDropdown = (id: string) => {
          setOpenDropdownId(openDropdownId === id ? null : id);
     };

     return (
          <div className={`block sm:hidden bg-white border-t-2 py-2 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
               }`}>
               <ul className="flex flex-col gap-2">
                    {items?.map((item) => (
                         <li key={item.id} className="relative">
                              <button
                                   onClick={() => toggleDropdown(item.id)}
                                   className="w-full text-left text-gray-800 text-sm font-semibold hover:text-purple-600 flex items-center justify-between py-2"
                              >
                                   <span>{item.title}</span>
                                   {item.items?.length ? (
                                        <img src={openDropdownId === item.id ? iconAngleDown : iconAngleRight} className="w-4 h-4 mt-1 ml-2" alt="Dropdown icon" />
                                   ) : null}
                              </button>

                              {item.items?.length ? (
                                   <ul
                                        className={`transition-all duration-300 overflow-hidden ${openDropdownId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                             }`}
                                   >
                                        {item.items.map((subItem) => (
                                             <li key={subItem.id}>
                                                  <a
                                                       href={subItem.url}
                                                       className="block px-4 py-2 text-gray-700 text-sm hover:text-purple-600"
                                                  >
                                                       {subItem.title}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              ) : null}
                         </li>
                    ))}
                    <div className="flex justify-between items-center border-t-2 pt-2">
                         <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
                         <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
                    </div>
               </ul>
          </div>
     );
}

export default MobileMenu;