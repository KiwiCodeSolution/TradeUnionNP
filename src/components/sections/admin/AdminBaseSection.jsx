const AdminBaseSection = ({ children, styles }) => {
  return (
    <section
      className={`w-full flex-grow overflow-y-auto ${styles}`}
      style={{ maxHeight: "calc(100vh - 120px)" }}
    >
      {children}
    </section>
  );
};

export default AdminBaseSection;
