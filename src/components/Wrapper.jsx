const Wrapper = ({ children, styles }) => {
  return <div className={`${styles || ""} w-[1280px] px-10 mx-auto`}>{children}</div>;
};

export default Wrapper;
