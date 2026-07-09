'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const sourceUrl = 'https://raw.githubusercontent.com/iampqh/rusty-voz/main/apps.json'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sourceUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

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
          Trải nghiệm native mượt mà trên Android &amp; iOS
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
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
          
          {/* AltStore Hero Badge */}
          <a
            href="altstore://source?url=https://raw.githubusercontent.com/iampqh/rusty-voz/main/apps.json"
            aria-label="Add to AltStore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#1a1a2e',
              color: '#fff',
              padding: '0 1.25rem',
              borderRadius: '10px',
              height: '54px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#4A90D9"/>
              <path d="M12 7v10M7 12l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '0.65rem', opacity: 0.8, fontWeight: 400 }}>Add to</span>
              AltStore
            </span>
          </a>

          {/* SideStore Hero Badge */}
          <a
            href="sidestore://source?url=https://raw.githubusercontent.com/iampqh/rusty-voz/main/apps.json"
            aria-label="Add to SideStore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#1a1a2e',
              color: '#fff',
              padding: '0 1.25rem',
              borderRadius: '10px',
              height: '54px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#A855F7"/>
              <path d="M12 7v10M7 12l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '0.65rem', opacity: 0.8, fontWeight: 400 }}>Add to</span>
              SideStore
            </span>
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
          Tải phiên bản mới nhất cho thiết bị của bạn
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Android */}
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#374151' }}>Android</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.iamqh.rusty.voz"
              style={{ display: 'inline-block' }}
              aria-label="Get it on Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: '64px', width: 'auto' }}
              />
            </a>
          </div>

          {/* iOS (AltStore / SideStore) */}
          <div style={{ textAlign: 'center', minWidth: '220px' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#374151' }}>iOS (AltStore / SideStore)</p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <a
                href="altstore://source?url=https://raw.githubusercontent.com/iampqh/rusty-voz/main/apps.json"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#1a1a2e',
                  color: '#fff',
                  padding: '0 1rem',
                  borderRadius: '10px',
                  height: '60px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#4A90D9"/>
                  <path d="M12 7v10M7 12l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ lineHeight: 1.2, textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: '0.6rem', opacity: 0.8, fontWeight: 400 }}>Add to</span>
                  AltStore
                </span>
              </a>

              <a
                href="sidestore://source?url=https://raw.githubusercontent.com/iampqh/rusty-voz/main/apps.json"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#1a1a2e',
                  color: '#fff',
                  padding: '0 1rem',
                  borderRadius: '10px',
                  height: '60px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#A855F7"/>
                  <path d="M12 7v10M7 12l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ lineHeight: 1.2, textAlign: 'left' }}>
                  <span style={{ display: 'block', fontSize: '0.6rem', opacity: 0.8, fontWeight: 400 }}>Add to</span>
                  SideStore
                </span>
              </a>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#9ca3af' }}>
              Hoặc{' '}
              <a
                href="https://github.com/iampqh/rusty-voz/releases"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#6b7280', textDecoration: 'underline' }}
              >
                tải file .ipa trực tiếp
              </a>
              {' • '}
              <button
                onClick={handleCopy}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copied ? '#10b981' : '#6b7280',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: copied ? 600 : 'normal',
                }}
              >
                {copied ? 'Đã sao chép link Source! ✓' : 'Sao chép link Source'}
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* iOS Installation Guide */}
      <section style={{ padding: '3rem 2rem', background: '#f0f4ff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Hướng dẫn cài đặt trên iOS</h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
          AltStore &amp; SideStore cho phép bạn tự ký và cài đặt ứng dụng mà không cần qua App Store bằng tài khoản Apple ID cá nhân miễn phí.
        </p>
        <ol style={{ textAlign: 'left', maxWidth: '460px', margin: '0 auto', color: '#374151', lineHeight: 1.8, paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
          <li>Cài đặt <a href="https://altstore.io" target="_blank" rel="noopener noreferrer" style={{ color: '#4A90D9', fontWeight: 600, textDecoration: 'none' }}>AltStore</a> hoặc <a href="https://sidestore.io" target="_blank" rel="noopener noreferrer" style={{ color: '#A855F7', fontWeight: 600, textDecoration: 'none' }}>SideStore</a> trên điện thoại.</li>
          <li>Nhấn vào nút <strong>Add to AltStore/SideStore</strong> ở trên, hoặc <button onClick={handleCopy} style={{ background: 'none', border: 'none', color: copied ? '#10b981' : '#4A90D9', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit' }}>{copied ? 'Sao chép thành công! ✓' : 'sao chép link Source này'}</button> để thêm thủ công vào app.</li>
          <li>Trong ứng dụng của bạn, chọn tab <strong>Browse</strong> hoặc <strong>Sources</strong>, bạn sẽ thấy <strong>Rusty Voz</strong>.</li>
          <li>Nhấp <strong>Install</strong>, đăng nhập Apple ID của bạn để tiến hành cài đặt ứng dụng.</li>
        </ol>
      </section>

      {/* System Requirements */}
      <section style={{ padding: '3rem 2rem', background: '#f9fafb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Yêu cầu hệ thống</h2>
        <p style={{ color: '#6b7280', margin: '0.25rem 0' }}>Android 5.0 (Lollipop) hoặc cao hơn</p>
        <p style={{ color: '#6b7280', margin: '0.25rem 0' }}>iOS 12.0 hoặc cao hơn (thông qua AltStore / SideStore)</p>
      </section>
    </main>
  )
}
