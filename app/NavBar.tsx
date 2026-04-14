import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link href="/" className="btn btn-ghost text-xl mr-5">
        daisyUI
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
