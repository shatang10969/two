import Image from 'next/image';
import { getImagePath } from '@/utils/imagePath';

const Skills = () => {
  const skills = [
    {
      icon: "/images/skills/video.svg",
      title: '短视频运营',
      description: '负责账号内容规划与数据分析，提升播放量与用户互动，推动账号稳定增长。'
    },
    {
      icon: "/images/skills/edit.svg",
      title: '剪辑拍摄',
      description: '独立完成拍摄与剪辑，节奏把控精准，强化内容吸引力与视觉表现力。'
    },
    {
      icon: "/images/skills/design.svg",
      title: '平面设计',
      description: '输出封面、海报等视觉物料，风格统一，增强品牌辨识度与点击转化。'
    },
    {
      icon: "/images/skills/live.svg",
      title: '直播搭建',
      description: '搭建直播场景与灯光布置，确保画面稳定美观，提升直播专业度与观看体验。'
    }
  ];

  const softwareSkills = [
    { name: '剪映', logo: '/images/software/剪映.webp' },
    { name: 'PS', logo: '/images/software/PS.webp' },
    { name: 'PR', logo: '/images/software/PR.webp' },
    { name: 'AE', logo: '/images/software/AE.webp' },
    { name: 'DaVinci', logo: '/images/software/DaVinci.webp' },
    { name: 'Midjourney', logo: '/images/software/Midjourney.webp' }
  ];

  return (
    <section className="py-8 md:py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">技能专长</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center pl-4">
                  <img 
                    src={getImagePath(skill.icon)} 
                    alt={skill.title} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 md:text-lg text-base">{skill.title}</h3>
                  <p className="text-gray-600 text-sm md:text-sm text-xs">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-10">
            {softwareSkills.map((software, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden bg-purple-50 shadow-sm hover:shadow-md transition-shadow p-3">
                <img
                  src={getImagePath(software.logo)}
                  alt={software.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;