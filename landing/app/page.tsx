import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* GitHub Corner Ribbon */}
      <a
        href="https://github.com/iampqh/rusty-voz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          border: 0,
          width: '80px',
          height: '80px',
          zIndex: 10,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{ fill: '#151513', color: '#fff' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: '130px 106px' }}
            className="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          />
        </svg>
      </a>

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
