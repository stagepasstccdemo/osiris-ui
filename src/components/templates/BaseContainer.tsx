export const BaseContainer = ({ children }) => {
  return (
    <main className="bg-primary-100 w-screen h-screen px-6 py-14 overflow-x-hidden">
      <section>{children}</section>
    </main>
  );
};
