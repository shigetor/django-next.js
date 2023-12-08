import './styles/globals.css';
import { fontMain } from '@/fonts';

export const metadata = {
  title: 'django-next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={fontMain.style}>{children}</body>
    </html>
  );
}
