const Wrapper = ({ children, styles }) => {
  return (
    <div className={`w-full xl:w-[1280px] px-8 md:px-10 mx-auto ${styles || ""} `}>{children}</div>
  );
};

export default Wrapper;
