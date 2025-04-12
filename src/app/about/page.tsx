import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) {
    return null;
  }

  const stats = [
    { 
      value: '30+', 
      label: '已完成项目与账号', 
      description: '覆盖教育、游戏、电商等多个类型，助力账号涨粉，信息流消耗转化双增长',
      icon: (
        <svg className="w-8 h-8 text-purple-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      value: '5+', 
      label: '年剪辑与运营经验', 
      description: '从脚本构思到拍摄、成片输出，独立完成全流程，熟练掌握PR、剪映等主流工具',
      icon: (
        <svg className="w-8 h-8 text-purple-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      value: '40+', 
      label: '月均剪辑成片数量', 
      description: '稳定高效输出内容，兼顾节奏与质量，适配多账号多风格剪辑需求',
      icon: (
        <svg className="w-8 h-8 text-purple-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const workExperience = [
    {
      company: '深圳市丰农控股(集团)有限公司',
      position: '农业教育｜短视频运营·编导',
      period: '2023.03-至今',
      jobDescription: [
        '负责巨量、小红书、百度等平台信息流广告视频，脚本策划、剪辑、拍摄及图片设计',
        '负责公司线下游学及农业教学课程视频拍摄与剪辑',
        '负责直播流媒体搭建、弹幕及直播视觉设计',
        '协助各部门拍摄、剪辑及设计工作，优化AI工作流，搭建数字人素材，提升团队效率'
      ],
      coreAchievements: [
        '广告投放成效：信息流广告月消耗从40W提升至100W，客情成本降低30%',
        '参与账号运营：抖音"天天学农"粉丝增长20W，"天天学园艺"从0起号增长10W粉丝',
        '视频号："天天学农"从0起号粉丝增长2w，同时搭建多ip矩阵号',
        '小红书："天天学农"粉丝增长8w，转化率由5%提升至15%'
      ]
    },
    {
      company: '深圳市飞驰互动科技有限公司',
      position: '投放代理｜剪辑组组长·编导',
      period: '2021.3-2023.1',
      jobDescription: [
        '负责社交\\电商\\网赚\\游戏短剧\\小说等行业信息流短视频拍摄剪辑，制定视频方向与创意，主导脚本策划、图文、落地页设计，兼任剪辑组长及编导'
      ],
      coreAchievements: [
        '信息流成效：带领素材团队信息流多项目总月转破800W+',
        '个人成绩：个人单条素材日转50W+'
      ]
    },
    {
      company: '海南星游互娱文化传媒有限公司',
      position: '游戏MCN｜短视频剪辑·内容创意',
      period: '2020.6-2021.1',
      jobDescription: [
        '负责多个抖音账号（游戏主播）短视频内容的剪辑、创意输出',
        '游戏俱乐部的平面设计与视频包装，制作俱乐部与虎牙、和平精英的活动图',
        '项目账号：不求人、K1俱乐部、无敌老顾姐、王真人、临惠'
      ],
      coreAchievements: [
        '账号运营期间总涨粉量超40W+',
        '基于数据，利用短视频叙事结构，实现爆款内容生产，单条视频1500w播放'
      ]
    },
    {
      company: '广东六耳猴科技有限公司',
      position: '电商代理｜平面设计·电商运营',
      period: '2019.6-2020.3',
      jobDescription: [
        '初期配合运营负责天猫、拼多多的详情页与宣传物料制作、图片设计、拍摄、文案',
        '后期主要负责公司电商店铺的运营，同时兼顾美工、客服的相关工作',
        '项目店铺：美禾旗舰店(3C类目)、极菊家居旗舰店（日用）等'
      ],
      coreAchievements: [
        '运营期间负责的多个0-1项目，月营业额破50w，日出单500+',
        '优化客服话术，完善整体售后流程体系，提高效率'
      ]
    }
  ];

  return (
    <div className="md:min-h-screen md:flex md:flex-col">
      <div className="min-h-[calc(100vh-64px)] flex flex-col md:min-h-0 md:flex-1">
        <main className="flex-1">
          <div className="px-4 md:px-8 py-4 md:py-16">
            <section className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">关于我</h1>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">以创意为核心，融合审美与文案构思，以剪辑表达视觉，依托数据优化运营，推动短视频实现流量与转化双增长。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-4 md:p-5 rounded-lg md:rounded-xl shadow-sm hover:shadow transition-all duration-300 border border-purple-100/50">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-14 h-14 md:w-16 md:h-16 text-purple-400 -mt-1 md:-mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                          {stat.icon.props.children}
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center md:flex-col md:items-start gap-2 md:gap-1 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-purple-600 tracking-tight">{stat.value}</h3>
                          <p className="font-medium text-sm text-gray-800 md:mt-0">{stat.label}</p>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">{stat.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <section className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">工作经验</h2>
                <div className="space-y-3 md:space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow transition-all duration-300 border border-purple-100/50">
                      <div className="mb-4 md:mb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{job.company}</h3>
                            <p className="text-purple-600 font-medium text-sm md:text-base mt-1">{job.position}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="inline-flex items-center bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-purple-100/50">
                              <svg className="w-3 h-3 mr-1.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                              </svg>
                              {job.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-gray-800 mb-2 md:mb-3 flex items-center">
                            <span className="w-0.5 md:w-1 h-5 md:h-6 bg-purple-600 mr-2 rounded-full"></span>
                            职责概述
                          </h4>
                          <ul className="space-y-2 md:space-y-3 pl-3 md:pl-4">
                            {job.jobDescription.map((item, i) => (
                              <li key={i} className="group">
                                <div className="flex items-start">
                                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-purple-600 mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-gray-800 mb-2 md:mb-3 flex items-center">
                            <span className="w-0.5 md:w-1 h-5 md:h-6 bg-purple-600 mr-2 rounded-full"></span>
                            核心贡献
                          </h4>
                          <ul className="space-y-2 md:space-y-3 pl-3 md:pl-4">
                            {job.coreAchievements.map((item, i) => (
                              <li key={i} className="group">
                                <div className="flex items-start">
                                  <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-purple-600 mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}