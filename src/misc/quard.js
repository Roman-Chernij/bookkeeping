export const quard = history => {
  const token = sessionStorage.getItem('token');
  if (token && !!token.trim()) return true;
  return false
};
