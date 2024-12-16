type Option = { value: string; label: string }

export const categoryOpts: Option[] = [
  { value: '', label: 'All' },
  { value: 'Upper Body', label: 'Upper Body' },
  { value: 'Lower Body', label: 'Lower Body' },
  { value: 'Hat', label: 'Hat' },
  { value: 'Shoes', label: 'Shoes' },
  { value: 'Accessory', label: 'Accessory' },
  { value: 'Legendary', label: 'Legendary' },
  { value: 'Mythic', label: 'Mythic' },
  { value: 'Epic', label: 'Epic' },
  { value: 'Rare', label: 'Rare' }
]

export const themeOpts: Option[] = [
  { value: '', label: 'All' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Light', label: 'Light' },
  { value: 'Colorful', label: 'Colorful' },
  { value: 'Halloween', label: 'Halloween' }
]

export const tierOpts: Option[] = [
  { value: '', label: 'All' },
  { value: 'Basic', label: 'Basic' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Deluxe', label: 'Deluxe' }
]

export const timeSortOpts = [
  { value: 'asc', label: 'Latest' },
  { value: 'desc', label: 'Oldest' }
]

export const priceSortOpts = [
  { value: 'asc', label: 'Low to High' },
  { value: 'desc', label: 'High to Low' }
]
