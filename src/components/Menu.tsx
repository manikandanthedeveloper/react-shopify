import iconHamburger from '../assets/icon-hamburger.svg';
import iconCart from '../assets/icon-cart.svg';
import React from 'react';
import { MenuItem } from '@/@type/Menu';

interface MenuProps {
     items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {

     return (
          <>
               <div className="hidden sm:flex sm:items-center">
                    {items?.map((item) => (
                         <a key={item.id} href={item.url} className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">{item.title}</a>
                    ))}
               </div>
               <div className="hidden sm:flex sm:items-center">
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 flex"><img src={iconCart} className='w-6 h-6' alt='Cart icon' /> (0)</a>
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign up</a>
               </div>

               <div className="sm:hidden cursor-pointer">
                    <img src={iconHamburger} alt="Menu icon" className="h-10 w-10" />
               </div>
          </>
     );
}

export default Menu;