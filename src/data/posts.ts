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
    id: 'baeldung-java-networking',
    title: 'Baeldung – Java Networking (Socket, TCP/UDP, NIO)',
    excerpt: 'Hệ thống bài viết chất lượng cao về lập trình mạng trong Java.',
    date: '2025-10-05',
    tags: ['Java', 'Networking'],
    image: 'https://www.baeldung.com/wp-content/themes/baeldung/img/baeldung-logo.png',
    externalUrl: 'https://www.baeldung.com/java-sockets'
  },
  {
    id: 'dev-java-articles',
    title: 'dev.java – Official Java Articles',
    excerpt: 'Bài viết chính thức từ đội Java (Oracle) về tính năng và best practices.',
    date: '2025-10-06',
    tags: ['Java'],
    image: 'https://dev.java/assets/images/logo.svg',
    externalUrl: 'https://dev.java/learn/'
  },
  {
    id: 'mdn-javascript-guide',
    title: 'MDN – JavaScript Guide & Blog',
    excerpt: 'Tài liệu và bài viết cập nhật từ Mozilla về JavaScript và Web APIs.',
    date: '2025-10-06',
    tags: ['JavaScript'],
    image: 'https://developer.mozilla.org/static/img/opengraph-logo.dc4e08e2f6af.png',
    externalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 'javascript-info',
    title: 'javascript.info – Modern JavaScript Tutorial',
    excerpt: 'Chuỗi bài viết chất lượng, từ cơ bản tới nâng cao về JS hiện đại.',
    date: '2025-10-06',
    tags: ['JavaScript'],
    image: 'https://javascript.info/img/site/social.png',
    externalUrl: 'https://javascript.info/'
  },
  {
    id: 'react-performance',
    title: 'Tối ưu hiệu năng React: memo, useMemo, useCallback',
    excerpt: 'Các kỹ thuật tối ưu render và chiến lược tách component.',
    date: '2025-10-10',
    tags: ['React']
  }
]
