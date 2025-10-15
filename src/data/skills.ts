export type TimelineItem = {
  id: string
  year: string
  title: string
  desc: string
}

export const timeline: TimelineItem[] = [
  { id: 'hs', year: '2022', title: 'Bắt đầu học lập trình', desc: 'Làm quen với Java và JavaScript căn bản.' },
  { id: 'uni', year: '2023', title: 'Mạng máy tính & Java Networking', desc: 'Socket, TCP/UDP, xây dựng demo chat.' },
  { id: 'proj', year: '2024', title: 'Dự án React + Three.js', desc: 'Xây portfolio 3D nhẹ và blog chia sẻ.' },
  { id: 'intern', year: '2025', title: 'Thực tập Web', desc: 'Tham gia team FE, tối ưu hiệu năng React.' },
]

export const skills = [
  { name: 'Java' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'C#' },
  { name: '.NET' },
  { name: 'Blazor' },
  { name: 'SQL Server' },
  { name: 'Flutter' },
  { name: 'Dart' },
  { name: 'Redis' },
  { name: 'RabbitMQ' },
  { name: 'Networking' },
  { name: 'Three.js' },
]

export const certifications = [
  { issuer: 'Cisco', name: 'CCNA: Introduction to Networks' },
  { issuer: 'Cisco', name: 'CCNA: Switching, Routing, and Wireless Essentials' },
  { issuer: 'Cisco', name: 'CCNA: Enterprise Networking, Security, and Automation' },
]

