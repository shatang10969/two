export function getImagePath(path: string) {
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
} 