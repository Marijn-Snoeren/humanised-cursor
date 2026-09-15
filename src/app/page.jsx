"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [variant, setVariant] = useState("A");
  const cursorRef = useRef(null);
  const cancelBtnRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;
    let hasMoved = false;
    let frameId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        curX = mouseX;
        curY = mouseY;
        hasMoved = true;
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("mousemove", onMove);

    const loop = () => {
      if (hasMoved) {
        let isOverCancel = false;

        // Check of het VISUELE bolletje (curX, curY) over de knop zit
        if (variant === "B" && cancelBtnRef.current) {
          const rect = cancelBtnRef.current.getBoundingClientRect();
          isOverCancel =
            curX >= rect.left &&
            curX <= rect.right &&
            curY >= rect.top &&
            curY <= rect.bottom;
        }

        const speed = variant === "A" ? 1 : (isOverCancel ? 0.04 : 0.2);
        curX += (mouseX - curX) * speed;
        curY += (mouseY - curY) * speed;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
        }
      }
      frameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
      document.body.style.cursor = "auto";
    };
  }, [variant]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 flex flex-col items-center justify-center p-4 select-none">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-slate-800 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150"
        style={{ willChange: "transform" }}
      />

      {/* Switcher */}
      <div className="fixed top-6 flex gap-2 bg-white border border-slate-300 p-1.5 rounded-full shadow-sm">
        <button
          type="button"
          onClick={() => setVariant("A")}
          className={
            "cursor-none px-4 py-1.5 rounded-full text-xs font-semibold transition-colors " +
            (variant === "A" ? "bg-blue-600 text-white" : "text-slate-600")
          }
        >
          Variant A
        </button>
        <button
          type="button"
          onClick={() => setVariant("B")}
          className={
            "cursor-none px-4 py-1.5 rounded-full text-xs font-semibold transition-colors " +
            (variant === "B" ? "bg-blue-600 text-white" : "text-slate-600")
          }
        >
          Variant B
        </button>
      </div>

      {/* Kaart */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-lg">
        <h1 className="text-xl font-bold text-slate-900 mb-6">Cancel Subscription</h1>

        <div className="flex gap-3">
          <button
            type="button"
            className="cursor-none flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 text-white active:scale-95 transition-transform"
          >
            Keep Plan
          </button>
          <button
            ref={cancelBtnRef}
            type="button"
            className="cursor-none flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-rose-50 border border-rose-200 text-rose-600 active:scale-95 transition-transform"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
