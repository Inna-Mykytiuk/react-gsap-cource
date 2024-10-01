import React from 'react';
import { Link } from "react-router-dom";

export default function Second() {
  return (
    <div>
      <p>Second</p>
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
    </div>
  )
}

