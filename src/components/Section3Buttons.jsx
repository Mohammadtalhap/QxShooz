import Button from "./Button";

function Section3Buttons({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "featured", label: "FEATURED" },
    { id: "new", label: "NEW ARRIVALS" },
    { id: "best", label: "BEST SELLER" },
  ];
  return (
    <div className="btn-area relative w-80 flex justify-between items-baseline-last gap-6">
      {tabs.map((tab) => (
        <div key={tab.id} className="relative">
          <Button
            text={tab.label}
            variant="normal"
            textColor={activeTab === tab.id ? "black" : ""}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className="flex-1 justify-center py-2"
          />
          <span
            className={`absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 z-1 ${activeTab === tab.id ? "w-full" : ""}`}
          ></span>
        </div>
      ))}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#8080806c] z-0"></span>
    </div>
  );
}

export default Section3Buttons;
