export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Chính sách quyền riêng tư</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Cập nhật lần cuối: Tháng 6, 2026</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Giới thiệu</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Rusty Voz (&quot;ứng dụng&quot;, &quot;chúng tôi&quot;) là ứng dụng di động không chính thức dành cho diễn đàn Voz.vn.
          Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi xử lý dữ liệu.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Thông tin chúng tôi thu thập</h2>
        <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1rem' }}>
          <strong>Thông tin tài khoản:</strong> Khi bạn đăng nhập, chúng tôi lưu trữ thông tin phiên của bạn
          một cách an toàn trên thiết bị của bạn thông qua secure storage của hệ điều hành. Chúng tôi KHÔNG lưu
          trữ mật khẩu của bạn dưới bất kỳ hình thức nào.
        </p>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          <strong>Dữ liệu sử dụng:</strong> Ứng dụng giao tiếp trực tiếp với máy chủ Voz.vn. Chúng tôi không thu
          thập, lưu trữ hay xử lý bất kỳ dữ liệu cá nhân nào của bạn trên máy chủ của bên thứ ba.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Sử dụng dữ liệu</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Dữ liệu của bạn chỉ được sử dụng để vận hành ứng dụng và kết nối với dịch vụ Voz.vn.
          Chúng tôi không chia sẻ, bán hay chuyển giao dữ liệu của bạn cho bất kỳ bên thứ ba nào.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Lưu trữ dữ liệu</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị của bạn. Bạn có thể xóa dữ liệu này bất kỳ
          lúc nào bằng cách gỡ cài đặt ứng dụng hoặc xóa cache trong cài đặt ứng dụng.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Bảo mật</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Chúng tôi sử dụng các biện pháp bảo mật tiêu chuẩn của ngành để bảo vệ dữ liệu của bạn.
          Thông tin đăng nhập được mã hóa và lưu trữ an toàn trên thiết bị của bạn thông qua
          secure storage của hệ điều hành.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Cookies</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Ứng dụng không sử dụng cookies. Đăng nhập được xử lý trực tiếp với Voz.vn và
          thông tin phiên được lưu trữ an toàn trên thiết bị của bạn.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Quyền của bạn</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Bạn có quyền truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân của mình. Để thực hiện các
          quyền này, vui lòng gỡ cài đặt ứng dụng hoặc liên hệ với chúng tôi qua GitHub Issues.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Thay đổi chính sách</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Chúng tôi có thể cập nhật chính sách này thỉnh thoảng. Mọi thay đổi sẽ được đăng tải
          trên trang này. Chúng tôi khuyến khích bạn xem lại chính sách này định kỳ.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Liên hệ</h2>
        <p style={{ color: '#374151', lineHeight: 1.7 }}>
          Nếu bạn có câu hỏi về chính sách quyền riêng tư này, vui lòng liên hệ qua{' '}
          <a href="https://github.com/iampqh/rusty-voz/issues" style={{ color: '#2563eb' }}>
            GitHub Issues
          </a>.
        </p>
      </section>
    </main>
  )
}
