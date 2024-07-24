import ProfileNav from "./_components/ProfileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <ProfileNav />
    {children}
    </div>
  );
}
