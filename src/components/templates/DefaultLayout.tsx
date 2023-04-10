const styles = {
  main: "w-screen h-screen bg-os-secondary-100",
  content:
    "h-[90vh] bg-gradient-to-br from-[#FDD819] to-[#E80505] rounded-br-[800px] rounded-bl-[400px] lg:rounded-bl-[0px] lg:rounded-br-[0px]",
};

export const DefaultLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};
