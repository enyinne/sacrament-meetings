"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
    >
      Print Meeting Program
    </button>
  );
}