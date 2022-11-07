import Script from 'next/script'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head></head>
            <body>{children}</body>
            {/* it does not matter which script we are loading here, imagine it is not required for app code but need as 3party eg. after interactivity */}
            <Script strategy="afterInteractive" src="https://code.jquery.com/jquery-3.6.1.min.js" />
        </html>
    )
}

export default RootLayout
