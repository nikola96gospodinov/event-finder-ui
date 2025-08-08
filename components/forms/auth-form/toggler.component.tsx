import clsx from "clsx";

type TogglerProps = {
  mode: string;
  toggleMode: () => void;
};

export const Toggler = ({ mode, toggleMode }: TogglerProps) => {
  const baseButtonStyle =
    "font-bold w-full rounded-4xl p-2 relative overflow-hidden";
  const inactiveButtonStyle = "text-white";

  return (
    <div className="flex items-center justify-center border border-white border-2 mb-8 rounded-4xl relative overflow-hidden">
      <div
        className={clsx(
          "absolute top-0 left-0 w-1/2 h-full bg-white rounded-4xl transition-transform duration-300 ease-in-out",
          mode === "register" && "translate-x-full"
        )}
      />

      <button
        onClick={() => {
          if (mode === "register") {
            toggleMode();
          }
        }}
        className={clsx(
          baseButtonStyle,
          {
            [inactiveButtonStyle]: mode === "register",
          },
          "z-10 text-purple-600"
        )}
      >
        Login
      </button>
      <button
        onClick={() => {
          if (mode === "login") {
            toggleMode();
          }
        }}
        className={clsx(
          baseButtonStyle,
          {
            [inactiveButtonStyle]: mode === "login",
          },
          "z-10 text-pink-600"
        )}
      >
        Register
      </button>
    </div>
  );
};
