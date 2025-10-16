export type Post = {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image?: string
  externalUrl?: string
  content?: string
}

export const posts: Post[] = [
  {
    id: 'java-networking-co-ban',
    title: 'Java Networking cơ bản: Socket, TCP/UDP, NIO',
    excerpt: 'Hiểu đúng socket, mô hình TCP/UDP và điểm khác biệt với NIO để viết ứng dụng mạng ổn định.',
    date: '2025-10-01',
    tags: ['Java', 'Networking'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    content: 'Trong bài viết này, chúng ta sẽ đi từ Socket cơ bản tới mô hình TCP/UDP và giới thiệu NIO.\n\nBạn sẽ hiểu khi nào nên dùng TCP cho độ tin cậy và khi nào UDP cho độ trễ thấp, cách quản lý buffer và tránh blocking IO.'
  },
  {
    id: 'rest-api-thuc-chien',
    title: 'Thiết kế REST API “sạch”: versioning, hợp đồng, lỗi chuẩn',
    excerpt: 'Các nguyên tắc giúp API dễ bảo trì: cấu trúc URL, status code, phân trang, lọc và phân quyền.',
    date: '2025-10-03',
    tags: ['API', 'Backend'],
    image: 'https://images.unsplash.com/photo-1558494949-28f2f32f9a3a?q=80&w=1600&auto=format&fit=crop',
    content: 'Để API dễ phát triển dài hạn, hãy: chuẩn hóa lỗi với mã và thông điệp rõ ràng;\n\nDùng version trên URL hoặc header; kiểm soát phân trang và lọc; và mô tả hợp đồng bằng OpenAPI.'
  },
  {
    id: 'javascript-modern',
    title: 'JavaScript hiện đại: từ let/const tới async/await',
    excerpt: 'Tóm tắt nhanh các tính năng ES6+ bạn dùng hằng ngày, kèm ví dụ dễ áp dụng.',
    date: '2025-10-04',
    tags: ['JavaScript'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    content: 'ES6+ đem tới let/const, arrow function, destructuring, module, promise và async/await.\n\nNên ưu tiên const, dùng await để code bất đồng bộ dễ đọc hơn.'
  },
  {
    id: 'react-ui-readable',
    title: 'React UI dễ đọc: layout, khoảng trắng và nhịp typographic',
    excerpt: 'Mẹo sắp xếp thẻ bài viết để người đọc “lướt” và “dừng” đúng chỗ.',
    date: '2025-10-05',
    tags: ['React', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1529336953121-a0ce23d12e25?q=80&w=1600&auto=format&fit=crop',
    content: 'Giữ khoảng trắng, hệ lưới đều đặn, hạn chế độ dài dòng, và dùng hierarchy heading rõ ràng để dẫn dắt mắt đọc.'
  },
  {
    id: 'toi-uu-react-render',
    title: 'Tối ưu render React: khi nào nên memo/useMemo/useCallback?',
    excerpt: 'Nhận diện điểm nghẽn re-render và áp dụng tối ưu đúng nơi, tránh premature optimization.',
    date: '2025-10-06',
    tags: ['React', 'Performance'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
    content: 'Dùng React.memo khi props ổn định; useMemo cho tính toán nặng; useCallback cho callback truyền xuống;\n\nĐo lường bằng React DevTools Profiler trước khi tối ưu.'
  },
  {
    id: 'threejs-nhe-nhang',
    title: 'Three.js “nhẹ nhàng”: hiệu ứng 3D vừa đủ cho trang web',
    excerpt: 'Chiến lược dùng ít polygon, texture và ánh sáng để giữ FPS cao nhưng vẫn ấn tượng.',
    date: '2025-10-07',
    tags: ['Three.js', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1517694712202-6f3c1c6f8b18?q=80&w=1600&auto=format&fit=crop',
    content: 'Giảm số polygon, bật texture compression, dùng ánh sáng đơn giản và tránh post-processing nặng để giữ FPS mượt.'
  },
  {
    id: 'tai-nguyen-lap-trinh',
    title: 'Nguồn tài nguyên lập trình nên theo dõi 2025',
    excerpt: 'Tổng hợp các blog, newsletter và repo hữu ích để bạn cập nhật kỹ năng liên tục.',
    date: '2025-10-08',
    tags: ['Learning'],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    content: 'Danh sách nguồn đáng theo dõi: newsletter kỹ thuật, blog nền tảng, kênh YouTube chất lượng, và repo tổng hợp.'
  },
  {
    id: 'baeldung-java-networking',
    title: 'Baeldung – Java Networking (Socket, TCP/UDP, NIO)',
    excerpt: 'Hệ thống bài viết chất lượng cao về lập trình mạng trong Java.',
    date: '2025-10-09',
    tags: ['Java', 'Networking'],
    image: 'https://www.baeldung.com/wp-content/themes/baeldung/img/baeldung-logo.png',
    externalUrl: 'https://www.baeldung.com/java-sockets'
  },
  {
    id: 'mdn-javascript-guide',
    title: 'MDN – JavaScript Guide & Blog',
    excerpt: 'Tài liệu và bài viết cập nhật từ Mozilla về JavaScript và Web APIs.',
    date: '2025-10-10',
    tags: ['JavaScript'],
    image: 'https://developer.mozilla.org/static/img/opengraph-logo.dc4e08e2f6af.png',
    externalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  }
]
