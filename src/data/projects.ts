export type Project = {
  id: string
  name: string
  summary: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'net-chat-java',
    name: 'Java TCP Chat Room',
    summary: 'Ứng dụng chat phòng sử dụng Java Socket, hỗ trợ nhiều client.',
    tech: ['Java', 'TCP', 'Socket'],
    link: 'https://example.com/chat'
  },
  {
    id: 'js-visualizer',
    name: 'JS Algorithm Visualizer',
    summary: 'Trình trực quan hoá thuật toán sắp xếp bằng JavaScript + Canvas.',
    tech: ['JavaScript', 'Canvas'],
  },
  {
    id: 'react-portfolio',
    name: 'React Portfolio',
    summary: 'Website portfolio hiện đại với animation và dark mode.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
  }
]

