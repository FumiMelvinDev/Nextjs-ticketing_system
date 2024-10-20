import { getCurrentUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          {user ? `Welcome, ${user?.name}` : "TICKET LEAD"}
        </a>
      </div>
      <div className="flex-none">
        <SignedOut>
          <div className="btn btn-outline btn-accent">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
