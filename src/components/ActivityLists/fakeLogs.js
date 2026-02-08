export const logs = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  message: `Deployment log #${i + 1}`,
  avatar: `https://picsum.photos/seed/${i}/60/60`,
  preview: `https://picsum.photos/seed/preview-${i}/300/160`,
}));
