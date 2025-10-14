export type Resource = {
  title: string
  url: string
  source?: string
  tags?: string[]
}

export const javaResources: Resource[] = [
  { title: 'The Java™ Tutorials (Official, Archived)', url: 'https://docs.oracle.com/javase/tutorial/', source: 'Oracle', tags: ['Java', 'Basics'] },
  { title: 'Effective Java (Item summaries)', url: 'https://www.baeldung.com/effective-java', source: 'Baeldung', tags: ['Java', 'Best Practices'] },
  { title: 'Java Networking (Sockets) Guide', url: 'https://www.baeldung.com/a-guide-to-java-sockets', source: 'Baeldung', tags: ['Java', 'Networking'] },
  { title: 'NIO vs IO in Java', url: 'https://www.baeldung.com/java-nio-vs-io', source: 'Baeldung', tags: ['Java', 'IO'] },
]

export const jsResources: Resource[] = [
  { title: 'You Don’t Know JS (book series)', url: 'https://github.com/getify/You-Dont-Know-JS', source: 'GitHub', tags: ['JavaScript', 'Deep Dive'] },
  { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', source: 'MDN', tags: ['JavaScript', 'Reference'] },
  { title: 'Understanding the Event Loop', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop', source: 'MDN', tags: ['JavaScript', 'Concurrency'] },
  { title: 'Async/Await in Depth', url: 'https://javascript.info/async-await', source: 'javascript.info', tags: ['JavaScript', 'Async'] },
]

