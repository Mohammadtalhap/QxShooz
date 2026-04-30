import { useState } from "react";

function TopBar({
  offerCount,
  className="",
  textClass="",
  fullWidth = false,
  removeDismissal = false,
}) {
  const [showTopBar, setShowTopBar] = useState(true);
  if (!showTopBar) return null;

  const allOffers = [
    "Enjoy 20% off your entire order with the code SHOEFRESH20.",
    "Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15",
    "Buy one pair of shoes, get the second pair 50% off. Use code BOGO50",
  ];
  const offers = allOffers.slice(0, offerCount);

  return (
    <div
      className={`w-full bg-linear-to-r text-white text-sm px-0 ${fullWidth ? "" : "xl:px-15"} ${className} `}
    >
      <div className="flex items-center px-4 py-2 overflow-hidden">
        {/* Scrolling Text */}
        <div className="whitespace-nowrap animate-marquee flex gap-20 md:gap-30 lg:gap-60">
          {[...offers, ...offers, ...offers].map((offer, index) => (
            <span key={index} className={`text-sm md:text-base font-semibold ${textClass}`}>
              {offer}
              {!removeDismissal && (
                <span className="ml-2">
                  <button
                    onClick={() => setShowTopBar(false)}
                    className="text-sm md:text-base underline underline-offset-4 text-[#fefdfd] opacity-80 cursor-pointer"
                  >
                    Dismiss
                  </button>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
