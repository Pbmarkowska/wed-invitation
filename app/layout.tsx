import './globals.css';
import { Layout } from './components/Layout';
import { ptSerif } from './utils/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${ptSerif.className} bg-weddingCream`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
