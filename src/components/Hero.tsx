import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-start mb-2">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-0.5 md:mb-1">
              Hi，我是唐俊深
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-1 md:mb-2">
              视频剪辑师
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-0 md:-mb-12 w-full max-w-4xl">
              你好，我是一名视频剪辑师，专注于短视频内容创作与剪辑。擅长通过精心的剪辑和包装提升视频质量，熟悉各大平台的推荐机制和用户喜好。能够独立完成从内容策划、剪辑制作到运营推广的全流程工作。我追求创新和突破，致力于打造有创意、有记忆点的视频内容。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;