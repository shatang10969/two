export function getImagePath(path: string) {
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  if (process.env.NODE_ENV === 'production') {
    return `/TT10969${normalizedPath}`;
  }
  return normalizedPath;
} 