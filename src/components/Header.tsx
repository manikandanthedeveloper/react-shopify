import Menu from "./Menu"
import MobileMenu from "./MobileMenu";
import imgLogo from '../assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { useEffect } from 'react';
import { fetchMainMenu } from '../store/menuSlice';

export default function Header() {
     const dispatch = useDispatch<AppDispatch>();
     const { items, loading, error } = useSelector((state: RootState) => state.menu);

     useEffect(() => {
          dispatch(fetchMainMenu());
     }, [dispatch]);

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
                              </div>
                              <MobileMenu items={items} />
                         </div>
                    </div>
               </div>
          </header>
     );
}