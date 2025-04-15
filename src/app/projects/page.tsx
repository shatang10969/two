"use client";

import Footer from '../../components/Footer';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getImagePath } from '@/utils/imagePath';

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
    cover: "images/thumbnails/BV18PdDYBEH1.jpg",
    link: "#",
    description: "拍摄剪辑"
  },
  // 短视频
  {
    title: "天天学园艺",
    category: "feed",
    bvid: "BV14TdUYZEba",
    cover: "images/thumbnails/BV14TdUYZEba.jpg",
    link: "#",
    description: "农业教育 拍摄剪辑"
  },
  // 软件宣传
  {
    title: "亿图脑图",
    category: "software",
    bvid: "BV1SKdDYTEWg",
    cover: "images/thumbnails/BV1SKdDYTEWg.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "天天学农",
    category: "feed",
    bvid: "BV14TdUYZEbJ",
    cover: "images/thumbnails/BV14TdUYZEbJ.jpg",
    link: "#",
    description: "农业教育 拍摄剪辑"
  },
  // 活动宣传
  {
    title: "企宣剪辑（1）",
    category: "activity",
    bvid: "BV18PdDYBE6B",
    cover: "images/thumbnails/BV18PdDYBE6B.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "FB双光警戒枪型摄像机开箱",
    category: "feed",
    bvid: "BV1CidSYoEk3",
    cover: "images/thumbnails/BV1CidSYoEk3.jpg",
    link: "#",
    description: "电子产品 纯剪辑"
  },
  // 短视频
  {
    title: "游戏特效",
    category: "feed",
    bvid: "BV1acdDY6Eev",
    cover: "images/thumbnails/BV1acdDY6Eev.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTEPK",
    cover: "images/thumbnails/BV18KdDYTEPK.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 活动宣传
  {
    title: "天天学农游学",
    category: "activity",
    bvid: "BV1DPdDYBEui",
    cover: "images/thumbnails/BV1DPdDYBEui.jpg",
    link: "#",
    description: "拍摄剪辑"
  },
  // 短视频
  {
    title: "元气玛特",
    category: "feed",
    bvid: "BV1hcdDY6Ey7",
    cover: "images/thumbnails/BV1hcdDY6Ey7.jpg",
    link: "#",
    description: "电商软件 拍摄剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTExo",
    cover: "images/thumbnails/BV18KdDYTExo.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "SG武将",
    category: "feed",
    bvid: "BV1QcdDY6EhC",
    cover: "images/thumbnails/BV1QcdDY6EhC.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  },
  // 活动宣传
  {
    title: "企宣剪辑（2）",
    category: "activity",
    bvid: "BV18PdDYBE9D",
    cover: "images/thumbnails/BV18PdDYBE9D.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "天天学农",
    category: "feed",
    bvid: "BV14TdUYZEgy",
    cover: "images/thumbnails/BV14TdUYZEgy.jpg",
    link: "#",
    description: "农业教育 纯剪辑"
  },
  // 软件宣传
  {
    title: "亿图图示",
    category: "software",
    bvid: "BV18KdDYTE5G",
    cover: "images/thumbnails/BV18KdDYTE5G.jpg",
    link: "#",
    description: "纯剪辑"
  },
  // 短视频
  {
    title: "FB灭世录",
    category: "feed",
    bvid: "BV1acdDY6EGa",
    cover: "images/thumbnails/BV1acdDY6EGa.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  }
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoDimensions, setVideoDimensions] = useState<{ [key: string]: { width: number; height: number } }>({});

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const handleExpand = (bvid: string) => {
    setExpandedVideo(bvid);
    setIsLandscape(true);
    try {
      if (screen.orientation && 'lock' in screen.orientation) {
        (screen.orientation as any).lock('landscape');
      }
    } catch (e) {
      console.log('Orientation lock not supported');
    }
  };

  const handleShrink = () => {
    setExpandedVideo(null);
    setIsLandscape(false);
    try {
      if (screen.orientation && 'unlock' in screen.orientation) {
        (screen.orientation as any).unlock();
      }
    } catch (e) {
      console.log('Orientation unlock not supported');
    }
  };

  const toggleLandscape = () => {
    setIsLandscape(!isLandscape);
    try {
      if (screen.orientation && 'lock' in screen.orientation) {
        (screen.orientation as any).lock(isLandscape ? 'portrait' : 'landscape');
      }
    } catch (e) {
      console.log('Orientation lock not supported');
    }
  };

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

        // 获取视频尺寸并自动判断是否需要横屏
        const iframe = iframeRefs.current[bvid];
        if (iframe) {
          const video = iframe.contentWindow?.document.querySelector('video');
          if (video) {
            const { videoWidth, videoHeight } = video;
            setVideoDimensions(prev => ({
              ...prev,
              [bvid]: { width: videoWidth, height: videoHeight }
            }));
            
            // 如果视频是横屏比例（宽高比大于1），自动切换到横屏模式
            if (videoWidth > videoHeight) {
              setIsLandscape(true);
              container.style.transform = 'rotate(90deg)';
            }
          }
        }
      }
    }
  };

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 md:px-8">
        <section className="py-8 md:py-16">
          <h1 className="text-3xl font-bold mb-2">视频作品</h1>
          <p className="text-gray-600 mb-8">探索我的视频作品集，展示最近的视频创作。</p>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full md:w-auto px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between"
            >
              <span className="text-gray-700">
                {categories.find(c => c.id === selectedCategory)?.name || '所有分类'}
              </span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full md:w-48 bg-white rounded-lg shadow-lg">
                <div className="py-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
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
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
              >
                <div 
                  className={`aspect-video relative bg-gray-100 ${
                    isMobile && expandedVideo === project.bvid
                      ? 'fixed inset-0 z-50'
                      : ''
                  }`}
                  ref={(el) => {
                    if (el) {
                      containerRefs.current[project.bvid] = el;
                    }
                  }}
                  onClick={() => {
                    if (isMobile) {
                      handleExpand(project.bvid);
                    }
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setHoveredVideo(project.bvid);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) {
                      setHoveredVideo(null);
                    }
                  }}
                  style={{
                    transform: isMobile && expandedVideo === project.bvid && isLandscape
                      ? 'rotate(90deg)'
                      : 'none',
                    transformOrigin: 'center center',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  {isClient ? (
                    <>
                      {!isMobile && hoveredVideo !== project.bvid && (
                        <div 
                          className="relative w-full h-full cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFullscreen(project.bvid);
                          }}
                        >
                          <img
                            src={getImagePath(project.cover)}
                      alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/thumbnails/default.jpg';
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                  </div>
                      )}
                      
                      {/* 移动端直接显示播放器，非移动端在hover时显示 */}
                      {(isMobile || (!isMobile && hoveredVideo === project.bvid)) ? (
                        <iframe
                          src={`https://player.bilibili.com/player.html?bvid=${project.bvid}&page=1&high_quality=1&danmaku=0&autoplay=${isMobile ? 0 : 1}&direction=0&showinfo=1&controls=1&disablekb=0&enable_ssl=1&playsinline=1`}
                          className="w-full h-full"
                          allow="autoplay; fullscreen"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                          ref={(el) => {
                            if (el) {
                              iframeRefs.current[project.bvid] = el;
                            }
                          }}
                        />
                      ) : null}
                    </>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={getImagePath(project.cover)}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/thumbnails/default.jpg';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {isMobile && expandedVideo === project.bvid && (
                    <div className="absolute top-4 right-4 z-50 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLandscape();
                        }}
                        className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {isLandscape ? '竖屏' : '横屏'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShrink();
                        }}
                        className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        缩小
                      </button>
                    </div>
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
          <Footer />
      </main>
    </div>
  );
}