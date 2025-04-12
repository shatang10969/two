export function getImagePath(path: string) {
  if (process.env.NODE_ENV === 'production') {
    return `/TT10969${path}`;
  }
  return path;
} 