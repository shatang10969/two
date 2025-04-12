"use client";

import Footer from '../../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    // 创建临时输入框
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    
    // 选择文本
    input.select();
    input.setSelectionRange(0, 99999);
    
    try {
      // 尝试使用新的 Clipboard API
      navigator.clipboard.writeText(text);
    } catch (err) {
      // 如果失败，使用旧的 execCommand
      document.execCommand('copy');
    }
    
    // 移除临时输入框
    document.body.removeChild(input);
    
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="md:min-h-screen md:flex md:flex-col">
      <div className="min-h-[calc(100vh-64px)] flex flex-col md:min-h-0 md:flex-1">
        <main className="flex-1">
          <div className="px-4 md:px-8 py-4 md:py-16">
            <section className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-2">联系我</h1>
              <p className="text-gray-600 mb-10">期待加入您的团队共事，把想法变为现实！</p>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 md:p-6 shadow-lg border border-purple-100">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center">
                    <div className="relative w-24 h-24 md:w-60 md:h-60">
                      <Image 
                        src="/contact-avatar.png" 
                        alt="唐俊深" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="md:hidden text-left">
                      <h3 className="text-lg font-bold text-purple-900 mb-1">唐俊深</h3>
                      <p className="text-sm text-purple-700">短视频运营</p>
                      <p className="text-xs text-gray-600 mt-1">通过以下方式联系，期待与您共事</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="hidden md:block text-left mb-3">
                      <h3 className="text-xl font-bold text-purple-900 mb-1">唐俊深</h3>
                      <p className="text-purple-700">短视频运营</p>
                      <p className="text-gray-600 text-sm mt-1">通过以下方式联系，期待与您共事</p>
                    </div>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div 
                        className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-sm cursor-pointer hover:bg-white transition-colors"
                        onClick={() => copyToClipboard('1019016072@qq.com', 'email')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-base md:text-lg text-purple-900">1019016072@qq.com</span>
                      </div>
                      
                      <div 
                        className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-sm cursor-pointer hover:bg-white transition-colors"
                        onClick={() => copyToClipboard('15876764413', 'phone')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-base md:text-lg text-purple-900">15876764413</span>
                      </div>
                      
                      <div 
                        className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-sm cursor-pointer hover:bg-white transition-colors"
                        onClick={() => copyToClipboard('Tudou10969', 'wechat')}
                      >
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-purple-600 mr-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M767.818667 409.173333C867.338667 444.266667 938.666667 539.136 938.666667 650.666667c0 42.709333-10.496 83.978667-30.261334 120.842666-1.792 3.338667-4.992 8.928-9.696 16.96l14.613334 53.557334c6.506667 23.893333-15.402667 45.813333-39.296 39.296l-53.642667-14.634667-6.229333 3.669333A254.933333 254.933333 0 0 1 682.666667 906.666667c-77.994667 0-147.84-34.88-194.805334-89.888a352.608 352.608 0 0 1-56.64 4.554666c-63.338667 0-124.266667-16.853333-177.472-48.298666-1.834667-1.088-6.410667-3.733333-13.632-7.893334l-80.544 21.653334c-23.914667 6.432-45.76-15.573333-39.146666-39.434667l21.792-78.752a961.205333 961.205333 0 0 1-15.904-27.317333A336.384 336.384 0 0 1 85.333333 480c0-188.618667 154.965333-341.333333 345.888-341.333333 159.914667 0 297.984 108.010667 335.818667 259.296 0.949333 3.765333 1.173333 7.552 0.778667 11.2z m-68.106667-13.952C662.88 282.037333 555.178667 202.666667 431.221333 202.666667 275.434667 202.666667 149.333333 326.933333 149.333333 480c0 46.272 11.498667 90.837333 33.194667 130.698667 2.88 5.290667 10.176 17.706667 21.621333 36.746666a32 32 0 0 1 3.413334 25.013334l-10.517334 37.994666 39.232-10.549333a32 32 0 0 1 24.234667 3.146667c14.272 8.192 22.773333 13.098667 25.802667 14.890666A283.882667 283.882667 0 0 0 431.221333 757.333333c6.154667 0 12.288-0.192 18.389334-0.576A255.061333 255.061333 0 0 1 426.666667 650.666667c0-141.386667 114.613333-256 256-256 5.728 0 11.413333 0.192 17.045333 0.554666z m133.706667 397.056a32 32 0 0 1 3.338666-24.725333 996.672 996.672 0 0 0 15.242667-26.293333A190.997333 190.997333 0 0 0 874.666667 650.666667c0-106.037333-85.962667-192-192-192s-192 85.962667-192 192 85.962667 192 192 192a190.933333 190.933333 0 0 0 98.570666-27.2c2.208-1.322667 8.288-4.874667 18.517334-10.837334a32 32 0 0 1 24.522666-3.210666l12.565334 3.424-3.424-12.565334zM330.666667 426.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m192 0a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m85.333333 202.666666a32 32 0 1 1 0-64 32 32 0 0 1 0 64z m149.333333 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z" fill="currentColor"/>
                        </svg>
                        <span className="text-base md:text-lg text-purple-900">Tudou10969</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {copied && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                  已复制{copied === 'email' ? '邮箱' : copied === 'phone' ? '手机号' : '微信号'}
                </div>
              )}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}