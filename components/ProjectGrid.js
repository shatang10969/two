import Image from 'next/image'
// ... existing imports ...
<Image
  src={project.cover}
  alt={project.title}
  width={300}  // 从100调整为200
  height={300} // 从100调整为200
  style={{
    objectFit: 'cover',
    borderRadius: '8px'
  }}
/>
// ... existing code ...