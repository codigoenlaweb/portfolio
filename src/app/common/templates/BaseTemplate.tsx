interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const BaseTemplate = ({ children }: Props) => {
  return (
    <main className="bg-secondary-main min-h-screen text-typography-dark px-8 sm:px-16 flex flex-col items-center">
      <div className="max-w-4xl mx-5 w-full">{children}</div>
    </main>
  );
};
