import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchMainMenu } from '@/store/menuSlice';
import Menu from "@/components/Menu";
import MobileMenu from "@/components/MobileMenu";
import imgLogo from '@/assets/logo.svg';
import iconHamburger from '@/assets/icon-hamburger.svg';

export default function Header() {
     const dispatch = useDispatch<AppDispatch>();
     const { items, loading, error } = useSelector((state: RootState) => state.menu);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     useEffect(() => {
          dispatch(fetchMainMenu());
     }, [dispatch]);

     const handleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error}</p>;

     return (
          <header>
               <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
                    <div className="bg-white shadow">
                         <div className="container mx-auto px-4">
                              <div className="flex items-center justify-between py-4">
                                   <div>
                                        <img src={imgLogo} alt="React shopify" className="w-[40px] h-[40px]" />
                                   </div>
                                   <Menu items={items} />
                                   <div className="sm:hidden cursor-pointer" onClick={handleMobileMenu}>
                                        <img src={iconHamburger} alt="Mobile menu icon" className="h-10 w-10" />
                                   </div>
                              </div>
                              <MobileMenu items={items} isMobileMenuOpen={isMobileMenuOpen} />
                         </div>
                    </div>
               </div>
          </header>
     );
}