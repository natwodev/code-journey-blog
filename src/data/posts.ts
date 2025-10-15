export type Post = {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image?: string
  externalUrl?: string
}

export const posts: Post[] = [
  {
    id: 'java-networking-co-ban',
    title: 'Java Networking cơ bản: Socket, TCP/UDP, NIO',
    excerpt: 'Hiểu đúng socket, mô hình TCP/UDP và điểm khác biệt với NIO để viết ứng dụng mạng ổn định.',
    date: '2025-10-01',
    tags: ['Java', 'Networking'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'rest-api-thuc-chien',
    title: 'Thiết kế REST API “sạch”: versioning, hợp đồng, lỗi chuẩn',
    excerpt: 'Các nguyên tắc giúp API dễ bảo trì: cấu trúc URL, status code, phân trang, lọc và phân quyền.',
    date: '2025-10-03',
    tags: ['API', 'Backend'],
    image: 'https://images.unsplash.com/photo-1558494949-28f2f32f9a3a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'javascript-modern',
    title: 'JavaScript hiện đại: từ let/const tới async/await',
    excerpt: 'Tóm tắt nhanh các tính năng ES6+ bạn dùng hằng ngày, kèm ví dụ dễ áp dụng.',
    date: '2025-10-04',
    tags: ['JavaScript'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'react-ui-readable',
    title: 'React UI dễ đọc: layout, khoảng trắng và nhịp typographic',
    excerpt: 'Mẹo sắp xếp thẻ bài viết để người đọc “lướt” và “dừng” đúng chỗ.',
    date: '2025-10-05',
    tags: ['React', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1529336953121-a0ce23d12e25?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'toi-uu-react-render',
    title: 'Tối ưu render React: khi nào nên memo/useMemo/useCallback?',
    excerpt: 'Nhận diện điểm nghẽn re-render và áp dụng tối ưu đúng nơi, tránh premature optimization.',
    date: '2025-10-06',
    tags: ['React', 'Performance'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'threejs-nhe-nhang',
    title: 'Three.js “nhẹ nhàng”: hiệu ứng 3D vừa đủ cho trang web',
    excerpt: 'Chiến lược dùng ít polygon, texture và ánh sáng để giữ FPS cao nhưng vẫn ấn tượng.',
    date: '2025-10-07',
    tags: ['Three.js', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1517694712202-6f3c1c6f8b18?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'tai-nguyen-lap-trinh',
    title: 'Nguồn tài nguyên lập trình nên theo dõi 2025',
    excerpt: 'Tổng hợp các blog, newsletter và repo hữu ích để bạn cập nhật kỹ năng liên tục.',
    date: '2025-10-08',
    tags: ['Learning'],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop'
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
