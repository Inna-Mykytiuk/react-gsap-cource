import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/first" className="text-xl font-semibold">
        First
      </Link>
      <Link to="/second" className="text-xl font-semibold">
        Second
      </Link>
      Hello
    </div>
  );
}
