import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-white text-center text-sm text-gray-600 shadow-inner border-t">
      © {new Date().getFullYear()} <span className="font-semibold">Yukta Yadav</span>. All rights reserved.
    </footer>
  );
}
