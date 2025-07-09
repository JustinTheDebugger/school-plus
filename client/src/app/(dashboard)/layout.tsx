export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SECTION */}
      <div className="w-1/6"></div>
      {/* RIGHT SECTION */}
      <div className="w-5/6"></div>
    </div>
  );
}
