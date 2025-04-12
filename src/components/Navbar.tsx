"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Video, 
  Palette, 
  Mail,
} from 'lucide-react'
import { getImagePath } from '@/utils/imagePath';

const navItems = [
  { name: '首页', href: '/', icon: Home },
  { name: '关于', href: '/about', icon: User },
  { name: '视频', href: '/projects', icon: Video },
  { name: '设计', href: '/designs', icon: Palette },
  { name: '联系', href: '/contact', icon: Mail },
]

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <>
      {/* 桌面端导航栏 */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 p-6 flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse opacity-20"></div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-200 shadow-md relative z-10">
              <img 
                src={getImagePath("/images/avatar.jpg")} 
                alt="头像" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">唐俊深</h1>
            <p className="text-lg text-gray-600">短视频运营</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2.5 bg-green-50 px-5 py-2 rounded-full border border-green-100">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-[ping_3s_ease-in-out_infinite] opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_3s_ease-in-out_infinite] relative z-10"></div>
              </div>
              <span className="text-green-700 text-base font-medium">求职中</span>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2 w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-base ${
                  isActive
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-base">{item.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-600 justify-center">
          </div>
        </div>
      </nav>

      {/* 移动端顶部导航栏 */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-2 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse opacity-20"></div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-200 shadow-sm relative z-10">
                <img 
                  src={getImagePath("/images/avatar.jpg")} 
                  alt="头像" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bold text-base">唐俊深</h1>
              <span className="text-sm text-gray-600">· 短视频运营</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-[ping_3s_ease-in-out_infinite] opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_3s_ease-in-out_infinite] relative z-10"></div>
              </div>
              <span className="text-green-700 text-sm font-medium">求职中</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端底部导航栏 */}
      <nav className="md:hidden fixed bottom-15 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 flex justify-around items-center p-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-1.5 rounded-full transition-colors ${
                  isActive
                    ? 'text-purple-600'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* 为移动端导航栏添加占位空间 */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;