"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { getImagePath } from '@/utils/imagePath';

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
    title: "FB双光警戒摄像机",
    category: "feed",
    bvid: "BV1CidSYoEk3",
    cover: "/images/thumbnails/BV1CidSYoEk3.jpg",
    link: "#",
    description: "电子产品 纯剪辑"
  },
  // 短视频
  {
    title: "游戏特效混剪",
    category: "feed",
    bvid: "BV1acdDY6Eev",
    cover: "/images/thumbnails/BV1acdDY6Eev.jpg",
    link: "#",
    description: "游戏宣发 纯剪辑"
  },
  // 软件宣传
  {
    title: "亿图脑图",
    category: "software",
    bvid: "BV1SKdDYTEWg",
    cover: "/images/thumbnails/BV1SKdDYTEWg.jpg",
    link: "#",
    description: "纯剪辑"
  }
];

const Projects = () => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const [isLandscape, setIsLandscape] = useState(false);
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [videoDimensions, setVideoDimensions] = useState<{ [key: string]: { width: number; height: number } }>({});

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
      // 只在需要时加载播放器脚本
      const loadPlayerScript = () => {
        if (!document.querySelector('script[src="https://player.bilibili.com/player.html"]')) {
          const script = document.createElement('script');
          script.src = 'https://player.bilibili.com/player.html';
          script.async = true;
          document.body.appendChild(script);
        }
      };

      // 只在视频展开时加载播放器
      if (expandedVideo) {
        loadPlayerScript();
      }

      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }
  }, [isClient, isMobile, expandedVideo]);

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

  const handleExpand = (bvid: string) => {
    if (isMobile) {
      setExpandedVideo(bvid);
      const container = containerRefs.current[bvid];
      if (container) {
        // 使用 CSS transform 代替直接修改样式
        container.classList.add('fixed', 'inset-0', 'z-50');
        if (isLandscape) {
          container.classList.add('rotate-90');
        }
        document.body.classList.add('overflow-hidden');
      }
    }
  };

  const handleShrink = (bvid: string) => {
    if (isMobile) {
      setExpandedVideo(null);
      setIsLandscape(false);
      const container = containerRefs.current[bvid];
      if (container) {
        container.classList.remove('fixed', 'inset-0', 'z-50', 'rotate-90');
        document.body.classList.remove('overflow-hidden');
      }
    }
  };

  const toggleLandscape = (bvid: string) => {
    setIsLandscape(!isLandscape);
    const container = containerRefs.current[bvid];
    if (container) {
      container.style.transform = !isLandscape ? 'rotate(90deg)' : 'none';
    }
  };

  return (
    <section className="py-4 md:py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">视频作品</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
              onMouseEnter={() => !isMobile && setHoveredVideo(project.bvid)}
              onMouseLeave={() => !isMobile && setHoveredVideo(null)}
            >
              <div 
                className={`aspect-video relative bg-gray-100 ${expandedVideo === project.bvid ? 'fixed inset-0 z-50' : ''}`}
                ref={(el) => {
                  if (el) {
                    containerRefs.current[project.bvid] = el;
                  }
                }}
              >
                {isClient ? (
                  <>
                    {/* 移动端默认显示封面图 */}
                    {isMobile && expandedVideo !== project.bvid && (
                      <div 
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handleExpand(project.bvid)}
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
                    
                    {/* 只在需要时渲染播放器 */}
                    {(isMobile && expandedVideo === project.bvid) || (!isMobile && hoveredVideo === project.bvid) ? (
                      <iframe
                        src={`https://player.bilibili.com/player.html?bvid=${project.bvid}&page=1&high_quality=1&danmaku=0&autoplay=1&direction=0&showinfo=1&controls=1&disablekb=0&enable_ssl=1&playsinline=1`}
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
        
        <div className="mt-8 text-center">
          <Link 
            href="/projects" 
            className="inline-block border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            查看所有视频作品
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;