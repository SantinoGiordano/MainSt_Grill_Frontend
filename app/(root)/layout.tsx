export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

        <head>
            <meta
            name="description"
            content="Main Street Grill in Agawam, MA. Open Monday-Saturday. Order online, view weekly specials, catering, and more!"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
            />
        </head>
        <body className="antialiased">
            <div className="bg-gray-100">

            {children}
            </div>

        </body>
    </html>
  );
}