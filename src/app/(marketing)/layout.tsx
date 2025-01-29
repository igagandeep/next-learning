export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body>
      <header
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "lightblue",
        }}
      >
        <h3>Header</h3>
      </header>
        
        {children}
        <footer
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "lightgray",
          padding: "1rem",
          marginTop: "400px"
        }}
      >
        <h3>Footer</h3>
      </footer>
        </body>
     
    </html>
  );
}
