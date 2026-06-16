export const getCategoryPrefix = (category: string): string => {
  switch (category) {
    case 'wooden-mandir':
    case 'wooden-deco-mandir':
      return 'M';
    case 'korean-mandir':
      return 'K';
    case 'wooden-stand-jhula':
      return 'ST';
    case 'wooden-swing':
      return 'J';
    case 'sofa':
      return 'MS';
    case 'chair':
      return 'MC';
    case 'bed':
      return 'MB';
    case 'tv-unit':
      return 'MTV';
    case 'wardrobe':
      return 'MW';
    case 'modular-others':
      return 'MO';
    case 'cnc-2d':
      return 'C2D';
    case 'cnc-3d':
      return 'C3D';
    default:
      return 'PRD';
  }
};
