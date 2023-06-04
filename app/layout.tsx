import '../style/globals.css'
import Navigation from '../components/Navigation'
import Blob from '../components/Blob'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Sarthak Malla | Software Engineer | Full Stack Developer',
  description: 'Sarthak Malla is a Software Engineer and Full Stack Developer based in Nepal.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return (
    <html lang="en">
      <body className='flex flex-col'>
        {/* <Blob /> */}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
