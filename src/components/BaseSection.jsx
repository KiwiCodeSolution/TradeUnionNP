const BaseSection = ({ children, style, id }) => {
  return (
    <section className={`w-full overflow-hidden relative ${style}`} id={id || ""}>
      {children}
    </section>
  );
};

export default BaseSection;
