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
    name: 'Hệ thống quản lí nhân sự sử dụng winform devexpress',
    summary: 'Ứng dụng quản lý nhân sự xây dựng bằng WinForms + DevExpress: quản lý hồ sơ, phòng ban, chấm công và phân quyền cơ bản.',
    tech: ['C#', 'WinForms', 'DevExpress', 'SQL Server'],
    link: 'https://example.com/chat'
  },
  {
    id: 'js-visualizer',
    name: 'Hệ thống hỗ trợ phúc khảo',
    summary: 'Nền tảng phúc khảo bài thi: portal web .NET cho quản trị, ứng dụng Flutter cho sinh viên đăng ký và theo dõi.',
    tech: ['C#', '.NET', 'Flutter', 'Dart'],
  },
  {
    id: 'react-portfolio',
    name: 'Hệ thống thi trắc nghiệm trực tuyến',
    summary: 'Nền tảng thi trực tuyến hiệu năng cao: Blazor cho UI, Redis cache cho session và tốc độ, RabbitMQ cho xử lý hàng đợi.',
    tech: ['C#', '.NET', 'Blazor', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'flutter-quiz-app',
    name: 'Ứng dụng thi trắc nghiệm (Mobile - Flutter/Dart)',
    summary: 'Ứng dụng thi trắc nghiệm di động xây dựng bằng Flutter/Dart: đăng nhập, làm bài, chấm điểm và xem kết quả.',
    tech: ['Flutter', 'Dart']
  }
]

