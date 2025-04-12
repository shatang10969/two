import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

export default function DesignDetailPage({ params }: Props) {
  // 模拟从数据库获取设计作品详情
  const designs = [
    {
      title: '从反馈到完美：设计中的迭代过程',
      category: '界面/用户体验设计',
      description: '探索最新趋势、专家提示和界面/用户体验设计的幕后见解。',
      image: '/featured-thumb1.svg',
      slug: 'feedback-to-perfection',
      content: [
        {
          type: 'paragraph',
          text: '在设计过程中，迭代是一个至关重要的步骤。它不仅能帮助我们不断改进产品，还能确保最终成果真正满足用户需求。本文将深入探讨设计迭代的重要性，以及如何有效地进行迭代以达到最佳效果。'
        },
        {
          type: 'image',
          src: '/featured-thumb1.svg',
          alt: '设计迭代过程图示'
        },
        {
          type: 'paragraph',
          text: '迭代设计的核心在于持续收集反馈并做出相应的改进。这个过程可能涉及多个阶段，从初步概念到最终实现，每一步都需要仔细评估和调整。通过这种方式，我们可以确保设计方案不断优化，最终达到预期的目标。'
        }
      ],
      publishDate: '2024-01-15',
      readTime: '5 分钟阅读',
      tags: ['设计迭代', '用户反馈', '设计过程']
    }
  ];

  const design = designs.find(d => d.slug === params.slug);

  if (!design) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">未找到该设计作品</h1>
          <Link href="/designs" className="text-purple-600 hover:underline">返回设计作品列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="md:ml-64 flex-1 overflow-auto transition-all duration-300">
        <div className="px-4 md:px-8 py-10">
          <article className="max-w-4xl mx-auto">
            {/* 返回链接 */}
            <Link
              href="/designs"
              className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              返回设计作品列表
            </Link>

            {/* 文章头部 */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {design.category}
                </span>
                <span className="text-gray-500 text-sm">{design.publishDate}</span>
                <span className="text-gray-500 text-sm">{design.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{design.title}</h1>
              <p className="text-xl text-gray-600">{design.description}</p>
            </header>

            {/* 特色图片 */}
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-12">
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 文章内容 */}
            <div className="prose prose-lg max-w-none">
              {design.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {block.text}
                    </p>
                  );
                } else if (block.type === 'image') {
                  return (
                    <div key={index} className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                }
              })}
            </div>

            {/* 标签 */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">相关标签</h3>
              <div className="flex flex-wrap gap-2">
                {design.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <Footer />
        </div>
      </main>
    </div>
  );
}