"use client";

import Footer from '../../components/Footer';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 'all', name: '全部视频' },
  { id: 'feed', name: '短视频' },
  { id: 'activity', name: '活动宣传' },
  { id: 'software', name: '软件宣传' },
];

const projects = [
  // 活动宣传
  {
    title: "丰农故事",
    category: "activity",
    bvid: "BV18PdDYBEH1",
    cover: "/images/thumbnails/BV18PdDYBEH1.jpg",
    link: "#",
    description: "拍摄剪辑"
  },
  // 短视频
  {
    title: "天天学园艺",
    category: "feed",
    bvid: "BV14TdUYZEba",
    cover: "/images/thumbnails/BV14TdUYZEba.jpg",
    link: "#",
    description: "农业教育 拍摄剪辑"
  },
  // 软件宣传
  {
    title: "亿图脑图",
    category: "software",
    bvid: "BV1SKdDYTEWg",
    cover: "/images/thumbnails/BV1SKdDYTEWg.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "天天学农",
    category: "feed",
    bvid: "BV14TdUYZEbJ",
    cover: "/images/thumbnails/BV14TdUYZEbJ.jpg",
    link: "#",
    description: "农业教育 拍摄剪辑"
  },
  // 活动宣传
  {
    title: "企宣剪辑（1）",
    category: "activity",
    bvid: "BV18PdDYBE6B",
    cover: "/images/thumbnails/BV18PdDYBE6B.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "FB双光警戒枪型摄像机开箱",
    category: "feed",
    bvid: "BV1CidSYoEk3",
    cover: "/images/thumbnails/BV1CidSYoEk3.jpg",
    link: "#",
    description: "电子产品 纯剪辑"
  },
  // 短视频
  {
    title: "游戏特效",
    category: "feed",
    bvid: "BV1acdDY6Eev",
    cover: "/images/thumbnails/BV1acdDY6Eev.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTEPK",
    cover: "/images/thumbnails/BV18KdDYTEPK.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 活动宣传
  {
    title: "天天学农游学",
    category: "activity",
    bvid: "BV1DPdDYBEui",
    cover: "/images/thumbnails/BV1DPdDYBEui.jpg",
    link: "#",
    description: "拍摄剪辑"
  },
  // 短视频
  {
    title: "元气玛特",
    category: "feed",
    bvid: "BV1hcdDY6Ey7",
    cover: "/images/thumbnails/BV1hcdDY6Ey7.jpg",
    link: "#",
    description: "电商软件 拍摄剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTExo",
    cover: "/images/thumbnails/BV18KdDYTExo.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "SG武将",
    category: "feed",
    bvid: "BV1QcdDY6EhC",
    cover: "/images/thumbnails/BV1QcdDY6EhC.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  },
  // 活动宣传
  {
    title: "企宣剪辑（2）",
    category: "activity",
    bvid: "BV18PdDYBE9D",
    cover: "/images/thumbnails/BV18PdDYBE9D.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "天天学农",
    category: "feed",
    bvid: "BV14TdUYZEgy",
    cover: "/images/thumbnails/BV14TdUYZEgy.jpg",
    link: "#",
    description: "农业教育 纯剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTE5G",
    cover: "/images/thumbnails/BV18KdDYTE5G.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "FB灭世录",
    category: "feed",
    bvid: "BV1acdDY6EGa",
    cover: "/images/thumbnails/BV1acdDY6EGa.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  }
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const [videoPositions, setVideoPositions] = useState<{ [key: string]: number }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isClient && isMobile) {
      const script = document.createElement('script');
      script.src = 'https://player.bilibili.com/player.html';
      script.async = true;
      document.body.appendChild(script);

      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      
      return () => {
        document.body.removeChild(script);
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }
  }, [isClient, isMobile]);

  const handleFullscreen = (bvid: string) => {
    const container = containerRefs.current[bvid];
    if (container) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          (container as any).webkitRequestFullscreen();
        } else if ((container as any).mozRequestFullScreen) {
          (container as any).mozRequestFullScreen();
        } else if ((container as any).msRequestFullscreen) {
            (container as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      }
    }
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || '全部';

  return (
    <div className="md:min-h-screen md:flex md:flex-col">
      <div className="min-h-[calc(100vh-64px)] flex flex-col md:min-h-0 md:flex-1">
        <main className="flex-1">
          <div className="px-4 md:px-8 py-4 md:py-16">
            <section className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-2">视频作品</h1>
              <p className="text-gray-600 mb-8">探索我的视频作品集，展示最近的视频创作。</p>
              
              <div className="relative mb-8" ref={dropdownRef}>
                {/* 移动端：下拉式选择器 */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg shadow-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-600 text-white'
                    }`}
                  >
                    <span>{selectedCategoryName}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''} text-white`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                            selectedCategory === category.id ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 桌面端：标签式选择器 */}
                <div className="hidden md:flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredVideo(project.bvid);
                    }}
                    onMouseLeave={() => {
                      setHoveredVideo(null);
                      setPlayingVideos(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(project.bvid);
                        return newSet;
                      });
                    }}
                    onClick={() => {
                      setHoveredVideo(project.bvid);
                      setPlayingVideos(prev => new Set([...prev, project.bvid]));
                    }}
                  >
                    <div 
                      className="aspect-video relative bg-gray-100"
                      ref={(el) => {
                        if (el) {
                          containerRefs.current[project.bvid] = el;
                        }
                      }}
                    >
                      {isClient && (
                        <iframe
                          src={`https://player.bilibili.com/player.html?bvid=${project.bvid}&page=1&high_quality=1&danmaku=0&autoplay=0&direction=0&showinfo=1&controls=1&disablekb=0&enable_ssl=1&playsinline=1`}
                          className="w-full h-full"
                          allow="autoplay; fullscreen"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                          ref={(el) => {
                            if (el) {
                              iframeRefs.current[project.bvid] = el;
                            }
                          }}
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 
                          className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-purple-600 transition-colors cursor-pointer"
                          onClick={() => {
                            if (isMobile) {
                              window.open(`https://www.bilibili.com/video/${project.bvid}`, '_blank');
                            }
                          }}
                        >
                          {project.title}
                        </h3>
                        {isMobile && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleFullscreen(project.bvid);
                            }}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm transition-colors"
                          >
                            全屏观看
                          </button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                          project.category === 'feed' ? 'bg-blue-100 text-blue-800' :
                          project.category === 'software' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {project.category === 'feed' ? '短视频' :
                           project.category === 'software' ? '软件宣传' :
                           '活动宣传'}
                        </span>
                        {project.description.split(' ').map((tag, index) => (
                          <span key={index} className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}