export const metadata = {
  title: 'helloNextJs',
  description: 'how nextjs work ?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
