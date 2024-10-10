export const getFormattedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const names = [
  'Vasyl Malyuk',
  'Dmytro Korchynskiy',
  'Oleksandr Turchynov',
];
export const names1 = ['Dmytro Korchynskiy'];
export const names2 = ['Vasyl Malyuk', 'Oleksandr Turchynov'];
