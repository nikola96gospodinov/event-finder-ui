export const getStartOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
};

export const getCurrentAge = (birthday: Date | string) => {
  const now = new Date();
  // Handle both ISO string format and YYYY-MM-DD format
  const birthdayDate =
    typeof birthday === "string" && birthday.includes("T")
      ? new Date(birthday)
      : new Date(birthday + "T00:00:00");
  const age = now.getFullYear() - birthdayDate.getFullYear();
  return age;
};
