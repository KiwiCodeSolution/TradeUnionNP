const Wrapper = ({ children, styles }) => {
  return (
    <div className={`${styles || ""} w-full xl:w-[1280px] 2xl:w-[1536px] px-7 md:px-10 mx-auto`}>
      {children}
    </div>
  );
};

export default Wrapper;
