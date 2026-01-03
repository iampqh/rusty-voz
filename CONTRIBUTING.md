# Đóng góp cho Rusty Voz

Cảm ơn bạn quan tâm đến việc đóng góp cho Rusty Voz! Chúng tôi rất trân trọng mọi sự giúp đỡ từ cộng đồng.

## Cách đóng góp

### Báo cáo vấn đề

Nếu bạn tìm thấy lỗi hoặc muốn đề xuất tính năng mới:

1. Kiểm tra xem issue đã tồn tại chưa [tại đây](https://github.com/iampqh/rusty-voz/issues)
2. Nếu chưa, hãy tạo issue mới sử dụng một trong các template:
   - **Bug Report**: Báo cáo lỗi
   - **Feature Request**: Đề xuất tính năng
   - **Question**: Đặt câu hỏi

### Phát triển

Nếu bạn muốn đóng góp code:

1. **Fork** repository này
2. Tạo **branch** mới cho tính năng của bạn
   ```bash
   git checkout -b feature/tinh-moi-cua-ban
   ```
3. **Commit** thay đổi của bạn
   ```bash
   git commit -m "Add: tính năng mới"
   ```
4. **Push** lên branch
   ```bash
   git push origin feature/tinh-moi-cua-ban
   ```
5. Tạo **Pull Request** tại GitHub

## Tiêu chuẩn code

### Dart/Flutter

- Tuân thủ [Flutter style guide](https://flutter.dev/docs/development/data-and-backend/code-style)
- Sử dụng `flutter analyze` để kiểm tra code
- Format code với `dart format`

### Rust

- Tuân thủ [Rust style guide](https://rust-lang.github.io/api-guidelines/)
- Sử dụng `cargo fmt` để format code
- Sử dụng `cargo clippy` để kiểm tra code

## Commit message

Sử dụng các prefix sau cho commit message:

- `Add:` - Thêm tính năng mới
- `Fix:` - Sửa lỗi
- `Update:` - Cập nhật tính năng hoặc code
- `Refactor:` - Tái cấu trúc code
- `Docs:` - Cập nhật tài liệu
- `Test:` - Thêm hoặc sửa tests
- `Chore:` - Các công việc khác

Ví dụ:
```
Add: dark mode toggle
Fix: login crash on Android 12
Update: dependencies to latest versions
```

## Pull Request Guidelines

- Mô tả rõ ràng về những gì PR thay đổi
- Thêm ảnh chụp màn hình nếu có thay đổi UI
- Đảm bảo tất cả tests pass
- Giải quyết các conflicts nếu có
- Chờ maintainers review

## Liên hệ

Nếu bạn có bất kỳ câu hỏi nào về việc đóng góp, hãy:
- Tạo issue với nhãn "question"
- hoặc liên hệ với maintainer

Cảm ơn bạn đã đóng góp cho Rusty Voz! 🎉
