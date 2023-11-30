import { signOut } from "next-auth/react";

const Navigation = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
      >
        Log out
      </button>
    </div>
  );
};

export default Navigation;
