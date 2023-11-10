// components/BreakpointIndicator.js

const isDevelopment = process.env.NODE_ENV === "development";

const BreakpointIndicator = () => {
  if (!isDevelopment) {
    return null; // Hide the indicator in production
  }

  return (
    <div className="fixed bottom-2 right-2 p-2 bg-red-700 text-white text-sm rounded-md z-[999999]">
      <div className="sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block">XL</div>
    </div>
  );
};

export default BreakpointIndicator;