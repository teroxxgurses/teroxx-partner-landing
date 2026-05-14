import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teroxx Partner Qualifikation - Werden Sie Finanzberater Partner',
  description: 'Prüfen Sie in 60 Sekunden, ob Sie sich als Partner für eine moderne Digital Asset Boutique qualifizieren.',
  keywords: 'Partner, Finanzberater, Digital Assets, Wealth Management',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Teroxx Partner Qualifikation',
    description: 'Werden Sie Teil der Teroxx Partner Community',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_PIXEL_ID"}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID'}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body className="bg-gradient-to-b from-teroxx-dark-blue to-teroxx-blue min-h-screen">
        {children}
      </body>
    </html>
  )
}
