// layouts
import DefaultLayout from "@/layouts/default.layout";

export const metadata = {
  title: "Abdullah's Portfolio",
  description: "Portfolio of Abdullah (back-end Developer)",
};

export default function RootLayout({children}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
