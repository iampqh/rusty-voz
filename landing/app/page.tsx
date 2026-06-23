import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem', background: 'linear-gradient(to bottom, #f9fafb, #fff)' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Rusty Voz</h1>
        <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Ứng dụng di động không chính thức cho Voz.vn<br />
          Trải nghiệm native mượt mà trên Android
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.iamqh.rusty.voz"
            style={{ display: 'inline-block' }}
            aria-label="Get it on Google Play"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{ height: '54px', width: 'auto' }}
            />
          </a>
          <a
            href="https://github.com/iampqh/rusty-voz"
            style={{
              background: '#fff', color: '#000', padding: '0.75rem 1.5rem',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 600,
              border: '1px solid #e5e7eb'
            }}
          >
            Xem trên GitHub
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Ảnh chụp màn hình</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {['f33', 'categories', 'native_thread', 'reply', 'react'].map((name) => (
            <div key={name} style={{ width: '160px', height: '320px', background: '#f3f4f6', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src={`https://raw.githubusercontent.com/iampqh/rusty-voz/main/screenshot/${name}.jpg`}
                alt={name}
                width={160}
                height={320}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 2rem', background: '#f9fafb' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>Tính năng</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { title: 'Đăng nhập & Bảo mật', desc: 'Hỗ trợ username/password và Two-Factor Authentication (2FA)' },
            { title: 'Duyệt diễn đàn', desc: 'Xem bài viết theo category, đặc biệt F33 - Điểm báo' },
            { title: 'Tương tác nội dung', desc: 'Trả lời bài viết, react emoji, lưu favorites' },
            { title: 'Dark Mode', desc: 'Giao diện tối bảo vệ mắt' },
            { title: 'Hiệu suất cao', desc: 'Rust backend xử lý mạng và parsing cực nhanh' },
            { title: 'Cache thông minh', desc: 'Cache hình ảnh và nội dung, tối ưu pin và dữ liệu' },
          ].map((f) => (
            <div key={f.title} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: '#6b7280', margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Tải về</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Phiên bản mới nhất có sẵn trên GitHub Releases
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.iamqh.rusty.voz"
            style={{ display: 'inline-block' }}
            aria-label="Get it on Google Play"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{ height: '80px', width: 'auto' }}
            />
          </a>
          <span style={{
            background: '#f3f4f6', color: '#6b7280', padding: '1rem 2rem',
            borderRadius: '8px', fontWeight: 600
          }}>
            iOS - Đang phát triển
          </span>
        </div>
      </section>

      {/* System Requirements */}
      <section style={{ padding: '3rem 2rem', background: '#f9fafb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Yêu cầu hệ thống</h2>
        <p style={{ color: '#6b7280' }}>Android 5.0 (Lollipop) hoặc cao hơn</p>
      </section>
    </main>
  )
}
