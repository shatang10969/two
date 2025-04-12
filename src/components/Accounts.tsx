import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/imagePath';

const accounts = [
  {
    id: 1,
    name: '天天学农',
    avatar: '/xuenong1.jpeg',
    followers: '90w+',
    link: 'https://v.douyin.com/st5ORJc9gzE/',
    platform: 'douyin'
  },
  {
    id: 2,
    name: '天天学农',
    avatar: '/xuenong2.jpeg',
    followers: '8w+',
    link: 'https://www.xiaohongshu.com/user/profile/63281d1a000000002303843a',
    platform: 'xiaohongshu'
  },
  {
    id: 3,
    name: '天天学园艺',
    avatar: '/yuanyi.jpeg',
    followers: '10w+',
    link: 'https://v.douyin.com/WKyZS_deI_w/',
    platform: 'douyin'
  },
  {
    id: 4,
    name: '不求人',
    avatar: '/buqiuren.jpeg',
    followers: '1100w+',
    link: 'https://v.douyin.com/XAgGlYuvOTs/',
    platform: 'douyin'
  },
  {
    id: 5,
    name: '无敌老瞬爆',
    avatar: '/shunbao.jpeg',
    followers: '700w+',
    link: 'https://v.douyin.com/1Ww9x6b7FMA/',
    platform: 'douyin'
  },
  {
    id: 6,
    name: '王真人',
    avatar: '/wangzhenren.jpeg',
    followers: '150w+',
    link: 'https://v.douyin.com/gboTRGkGI9g/',
    platform: 'douyin'
  }
];

const Accounts = () => {
  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-4">账号案例</h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {accounts.map((account) => (
            <Link 
              href={account.link} 
              key={account.id}
              className="group aspect-square"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-2 md:p-3 flex flex-col items-center justify-between h-full">
                <div className="relative w-14 h-14 md:w-16 md:h-16">
                  <Image
                    src={account.avatar}
                    alt={account.name}
                    fill
                    sizes="(max-width: 768px) 56px, 64px"
                    className="rounded-full object-cover ring-2 ring-purple-100 shadow-lg"
                    priority
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-0.5">
                    {account.platform === 'douyin' && (
                      <img 
                        src={getImagePath("/images/douyin-icon.png")} 
                        alt="抖音图标" 
                        className="w-6 h-6"
                      />
                    )}
                    {account.platform === 'xiaohongshu' && (
                      <img 
                        src={getImagePath("/images/xiaohongshu-icon.png")} 
                        alt="小红书图标" 
                        className="w-6 h-6"
                      />
                    )}
                    <h3 className="font-medium text-[10px] md:text-sm text-center group-hover:text-purple-600 transition-colors">
                      {account.name}
                    </h3>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500">
                    {account.followers} 粉丝
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounts; 