import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jessica Parker',
      position: 'Product Manager at Airbnb',
      content: 'Harry is an exceptional designer who truly understands how to balance aesthetics with functionality. His work on our product interface significantly improved our user engagement metrics.',
      avatar: '/avatars/avatar1.jpg'
    },
    {
      name: 'David Wilson',
      position: 'Founder, TechFlow',
      content: 'Working with Harry was a pleasure from start to finish. He took the time to understand our brand and delivered designs that perfectly captured our vision while adding his own creative touch.',
      avatar: '/avatars/avatar2.jpg'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        
        <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gray-200 w-10 h-10 rounded-full mr-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">{testimonials[0].name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[0].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[0].position}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700">"{testimonials[0].content}"</p>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gray-200 w-10 h-10 rounded-full mr-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">{testimonials[1].name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[1].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[1].position}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700">"{testimonials[1].content}"</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;