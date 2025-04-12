import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-start mb-2">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="头像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-0.5 md:mb-1">
              Hi，我是唐俊深
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-1 md:mb-2">
              短视频运营
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-0 md:-mb-12 w-full max-w-4xl">
              你好，我是一名短视频运营，专注于内容剪辑与账号成长。擅长通过剪辑方式提升视频质量，熟悉多个主流平台的推荐机制与受众偏好，能独立推进项目，内容策划、剪辑包装、数据复盘到运营执行的完整流程经验，助力账号高效增长。也热衷于不断尝试新的表达方式，力求每一条视频都"有看点、有记忆点"。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;