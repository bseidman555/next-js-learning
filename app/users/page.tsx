import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  console.log(sortOrder);
  return (
    <>
      <h1>I'm the users base page and my url name is the folder names users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>...Loading</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
