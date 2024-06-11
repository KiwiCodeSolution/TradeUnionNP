const TitlePage = ({ children, styles }) => {
  return <h1 className={`text-5xl leading-[1.25] font-extrabold ${styles}`}>{children}</h1>;
};

export default TitlePage;
