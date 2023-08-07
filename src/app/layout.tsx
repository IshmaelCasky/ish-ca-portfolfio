export const metadata = {
  title: 'Ishmael Cascabel',
  description: 'providing innovative projects that solve problems one code at a time',
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
