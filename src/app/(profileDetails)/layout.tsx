import ProfileNav from "./_components/ProfileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-start items-start bg-lightGrey w-screen">
    <ProfileNav />
    {children}
    </div>
  );
}
