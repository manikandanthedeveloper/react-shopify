import { MenuItem } from "@/@type/Menu";
import React from "react";

interface MenuProps {
     items: MenuItem[];
}

const MobileMenu: React.FC<MenuProps> = ({ items }) => {
     return (
          <div className="block sm:hidden bg-white border-t-2 py-2">
               <div className="flex flex-col">
                    {items?.map((item) => (
                         <a key={item.id} href={item.url} className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">{item.title}</a>
                    ))}
                    <div className="flex justify-between items-center border-t-2 pt-2">
                         <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
                         <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
                    </div>
               </div>
          </div>
     );
}

export default MobileMenu;