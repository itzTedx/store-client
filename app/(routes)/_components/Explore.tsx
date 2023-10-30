const Explore = () => {
  return (
    <div className="flex gap-3 bg-white rounded-full items-center  shadow-md w-fit mx-auto py-4 px-9">
      <h5>Start Exploring</h5>
      <div className="h-4 w-px bg-neutral-200 hidden md:block" />
      <ul className="flex gap-4">
        <li>Business cards</li>
        <li>Rollup Stand</li>
        <li>Flyers</li>
        <li>Stickers</li>
      </ul>
    </div>
  );
};

export default Explore;
