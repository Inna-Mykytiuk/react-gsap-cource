import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>

      <main
        className=""
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

    </>
  );
}