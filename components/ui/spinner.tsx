export const Spinner = ({ size = 16 }: { size?: number }) => {
  return (
    <div
      className={`animate-spin rounded-full h-${size} w-${size} border-b-4 border-purple-600`}
    />
  );
};
