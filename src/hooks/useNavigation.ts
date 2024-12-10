export const useNavigation = () => {
  const currentPath = window.location.pathname.slice(1);
  return { currentPath };
};
