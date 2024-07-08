const TitleAdmin = ({ children }) => {
  return (
    <div className="w-full py-5 relative">
      <h1 className="text-center text-red text-2xl">{children}</h1>
      <div className="absolute h-[2px] rounded-md left-0 right-0 bg-gradient-to-r from-white via-red to-white bottom-0 z-0" />
    </div>
  );
};

export default TitleAdmin;
