# Rusty Voz

[English](README_EN.md) | **Tiếng Việt**

<div align="center">

![Rusty Voz Logo](screenshot/logo.png)

**Ứng dụng di động không chính thức cho Voz.vn**

[![Flutter](https://img.shields.io/badge/Flutter-3.10+-02569B?logo=flutter)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.10+-0175C2?logo=dart)](https://dart.dev)
[![Rust](https://img.shields.io/badge/Rust-1.92+-000000?logo=rust)](https://www.rust-lang.org)

</div>

## Giới thiệu

Rusty Voz là một ứng dụng di động không chính thức được phát triển để mang lại trải nghiệm tốt nhất khi truy cập diễn đàn [Voz.vn](https://voz.vn) - một trong những cộng đồng trực tuyến lớn nhất Việt Nam.

Ứng dụng kết hợp sức mạnh của **Flutter** cho giao diện người dùng mượt mà và **Rust** cho hiệu suất cao khi xử lý mạng và phân tích dữ liệu, mang lại trải nghiệm native như thật.

Đọc thêm **devlog** của ứng dụng: https://blog.iamqh.io.vn/posts/rusty-voz-devlog

## Tính năng chính

### Đăng nhập & Bảo mật
- :key: Đăng nhập bằng username/password
- :shield: Hỗ trợ Two-Factor Authentication (2FA)
- :lock: Quản lý session an toàn với secure storage

### Duyệt diễn đàn
- :newspaper: Xem các bài viết theo category (đặc biệt là F33 - "Điểm báo")
- :books: Đọc thread và bài viết với giao diện tối ưu
- :page_facing_up: Hỗ trợ pagination thông minh để tải nội dung hiệu quả

### Tương tác nội dung
- :pencil2: Trả lời bài viết với editor hỗ trợ HTML
- :heart: Thao tác cảm xúc (react) với emoji
- :star: Lưu bài viết yêu thích vào Favorites
- :speech_balloon: Xem và quản lý tin nhắn riêng (Conversations)

### Hiển thị nội dung phong phú
- :art: Hỗ trợ HTML, code blocks, spoilers, tables
- :framed_picture: Hiển thị ảnh và embedded content
- :wrench: Code syntax highlighting
- :dark_sunglasses: Dark Mode bảo vệ mắt

### Hiệu suất
- :rocket: Rust backend xử lý mạng và parsing cực nhanh
- :zap: Cache hình ảnh và nội dung
- :battery: Tối ưu pin và dữ liệu

## Ảnh chụp màn hình

| F33 | Categories | Threads |
|--------|------------|-------------|
| ![F33](screenshot/f33.jpg) | ![Categories](screenshot/categories.jpg) | ![Threads](screenshot/native_thread.jpg) |

| Reply | React | Conversations |
|---------------|--------------|-----------|
| ![Reply](screenshot/reply.jpg) | ![React](screenshot/react.jpg) | ![Conversations](screenshot/conversations.jpg) |

## Tải về

### Android

Phiên bản mới nhất sẽ có sẵn tại phần [Releases](https://github.com/iampqh/rusty-voz/releases).

### iOS

Đang phát triển...

## Yêu cầu hệ thống

- **Android**: Android 5.0 (Lollipop) hoặc cao hơn
- **iOS**: iOS 12.0 hoặc cao hơn (sẽ có)

## Cách sử dụng

1. Tải và cài đặt ứng dụng từ phần [Releases](https://github.com/iampqh/rusty-voz/releases)
2. Mở ứng dụng và đăng nhập bằng tài khoản Voz.vn của bạn
3. Nếu bạn có bật 2FA, ứng dụng sẽ yêu cầu mã xác thực
4. Bắt đầu khám phá và tương tác với cộng đồng Voz.vn!

## Báo cáo vấn đề

Nếu bạn gặp bất kỳ vấn đề gì hoặc muốn đề xuất tính năng mới, vui lòng tạo một issue tại đây:

- [Báo cáo Bug](https://github.com/iampqh/rusty-voz/issues/new?template=bug_report.md)
- [Đề xuất tính năng](https://github.com/iampqh/rusty-voz/issues/new?template=feature_request.md)

Khi tạo issue, vui lòng cung cấp:
- Phiên bản ứng dụng bạn đang sử dụng
- Thiết bị và hệ điều hành
- Mô tả chi tiết vấn đề
- Ảnh chụp màn hình hoặc log lỗi (nếu có)

## Roadmap

### Đang phát triển
- [ ] :construction: Advance reply editor (hỗ trợ hình ảnh)
- [ ] :construction: Tạo thread mới ngay trên mobile
- [ ] :construction: Multi-quotes (trả lời nhiều bài viết cùng lúc)

### Kế hoạch
- [x] :clipboard: User features (thông tin user, ignore, tin nhắn trực tiếp)
- [x] :clipboard: Hỗ trợ nhiều tài khoản (multi-users)
- [x] :moon: Dark mode tối ưu
- [ ] :bookmark: Quản lý lịch sử xem threads
- [x] :bell: Thông báo push cho các phản hồi mới
- [x] :mag_right: Tìm kiếm threads và bài viết
- [ ] :arrow_forward: Tự động tải video và GIF
- [ ] :wastebasket: Xóa và chỉnh sửa bài viết đã đăng
- [ ] :chart_with_upwards_trend: Thống kê hoạt động cá nhân
- [ ] :iphone: Phiên bản iOS

## FAQ

**Rusty Voz có phải ứng dụng chính thức của Voz.vn không?**

Không, đây là ứng dụng không chính thức được phát triển bởi cộng đồng.

**Ứng dụng có miễn phí không?**

Có, Rusty Voz hoàn toàn miễn phí.

**Tôi có cần tài khoản Voz.vn để sử dụng không?**

Bạn có thể xem các bài viết công khai mà không cần đăng nhập, nhưng cần tài khoản để tương tác (đăng bài, bình luận, v.v.).

**Ứng dụng có lưu username/password của tôi không?**

Không. Ứng dụng chỉ lưu thông tin đăng nhập an toàn thông qua secure storage của hệ điều hành để duy trì phiên đăng nhập. Mật khẩu của bạn không bao giờ được lưu trữ dưới dạng plain text và không được gửi đến bất kỳ máy chủ nào ngoài Voz.vn.

## Lưu ý

- Rusty Voz không liên kết hay được bảo chứng bởi Voz.vn
- Voz và logo Voz là tài sản của respective owners
- Ứng dụng tuân thủ Terms of Service của Voz.vn

## Liên hệ

Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ qua:
- GitHub Issues: [github.com/iampqh/rusty-voz/issues](https://github.com/iampqh/rusty-voz/issues)

---

<div align="center">

Made with :heart: by iamqh

**[⬆ Back to Top](#rusty-voz)**

</div>
