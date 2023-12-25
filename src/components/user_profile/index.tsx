"use client";

import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

const UserProfileButton = ({ session }: UserMenuButtonProps) => {
  const user = session?.user;

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user ? (
              <Image
                alt="Tailwind CSS Navbar component"
                src={user?.image || profilePicPlaceholder}
                width={600}
                height={400}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/profile" className="justify-between">
              Profile
              {/* <span className="badge">New</span> */}
            </Link>
          </li>
          <li>
            <Link href="/Settings">Settings</Link>
          </li>
          <li>
            {user ? (
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </button>
            ) : (
              <button onClick={() => signIn()}>Signin</button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserProfileButton;
