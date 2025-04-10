import { useUser, useStackApp } from '@stackframe/react';
import neonLogo from './assets/neon.svg';

export const Header = () => {
  const app = useStackApp();
  const user = useUser();

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 z-10">
      <div className="font-medium text-[15px] tracking-tight">
        <img src={neonLogo} alt="Neon logo" width={102} height={28} />
      </div>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="inline-flex h-8 items-end flex-col">
            {user.displayName && (
              <span className="text-[14px] text-gray-600 dark:text-gray-300">
                {`Hello, ${user.displayName}`}
              </span>
            )}
            <button
              type="button"
              onClick={() => user.signOut()}
              className="bg-gray-50 px-1 underline text-[11px]  hover:no-underline cursor-pointer"
            >
              Sign Out
            </button>
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => app.redirectToSignIn()}
            className="inline-flex h-8 items-center justify-center rounded-md px-4 text-[13px] font-medium cursor-pointer text-gray-700 transition-all hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => app.redirectToSignUp()}
            className="inline-flex h-8 items-center justify-center font-medium  text-center rounded-full outline-none cursor-pointer   dark:text-black bg-primary-1 hover:bg-[#00e5bf] whitespace-nowrap px-6 text-[13px] transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};
