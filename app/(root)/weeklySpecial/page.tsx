"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    throw new Error("Test Error Page");
  }, []);

  return (
    <div className="p-40 text-center">
      <h1>Weekly Specials</h1>
      <p>This will trigger the custom error page.</p>
    </div>
  );
}

