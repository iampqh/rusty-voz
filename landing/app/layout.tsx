import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rusty Voz - Ứng dụng di động không chính thức cho Voz.vn',
  description: 'Rusty Voz là ứng dụng di động không chính thức mang lại trải nghiệm tốt nhất khi truy cập diễn đàn Voz.vn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>Rusty Voz</div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/" style={{ color: '#374151', textDecoration: 'none' }}>Trang chủ</a>
            <a href="/privacy" style={{ color: '#374151', textDecoration: 'none' }}>Chính sách quyền riêng tư</a>
          </nav>
        </header>
        {children}
        <footer style={{ borderTop: '1px solid #e5e7eb', padding: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
          <p>Made with ❤️ by iamqh</p>
          <p>Đây là ứng dụng không chính thức, không liên kết với Voz.vn</p>
        </footer>
      </body>
    </html>
  )
}
