"use client";

import { useState } from "react";

export default function Page() {
  const [variant, setVariant] = useState("A");

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 flex flex-col items-center justify-center p-4">
      {/* Switcher */}
      <div className="fixed top-6 flex gap-2 bg-white border border-slate-300 p-1.5 rounded-full shadow-sm">
        <button
          type="button"
          onClick={() => setVariant("A")}
          className={"cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold transition-colors " + (variant === "A" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900")}
        >
          Variant A
        </button>
        <button
          type="button"
          onClick={() => setVariant("B")}
          className={"cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold transition-colors " + (variant === "B" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900")}
        >
          Variant B
        </button>
      </div>

      {/* Kaart met 2 actieknoppen */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-lg">
        <h1 className="text-xl font-bold text-slate-900 mb-6">Cancel Subscription</h1>
        
        <div className="flex gap-3">
          <button
            type="button"
            className="cursor-pointer flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 text-white transition-all shadow-sm"
          >
            Keep Plan
          </button>
          <button
            type="button"
            className="cursor-pointer flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-rose-50 hover:bg-rose-100 active:scale-95 border border-rose-200 text-rose-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
