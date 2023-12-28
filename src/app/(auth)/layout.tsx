interface authLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: authLayoutProps) {
  return (
    <main className="min-h-screen flex justify-center items-center bg-primary">
      {props.children}
    </main>
  );
}
