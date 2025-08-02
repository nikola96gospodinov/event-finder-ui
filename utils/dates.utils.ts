export const getStartOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
};

export const getCurrentAge = (birthday: Date | string) => {
  const now = new Date();
  const age = now.getFullYear() - new Date(birthday).getFullYear();
  return age;
};
