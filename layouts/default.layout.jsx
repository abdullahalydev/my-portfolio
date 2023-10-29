// packages
import Script from "next/script";

// styles
import "@/styles/bootstrap.style.css";
import "@/styles/colors.style.css";
import "@/styles/container.style.css";
import "@/styles/typeography.style.css";
import "@/styles/font.style.css";

export default function DefaultLayout({children}) {
  return (
    <html lang='en'>
      <body
        lang='en'
        data-bs-theme="light"
        style={{
          fontFamily: "Satoshi",
          minHeight: "100vh"
        }}
      >
        {children}

        <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js' />
        <Script src='https://kit.fontawesome.com/c001ba2b15.js' />
      </body>
    </html>
  );
}
