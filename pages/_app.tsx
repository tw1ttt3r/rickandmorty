import BaseLayout from '@/layouts/Base.layout';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <BaseLayout>
      <section className="w-screen h-screen bg-black">
        <Component {...pageProps} />
      </section>
    </BaseLayout>

  ) 
}

export default MyApp
