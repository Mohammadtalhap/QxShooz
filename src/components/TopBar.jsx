import React from "react";
import { useState } from "react";

function TopBar() {
  const [showTopBar, setShowTopBar] = useState(true);
  if (!showTopBar) return null;

  const offers = [
    "Enjoy 20% off your entire order with the code SHOEFRESH20.",
    "Get 15% off your first purchase when you sign up for our newsletter.",
  ];

  return (
    <div className="w-full bg-linear-to-r from-[#8f6abd] via-[#7e446f] to-[#b73d47] text-white text-sm px-0 xl:px-15">
      <div className="flex items-center px-4 py-2 overflow-hidden">
        {/* Scrolling Text */}
        <div className="whitespace-nowrap animate-marquee flex gap-20 md:gap-30 lg:gap-60">
          {[...offers, ...offers].map((offer, index) => (
            <span key={index} className="text-sm md:text-base font-semibold">
              {offer}
              <span className="ml-2">
                <button
                  onClick={() => setShowTopBar(false)}
                  className="text-sm md:text-base underline underline-offset-4 text-[#fefdfd] opacity-80 cursor-pointer"
                >
                  Dismiss
                </button>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
