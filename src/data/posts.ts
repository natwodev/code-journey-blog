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
    id: 'javascript-tong-quan-cho-nguoi-moi-bat-dau',
    title: 'JavaScript Tổng Quan: Hành Trình Khám Phá Ngôn Ngữ Lập Trình Phổ Biến Nhất Thế Giới',
    excerpt: 'Khám phá JavaScript từ góc độ tổng quan: lịch sử, ưu nhược điểm, và tại sao nó trở thành ngôn ngữ lập trình phổ biến nhất hiện nay.',
    date: '2025-01-15',
    tags: ['JavaScript', 'Programming', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    content: `# JavaScript Tổng Quan: Hành Trình Khám Phá Ngôn Ngữ Lập Trình Phổ Biến Nhất Thế Giới

Bạn muốn học lập trình JavaScript? Đó là một lựa chọn tuyệt vời! Khóa học này sẽ là một hành trình khá dài, nhưng nếu bạn kiên trì đến cuối, bạn sẽ có thể đọc, hiểu và tất nhiên là viết các ứng dụng và chương trình JavaScript. Những khả năng mới này có thể hỗ trợ công việc hiện tại của bạn, hoặc mở ra những cơ hội nghề nghiệp mới trong thị trường IT đang phát triển mạnh mẽ.

## Giao Tiếp Với Máy Tính

Hãy bắt đầu với điều hiển nhiên – máy tính có mặt ở khắp mọi nơi. Bạn đang đọc khóa học này trên máy tính; điện thoại của bạn là một máy tính; bạn sẽ tìm thấy máy tính trong TV và các thiết bị gia dụng khác, như máy hút bụi tự động của bạn, sử dụng máy tính và nhiều cảm biến trong sứ mệnh không ngừng nghỉ để loại bỏ bụi khỏi cuộc sống của bạn.

Chúng ta được bao quanh bởi máy tính. Máy tính được sử dụng trong khoa học, y học, ngân hàng và kinh doanh. Chúng tôi nghi ngờ rằng ngày nay sẽ khó tìm thấy bất kỳ lĩnh vực nào trong cuộc sống mà máy tính không tham gia tích cực.

### Ngôn Ngữ Tự Nhiên vs Ngôn Ngữ Máy

Chúng ta sử dụng máy tính chủ yếu vì chúng có thể thực hiện một số tác vụ nhanh hơn và chính xác hơn con người một cách không thể so sánh được. Tuy nhiên, máy tính không thể đoán được chúng ta có những loại tác vụ nào trong đầu hoặc cách giúp chúng ta thực hiện chúng. Chúng ta phải nói với chúng điều đó. Bằng cách nào? Tốt nhất là làm điều đó theo cách tương tự như khi truyền thông tin cho những người khác, nói cách khác, bằng cách sử dụng ngôn ngữ mà cả hai bên đều hiểu được. Sử dụng ngôn ngữ như vậy, chúng ta viết một chương trình, một giải pháp được hình thức hóa cho vấn đề của chúng ta, có thể được máy tính thực thi.

Thật không may, một ngôn ngữ mà máy tính hiểu trực tiếp sẽ hoàn toàn không thể đọc được đối với một con người bình thường. Nó sẽ là một chuỗi các lệnh kỳ lạ, được viết dưới dạng số, đề cập đến các thành phần máy tính mà chúng ta thậm chí không biết là tồn tại (và thành thật mà nói, chúng ta không nhất thiết phải biết). Cách giao tiếp này, có từ đầu của máy tính, ngày nay được sử dụng cực kỳ hiếm, và chỉ trong những tình huống rất cụ thể.

Vì vậy, để giúp giao tiếp với máy tính, các ngôn ngữ lập trình đã được phát minh, có phần nào đó tương tự như ngôn ngữ tự nhiên (tức là những ngôn ngữ được sử dụng để giao tiếp giữa con người). Có hàng nghìn ngôn ngữ lập trình, và chúng khác nhau về mục đích (ngoài các ngôn ngữ đa mục đích, có nhiều ngôn ngữ chuyên biệt, ví dụ, các ngôn ngữ được thiết kế chỉ để tính toán thống kê), mức độ trừu tượng (nói một cách đơn giản: ngôn ngữ càng cao, chúng ta càng ít cần biết về phần cứng mà chương trình được thực thi), dễ sử dụng, hiệu quả của các chương trình được viết trong chúng, v.v.

## JavaScript Như Một Ngôn Ngữ Thông Dịch

JavaScript là một ngôn ngữ thông dịch điển hình. Nếu chúng ta chạy mã được viết bằng JavaScript trong trình duyệt web, khi nó đang xảy ra, chẳng hạn như sau khi tải trang chúng ta đang đọc (vâng, vâng, có các phần tử được viết bằng JavaScript trên trang này), trình thông dịch sẽ là JavaScript engine được tích hợp sẵn trong trình duyệt. Đây không phải là cách duy nhất để thực thi mã JavaScript.

Có lẽ bạn đã nghe nói về node.js. Nó cũng là một trình thông dịch, nhưng được cài đặt độc lập với trình duyệt như một môi trường trong hệ điều hành máy tính (nó có thể là macOS, Windows hoặc Linux). Sử dụng node.js cho phép bạn viết các chương trình bằng JavaScript sẽ, ví dụ, biến máy tính của bạn thành một máy chủ.

Ở đầu đoạn này, chúng tôi đã đơn giản hóa mọi thứ một chút. JavaScript là một ngôn ngữ thông dịch – không có nghi ngờ gì về điều đó. Và trên thực tế, chạy một chương trình được viết bằng JavaScript trông như thể chúng ta đang thực thi mã nguồn của chúng ta (tức là mã mà chúng ta đã viết) từng bước một. Tuy nhiên, bạn có thể bắt gặp thông tin về ngôn ngữ này, và cụ thể hơn là về các trình thông dịch cụ thể, hơi khác một chút.

Hầu hết các JavaScript engine hiện đại sử dụng kỹ thuật Just In Time Compilation (JIT Compilation). Kỹ thuật này bao gồm việc biên dịch các đoạn mã trong quá trình thực thi chương trình (nhiều hơn một lệnh đơn) và cho phép bạn tăng hiệu suất của nó. Tuy nhiên, từ quan điểm của người dùng, một thay đổi như vậy hầu như không thể nhận thấy – nó vẫn trông như thể chỉ có trình thông dịch đang thực thi mã nguồn, từng lệnh một.

Bất kể ngôn ngữ bạn chọn, một vài điều vẫn giữ nguyên khi viết chương trình. Trước hết, một giai đoạn quan trọng, và có lẽ là khó khăn nhất của quá trình này là định nghĩa chính xác vấn đề chúng ta muốn giải quyết. Chỉ sau đó chúng ta mới cố gắng tìm giải pháp tối ưu, mà cuối cùng chúng ta sẽ trình bày dưới dạng chương trình được viết bằng ngôn ngữ đã chọn.

Vì vậy, trước khi bạn bắt đầu giải thích điều gì đó cho máy tính, nói cách khác, viết chương trình, bạn cần hiểu chính xác những gì bạn muốn đạt được và cách bạn muốn đạt được nó. Thứ hai, giải pháp chúng ta đề xuất và viết dưới dạng chương trình phải 100% không mơ hồ – máy tính không thể đoán bất cứ điều gì.

Một ví dụ đơn giản từ một lĩnh vực hơi khác: tại một số thời điểm trong cuộc đời, bạn có thể đã mua một món đồ nội thất cần lắp ráp. Lắp ráp nó là một vấn đề mà bạn, người mua, đã được gánh vác. Để bạn có thể đối phó với nhiệm vụ này, bạn nhận được một bộ hướng dẫn để hướng dẫn bạn qua toàn bộ quá trình. Bạn đang hành động như một trình thông dịch tại thời điểm này, sử dụng một chương trình sẽ cho phép bạn hoàn thành nhiệm vụ. Thành công của sứ mệnh của bạn phụ thuộc vào chất lượng của những hướng dẫn này, liệu chúng có chính xác và không mơ hồ, và không đến từ một món đồ nội thất khác. Cuối cùng, có thể hóa ra bạn đã xây dựng không phải đồ nội thất trong mơ của bạn, mà là một cấu trúc siêu thực từ một chiều không gian khác.

Để các hướng dẫn tốt, ai đó phát triển chúng phải biết chính xác những gì chúng nên minh họa, theo thứ tự nào các hành động nhất định nên được thực hiện, ở giai đoạn nào điều gì đó dễ nhầm lẫn nhất, v.v. Và tất nhiên, họ phải biết hiệu ứng nào sẽ đạt được ở cuối.

## Thêm Một Vài Lời Về JavaScript

Như chúng tôi đã đề cập trước đó, JavaScript là một ngôn ngữ lập trình thông dịch. Giống như hầu hết các ngôn ngữ thông dịch, nó cũng là một ngôn ngữ cấp cao (tức là tương đối dễ hiểu đối với con người và tách biệt chúng ta khỏi các chi tiết phần cứng).

Trở lại đầu những năm 90, tất cả các trang web đều tĩnh. Mọi thứ thay đổi vào năm 1995 khi tập đoàn Netscape thuê Brendan Eich, và giao nhiệm vụ cho anh ta phát triển một ngôn ngữ mới cho sản phẩm của họ, trình duyệt web Netscape Navigator. Ngôn ngữ mới được gọi là LiveScript, nhưng ngay sau đó tên của nó được đổi thành JavaScript. Nhiệm vụ chính của nó là thêm tính động cho các trang web, điều này sẽ cho phép, ví dụ, tương tác phức tạp hơn với người dùng. Và như vậy sự nghiệp của JavaScript bắt đầu.

## Lập Trình Client-Side vs Server-Side

Việc sử dụng JavaScript trên các trang web, theo thời gian đã trở nên phức tạp hơn và thường chứa logic rất tinh vi, được gọi là lập trình client-side. Mã sẽ được thực thi được tải cùng với trang trong trình duyệt, ở phía người dùng, và trình thông dịch là một phần của trình duyệt web cho phép thực thi nó.

Ngày nay, JavaScript là ngôn ngữ duy nhất được hỗ trợ bởi tất cả các trình duyệt web chính, và khoảng 95% các trang web trên toàn thế giới nhúng mã JavaScript trong chúng. Từ đầu, các trang web sử dụng JavaScript ở phía client để thêm tính tương tác và thay đổi nội dung một cách động.

Bây giờ nó nhiều hơn thế, vì JavaScript cung cấp nhiều framework tuyệt vời để xây dựng các ứng dụng web và mạng xã hội khổng lồ, phức tạp (bạn có thể đã nghe tên các framework như React hoặc Angular).

Tất cả điều này có thể hoạt động trên nhiều loại thiết bị, từ các trạm làm việc hiệu suất cao đến điện thoại thông minh đơn giản. Nhờ sức mạnh của JavaScript, chúng ta có thể đặt thức ăn, chơi các trò chơi dựa trên trình duyệt, xem phim trên các nền tảng streaming, và liên tục liên lạc với những người quan trọng đối với chúng ta. JavaScript phổ biến đến mức ngày càng có nhiều nỗ lực được đưa vào việc sử dụng nó, không chỉ như một giải pháp client-side.

Theo thời gian, JavaScript bắt đầu xuất hiện trong các lĩnh vực khác, chẳng hạn như lập trình các phần server-side của các ứng dụng web phức tạp, còn được gọi là back-end. Những chương trình này được thực thi trên máy chủ, xử lý dữ liệu (ví dụ, từ cơ sở dữ liệu), sau khi xử lý sẽ có sẵn ở phía client. Tính linh hoạt của ngôn ngữ này và sự đơn giản tương đối của nó đã làm cho nó áp dụng nhiều hơn, ví dụ, trong các ứng dụng di động, hoặc thậm chí trong lập trình UAV (một số máy bay không người lái chạy các chương trình được viết bằng ngôn ngữ này).

## Đây Có Phải Là Ngôn Ngữ Lập Trình Hoàn Hảo? – Nhược Điểm

Chúng ta nói rằng JavaScript là một ngôn ngữ trưởng thành, có nghĩa là hầu hết các tính năng đã được triển khai và ổn định, và chúng ta có thể sẽ không thấy bất kỳ thay đổi lớn nào trong ngôn ngữ. Kể từ năm 2015, nhiều khía cạnh của JavaScript đã thay đổi, và nhiều tính năng mới đã được thêm vào. Rất nhiều thay đổi này được giới thiệu để làm cho việc di chuyển sang JavaScript dễ dàng hơn cho các lập trình viên biết các ngôn ngữ phổ biến khác, từ đó JavaScript ban đầu khác biệt khá mạnh trong một số khía cạnh, chẳng hạn như khi xử lý đối tượng. Chúng ta vẫn có thể sử dụng ngôn ngữ theo cách cũ, nhưng được khuyến nghị nên sử dụng JavaScript hiện đại.

Nhưng... không có giải pháp lý tưởng, vì vậy không có ngôn ngữ lập trình tốt cho tất cả các ứng dụng. Mỗi ngôn ngữ đều có những hạn chế riêng, và JavaScript cũng không khác gì. Mặc dù phổ biến và thành công, JavaScript không phải là một ngôn ngữ lập trình hoàn hảo. Do bản chất của nó, nó không phù hợp với một số ứng dụng nhất định. Ví dụ, không có ý nghĩa gì khi sử dụng nó để viết các chương trình yêu cầu tính toán toán học nâng cao hoặc hiệu suất rất cao.

Một số hạn chế là do chính khái niệm của ngôn ngữ, nhưng đại đa số liên quan đến nền tảng mà chúng ta sử dụng nó. Điều này đặc biệt rõ ràng khi viết mã để được thực thi trong trình duyệt, mà như chúng ta đã nói trước đó được gọi là client-side. Trong tình huống như vậy, JavaScript bị hạn chế về chức năng bởi thực tế là trình duyệt, vì lý do bảo mật, chạy mã script trong môi trường sandbox (môi trường tách biệt khỏi thế giới bên ngoài), không cho phép truy cập vào các tệp và tài nguyên cục bộ (tức là những tệp đó trên máy tính nơi trình duyệt được khởi chạy).

Một bất tiện khác là vì mã không được biên dịch, nó đi vào trình duyệt ở dạng giống nhau, hoặc rất giống với những gì chúng ta đã viết. Tại sao đây là một nhược điểm? Điều này là do mọi người đều có thể thấy giải pháp của chúng ta ở dạng dễ đọc và sử dụng nó (cả các đoạn của nó hoặc thậm chí toàn bộ) mà không có sự cho phép của chúng ta để viết chương trình riêng của họ.

Một số trợ giúp ở đây có thể là mã obfuscation, bao gồm việc chuyển đổi script sẵn sàng của chúng ta thành dạng ít đọc được hơn một chút (ví dụ, bằng cách tạo tên ngẫu nhiên ngắn của các biến và hàm, loại bỏ các dấu kết thúc dòng, v.v.), nhưng thực tế đơn giản là nếu ai đó muốn đánh cắp mã JavaScript của chúng ta, có rất ít điều chúng ta có thể làm để ngăn chặn họ.

## Đây Có Phải Là Ngôn Ngữ Lập Trình Hoàn Hảo? – Ưu Điểm

Mặt khác, JavaScript có nhiều ưu điểm so với các ngôn ngữ lập trình khác, và một trong những ưu điểm lớn nhất là một cộng đồng rất tích cực và hỗ trợ. Thật dễ dàng để tìm giải pháp cho các vấn đề phổ biến, và để tìm sự giúp đỡ nói chung. Điều này cũng có nghĩa là các công cụ hoạt động với JavaScript được phát triển tích cực.

Một điểm cộng lớn khác là số lượng lớn các framework và thư viện sẵn sàng sử dụng cung cấp hầu hết các chức năng và tính năng thường được yêu cầu. Bản thân ngôn ngữ tương đối dễ học, và cho phép chúng ta tập trung vào công việc thay vì chiến đấu với cú pháp (tức là cách xây dựng các lệnh tạo nên mã của chương trình chúng ta).

Ngoài ra, JavaScript không yêu cầu bạn mua các công cụ đắt tiền để làm việc với nó, và các công cụ thực sự tốt đã được tích hợp sẵn trong trình duyệt web của bạn. Cuối cùng nhưng không kém phần quan trọng, các ông lớn như Google, Facebook và Mozilla tích cực hỗ trợ các công cụ JavaScript và sự phát triển của chúng.

Tuy nhiên, những gì là ưu điểm đối với một số người có thể hóa ra là nhược điểm đối với những người khác. Một ví dụ có thể là kiểu động đặc trưng của JavaScript. Nói tóm lại, nó bao gồm thực tế là chúng ta có thể lưu trữ dữ liệu của bất kỳ loại nào trong một biến (biến là một container trong đó chúng ta lưu trữ dữ liệu chúng ta sẽ sử dụng).

Ví dụ, trong quá trình thực thi chương trình, chúng ta có thể lưu trữ số 10 trong một biến, và trong bước tiếp theo sử dụng cùng một biến để lưu trữ chuỗi "abc" (xóa giá trị trước đó tự động, tất nhiên – đừng lo lắng nếu bạn không hiểu ngay bây giờ, vì chúng ta sẽ đề cập đến tất cả các thuật ngữ này sau).

Thường thì điều này rất thuận tiện, nhưng một số người đã thấy tính năng này của ngôn ngữ là một nhược điểm. Theo ý kiến của họ, nó làm cho lập trình viên dễ mắc lỗi trong một số tình huống nhất định. Bằng cách thêm kiểu tĩnh, nơi một biến chỉ có thể chứa một loại biến (ví dụ, số) trong quá trình thực thi chương trình, một ngôn ngữ mới được gọi là TypeScript đã được giới thiệu.

Hãy nhớ rằng nếu bạn học lập trình bằng một ngôn ngữ, thường sẽ dễ dàng hơn nhiều để bạn học ngôn ngữ tiếp theo, vì lý do nào đó có thể tốt hơn để giải quyết một vấn đề cụ thể.

Nhưng hãy bắt đầu ngay bây giờ với JavaScript, mà do cú pháp linh hoạt và đơn giản, là hoàn hảo để học như một ngôn ngữ đầu tiên.

## Hãy Chuẩn Bị Để Làm Việc

Như chúng tôi đã đề cập trước đó, JavaScript có thể được sử dụng trong các môi trường khác nhau, mặc dù thường nhất sẽ là trình duyệt web hoặc máy chủ với môi trường node.js.

Mỗi môi trường áp đặt một cách sử dụng ngôn ngữ này hơi khác nhau, và một số cơ chế hoặc hàm đặc trưng cho nó xuất hiện.

Tuy nhiên, phần thiết yếu của ngôn ngữ, cốt lõi của nó, vẫn giữ nguyên.

Trong phần này của khóa học, chúng ta sẽ học cách lập trình sử dụng phần cốt lõi không thay đổi này của JavaScript: cách khai báo biến, viết hàm, lệnh điều kiện hoặc vòng lặp – tất cả điều này sẽ có thể sử dụng như nhau trong bất kỳ môi trường nào mà chúng ta quyết định sử dụng ngôn ngữ này.

Lập trình bằng bất kỳ ngôn ngữ nào không phải là điều dễ học, và bạn có thể cảm thấy choáng ngợp bởi quá nhiều thông tin mới. Nếu bạn kiên trì và tập trung, bạn sẽ viết các script đơn giản trong thời gian ngắn, và không có cách nào khác để học lập trình ngoài việc viết rất nhiều mã.

Quan trọng nhất, đừng bỏ cuộc ngay cả khi bạn bị kẹt: hãy nghỉ ngơi, đi dạo, quay lại với tâm trí tươi mới, và thử lại. Cuối cùng, chậm và chắc sẽ thắng cuộc đua.

Bây giờ, hãy bắt đầu!`
  },
  {
    id: 'javascript-bien-va-khai-bao',
    title: 'JavaScript Biến và Khai Báo: Từ Cơ Bản Đến Nâng Cao',
    excerpt: 'Khám phá cách sử dụng biến trong JavaScript: khai báo, khởi tạo, thay đổi giá trị và hiểu về scope của biến.',
    date: '2025-01-16',
    tags: ['JavaScript', 'Variables', 'Programming'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    content: `# JavaScript Biến và Khai Báo: Từ Cơ Bản Đến Nâng Cao

Khả năng viết các thông tin khác nhau trên màn hình, chẳng hạn như "Hello, World!" có thể thú vị trong một thời gian, nhưng đó không phải là cách phổ quát để viết chương trình. Đã đến lúc bắt đầu tìm hiểu thêm về các yếu tố puzzle sẽ cuối cùng cho phép bạn tạo ra các chương trình giải quyết các vấn đề thực tế.

Có khá nhiều yếu tố như vậy, và chúng ta sẽ giới thiệu chúng dần dần, mặc dù không nhất thiết theo trình tự đơn giản. Chúng ta sẽ thường xuyên quay lại những gì đã được thảo luận, mở rộng thông tin trước đó với một cái gì đó mới. Đôi khi chúng ta cũng sẽ đi về phía trước, sử dụng các cơ chế sẽ chỉ được giải thích chi tiết hơn theo thời gian.

Ban đầu có thể có vẻ hơi choáng ngợp, nhưng theo thời gian mọi thứ sẽ bắt đầu hợp nhất thành một bức tranh mạch lạc.

## Biến - Yếu Tố Đầu Tiên Của Lập Trình

![Variables in JavaScript](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

Yếu tố lập trình đầu tiên mà chúng ta sẽ nói đến là **biến**. Bạn có thể biết tên của biến từ toán học, nơi nó có nghĩa là một ký hiệu được sử dụng như một placeholder cho các giá trị khác nhau có thể thay đổi. Chúng có vai trò tương tự trong lập trình.

### Tại Sao Chúng Ta Cần Biến?

Như bạn có thể đoán, hầu hết các chương trình đều khá phức tạp, và chúng ta hiếm khi có thể giải quyết vấn đề bằng một thao tác duy nhất. Thông thường, chương trình sẽ bao gồm nhiều thao tác hơn, mỗi thao tác có thể tạo ra một số kết quả trung gian, sẽ cần thiết trong các bước tiếp theo. Biến cho phép chúng ta lưu trữ những kết quả như vậy, để sửa đổi chúng, hoặc để đưa chúng vào các thao tác tiếp theo.

## Đặt Tên Cho Biến

Hãy tưởng tượng biến như các container trong đó bạn có thể lưu trữ một số thông tin nhất định (thông tin như vậy sẽ được gọi là giá trị biến). Mỗi container phải có tên riêng, bằng cách đó chúng ta sẽ có thể chỉ định rõ ràng nó.

Thông thường, chúng ta có khá nhiều tự do khi nói đến việc phát minh ra những tên này, nhưng hãy nhớ rằng chúng nên đề cập đến những gì chúng ta sẽ lưu trữ trong biến (ví dụ: height, color, stepCounter, v.v.). Tất nhiên, JavaScript sẽ không xác minh mối tương quan giữa tên và nội dung của biến – đó chỉ đơn giản là một trong nhiều thực hành tốt giúp chúng ta và những người khác hiểu mã sau này dễ dàng hơn.

Trong hầu hết các ngôn ngữ lập trình, một biến phải được khai báo trước khi sử dụng, và JavaScript không phải là ngoại lệ. Khai báo biến đơn giản là "đặt chỗ" tên của biến. Bằng cách này, chúng ta thông báo cho chương trình rằng trong phần tiếp theo của việc thực thi, chúng ta sẽ sử dụng tên này để tham chiếu đến container của chúng ta, để lấy giá trị từ nó, hoặc lưu giá trị vào nó.

### Quy Tắc Đặt Tên Biến

Trong JavaScript, tên biến có thể bao gồm bất kỳ chuỗi chữ cái nào (chữ thường và chữ hoa), chữ số, ký tự gạch dưới và dấu đô la, nhưng chúng không được bắt đầu bằng chữ số. Có một danh sách các từ dành riêng không thể được sử dụng làm tên biến.

Điều quan trọng cũng là trình thông dịch JavaScript phân biệt giữa chữ thường và chữ hoa, cũng trong tên biến, vì vậy các tên như test, Test, hoặc TEST sẽ được coi là khác nhau.

## Khai Báo Biến

![Variable Declaration](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop)

Như chúng ta đã đề cập trước đó, chúng ta khai báo biến để đặt chỗ tên cho nó. Đây là một sự đơn giản hóa, bởi vì trên thực tế, không gian bộ nhớ cũng được dành cho biến, nhưng khi lập trình trong JavaScript, chúng ta thực tế không bao giờ phải nghĩ về những gì xảy ra trong bộ nhớ.

Thông thường, các giá trị được lưu trữ trong biến sẽ có thể được sửa đổi trong quá trình thực thi chương trình (chúng là "biến", sau tất cả). Tại sao thường? Bởi vì chúng ta có thể khai báo các biến mà giá trị của chúng không thể thay đổi. Thành thật mà nói, chúng ta thậm chí không gọi chúng là biến nữa – chúng ta gọi chúng là hằng số. Đối với các khai báo, chúng ta sử dụng các từ khóa var hoặc let cho biến và const cho hằng số.

### Sử Dụng var vs let

Hãy phân tích đoạn mã mẫu sau:

\`\`\`javascript
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
\`\`\`

Dòng đầu tiên là khai báo biến (chúng ta có thể thấy từ khóa var). Khai báo này có nghĩa là từ height sẽ được coi là tên của container cho các giá trị nhất định.

Khai báo, giống như các lệnh JavaScript khác, nên kết thúc bằng dấu chấm phẩy. Trong dòng thứ hai, chúng ta cố gắng viết ra giá trị của biến này (tức là những gì trong container) trên console. Bởi vì chúng ta chưa đặt gì vào đó, kết quả là undefined (trình thông dịch biết biến này, nhưng nó chưa có giá trị – giá trị là undefined).

### Từ Khóa let

Thay thế cho var là từ khóa let. Chúng ta sử dụng cả hai từ khóa theo cùng một cách. Cả hai đều dành cho việc khai báo biến, và cả hai đều có thể được tìm thấy trong các ví dụ khác nhau trên Internet hoặc trong sách. Tuy nhiên, chúng không hoàn toàn giống nhau.

Từ khóa var đến từ cú pháp JavaScript gốc, và từ khóa let được giới thiệu muộn hơn nhiều. Do đó, bạn sẽ tìm thấy var nhiều hơn trong các chương trình cũ. Hiện tại, việc sử dụng từ let được khuyến nghị cao vì những lý do mà chúng ta sẽ thảo luận trong giây lát.

Một trong những khác biệt cơ bản trong việc sử dụng var và let là let ngăn chúng ta khai báo một biến khác với cùng tên (một lỗi được tạo ra). Sử dụng var cho phép bạn khai báo lại biến, điều này có thể dẫn đến lỗi trong việc thực thi chương trình.

\`\`\`javascript
var height;
var height; // Không gây lỗi
console.log(height); // -> undefined

let height;
let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
\`\`\`

## Khởi Tạo Biến

Sau khi khai báo thành công, biến nên được khởi tạo, nói cách khác, nó nên được cung cấp giá trị đầu tiên của nó. Khởi tạo được thực hiện bằng cách gán một giá trị nhất định cho biến (được chỉ định bằng tên của nó). Để gán nó, chúng ta sử dụng toán tử =.

Bạn có thể gán cho biến: một giá trị cụ thể; nội dung của biến khác; hoặc, ví dụ, kết quả được trả về bởi một hàm.

Khởi tạo có thể được thực hiện cùng với khai báo, hoặc riêng biệt như một lệnh độc lập. Điều quan trọng là nhập giá trị đầu tiên vào biến trước khi cố gắng đọc, sửa đổi hoặc hiển thị nó.

\`\`\`javascript
let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;
console.log(weight); // -> 70
\`\`\`

## Chế Độ Strict Mode

JavaScript đã có một số thay đổi lớn được giới thiệu vào năm 2009 và 2015. Hầu hết những thay đổi này mở rộng cú pháp ngôn ngữ với các yếu tố mới, nhưng một số trong số chúng chỉ liên quan đến hoạt động của các trình thông dịch JavaScript. Thường thì đó là về việc làm rõ hành vi của trình thông dịch trong các tình huống có thể gây lỗi, chẳng hạn như trong các trường hợp khởi tạo biến mà không có khai báo trước đó.

Hãy xem một ví dụ:

\`\`\`javascript
height = 180;
console.log(height); // -> 180
\`\`\`

Thoạt nhìn, bạn có thể thấy rằng chúng ta đã quên khai báo biến height. Cú pháp JavaScript gốc cho phép sự bất cẩn như vậy, và tại thời điểm khởi tạo nó đã thực hiện khai báo này cho chúng ta. Điều này có vẻ như là một giải pháp khá tốt, nhưng thật không may, nó đôi khi có thể dẫn đến các tình huống mơ hồ và có thể gây lỗi.

Hãy sửa đổi ví dụ của chúng ta:

\`\`\`javascript
"use strict";
   
height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);
\`\`\`

Ở đầu mã của chúng ta, chúng ta đã thêm "use strict";. Câu lệnh này đã thay đổi triệt để hành vi của trình thông dịch. Tại sao? Chúng ta sử dụng nó khi chúng ta muốn buộc trình thông dịch hành xử theo các tiêu chuẩn JavaScript hiện đại. Vì vậy, miễn là bạn không chạy một số mã thực sự cũ, bạn nên luôn sử dụng nó.

## Thay Đổi Giá Trị Biến

![Changing Variable Values](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop)

Biến, như tên gọi của chúng cho thấy, có thể lưu trữ dữ liệu sẽ thay đổi. Các thay đổi được thực hiện bằng cách gán một giá trị mới cho biến, điều này ghi đè lên giá trị trước đó.

\`\`\`javascript
let steps = 100;
console.log(steps); // -> 100
steps = 120;
console.log(steps); // -> 120
steps = steps + 200;
console.log(steps); // -> 320
\`\`\`

### Kiểu Dữ Liệu Động

Biến trong ngôn ngữ JavaScript không có kiểu (hoặc, để chính xác hơn, chúng được gõ yếu và động). Điều này có nghĩa là JavaScript sẽ không kiểm soát loại giá trị nào chúng ta lưu trữ trong biến.

\`\`\`javascript
let greeting = "Hello!";
let counter = 100;

console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1

greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100
\`\`\`

JavaScript cho phép chúng ta dễ dàng thay thế biến greeting bằng một giá trị có kiểu khác với kiểu ban đầu được lưu trữ ở đó. JavaScript đi xa hơn một bước và không chỉ cho phép chúng ta thay đổi các kiểu giá trị được giữ trong biến, mà còn thực hiện chuyển đổi ngầm của chúng nếu cần thiết.

## Hằng Số (Constants)

Từ khóa const được sử dụng để khai báo các container tương tự như biến. Các container như vậy được gọi là hằng số. Hằng số cũng được sử dụng để lưu trữ các giá trị nhất định, nhưng một khi các giá trị đã được nhập vào chúng trong quá trình khởi tạo, chúng không thể được sửa đổi nữa. Điều này có nghĩa là loại container này được khai báo và khởi tạo đồng thời.

\`\`\`javascript
const greeting = "Hello!"; // Đúng

const greeting; // -> Uncaught SyntaxError: Missing initializer in const declaration
greeting = "Hello!";

const greeting = "Hello!";
greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.
\`\`\`

Mục đích chính của hằng số là loại bỏ khả năng thay đổi ngẫu nhiên một giá trị được lưu trữ trong đó. Điều này quan trọng khi chúng ta có một số giá trị thực sự không bao giờ nên thay đổi. Các ví dụ điển hình của hằng số là đường dẫn đến tài nguyên, token và dữ liệu khác không bao giờ thay đổi trong suốt vòng đời của script.

## Scope (Phạm Vi) Của Biến

![Variable Scope](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)

Cho đến bây giờ, chúng ta đã giả định rằng sau khi khai báo biến, tên của nó có thể được sử dụng trong toàn bộ mã của chương trình (tức là phạm vi của biến là toàn cục). Điều này không hoàn toàn đúng – phạm vi của biến phụ thuộc vào nơi nó được khai báo.

### Khối Chương Trình

Chúng ta có thể tách mã của chương trình thành các khối. Trong các khối mà chúng ta tạo bằng cách sử dụng dấu ngoặc nhọn, có một tập hợp các lệnh, vì lý do nào đó nên được coi là độc lập. Các khối thường được liên kết với các lệnh điều kiện, vòng lặp hoặc hàm, mà chúng ta sẽ nói sau.

\`\`\`javascript
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2
\`\`\`

### let và const

Nếu chúng ta khai báo bất kỳ biến hoặc hằng số nào bằng cách sử dụng let hoặc const, tương ứng, bên ngoài các khối mã, chúng sẽ là toàn cục. Điều này có nghĩa là tên của chúng sẽ được nhìn thấy trong toàn bộ chương trình, bên ngoài khối, bên trong khối, trong hàm, v.v.

Điều gì xảy ra nếu chúng ta khai báo một cái gì đó bằng cách sử dụng let hoặc const bên trong một khối? Điều này sẽ tạo ra một biến hoặc hằng số cục bộ. Nó sẽ chỉ được nhìn thấy bên trong khối mà nó được khai báo và trong các khối có thể được lồng vào nó.

\`\`\`javascript
let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
\`\`\`

### var

Trong trường hợp khai báo biến bằng cách sử dụng từ khóa var, tình huống hơi khác. Biến được khai báo bằng cách sử dụng nó bên ngoài các khối sẽ, như trong trường hợp let, là toàn cục, nói cách khác, nó sẽ được nhìn thấy ở mọi nơi. Nếu bạn khai báo nó bên trong một khối, thì... tốt, nó thường sẽ hóa ra là toàn cục một lần nữa.

\`\`\`javascript
var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> 70
\`\`\`

Vấn đề là var bỏ qua các khối chương trình thông thường, coi chúng như thể chúng không tồn tại. Vậy trong tình huống nào chúng ta có thể khai báo một biến cục bộ bằng cách sử dụng var? Chỉ bên trong một hàm.

## Hoisting

![JavaScript Hoisting](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop)

Hoisting là một cơ chế khá phức tạp và thành thật mà nói khá không mạch lạc. Hiểu nó tốt đòi hỏi khả năng sử dụng tự do nhiều yếu tố JavaScript, mà chúng ta thậm chí chưa đề cập.

Trình thông dịch JavaScript quét chương trình trước khi chạy nó, tìm kiếm lỗi trong cú pháp của nó, trong số những thứ khác. Nó làm một việc nữa trong dịp này. Nó tìm kiếm tất cả các khai báo biến và di chuyển chúng đến đầu phạm vi mà chúng được khai báo.

\`\`\`javascript
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;
console.log(weight); // -> 70
\`\`\`

Hoisting chỉ liên quan đến khai báo, không phải khởi tạo. Vì vậy giá trị 70, mà chúng ta gán cho biến weight, vẫn ở trên dòng mà khai báo gốc là.

## Tóm Tắt

Sử dụng biến, nói cách khác, khai báo, khởi tạo, thay đổi hoặc đọc giá trị của chúng là một phần cơ bản của hầu hết mọi ngôn ngữ lập trình.

JavaScript không phải là ngoại lệ, vì bạn cần sử dụng biến để lập trình trong đó.

Hãy nhớ khai báo biến trước khi sử dụng chúng. Chú ý đến nơi bạn khai báo chúng – liệu chúng có phải là cục bộ hay toàn cục.

Cố gắng sử dụng các từ khóa let và const, không phải từ var.

Hãy nhớ không sử dụng cùng tên cho các biến khác nhau, ngay cả khi bạn khai báo chúng trong các phạm vi khác nhau.

Và, tất nhiên, đặt cho biến những tên sẽ liên quan đến những gì bạn muốn lưu trữ trong chúng – mã nên đọc được không chỉ cho trình thông dịch, mà còn cho con người.`
  },
  {
    id: 'built-in-objects-javascript',
    title: 'Built-in Objects trong JavaScript: Khám Phá Các Đối Tượng Có Sẵn',
    excerpt: 'Tìm hiểu về các built-in objects trong JavaScript - những đối tượng có sẵn giúp bạn làm việc hiệu quả hơn với dữ liệu và thực hiện các tác vụ phổ biến.',
    date: '2025-01-16',
    tags: ['JavaScript', 'Built-in Objects', 'Programming', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    content: `# Built-in Objects trong JavaScript: Khám Phá Các Đối Tượng Có Sẵn

Bạn đã học cách định nghĩa và tạo các đối tượng của riêng mình bằng các kỹ thuật như literals, constructors, hoặc classes. Cấu trúc của những đối tượng này, tức là các thuộc tính và phương thức mà chúng chứa, sẽ phụ thuộc vào những gì bạn cần tại thời điểm đó.

Tuy nhiên, chúng ta không cần phải làm mọi thứ từ đầu. Trong JavaScript, nhiều chức năng của ngôn ngữ được cung cấp dưới dạng các đối tượng có sẵn, được định nghĩa trước.

## Built-in Objects là gì?

Nếu bạn muốn thực hiện các phép toán, bạn sẽ sử dụng **Math**, và nếu muốn chuyển đổi một đối tượng thành định dạng có thể gửi qua mạng, bạn sẽ sử dụng **JSON**.

Đây là một số trong số các đối tượng built-in tiêu chuẩn.

Thuật ngữ "built-in object" là một thuật ngữ được chấp nhận rộng rãi, được sử dụng trong tiêu chuẩn ECMAScript hoặc trong tài liệu MDN (Mozilla Developer Network) Web Docs, có lẽ là nguồn trợ giúp hoàn chỉnh nhất cho các nhà phát triển web.

Nhiều đối tượng trong số này, như Math và JSON, thực sự là các đối tượng thông thường. Chúng ta sử dụng chúng bằng cách đưa ra tên của đối tượng và phương thức hoặc thuộc tính cụ thể của nó, ví dụ: \`JSON.stringify\`.

Tuy nhiên, không phải tất cả các đối tượng "built-in" đều là đối tượng thông thường.

Đây chỉ là một thuật ngữ tổng thể mà trong nhiều trường hợp, các lớp hoặc hàm built-in như Object hoặc Date cũng được ẩn giấu.

### Tại sao không gọi chúng là "built-in classes"?

Không nhất thiết – như chúng ta đã nói trước đó, trong JavaScript mọi thứ ngoại trừ primitives đều là đối tượng, bao gồm cả classes và functions.

Do đó, một quy ước đặt tên thống nhất đã được áp dụng cho tất cả các phần tử (objects, classes, functions, constructors) được tích hợp sẵn trong ngôn ngữ.

Tuy nhiên, trước khi sử dụng một trong các built-in objects, hãy nhớ kiểm tra xem nó có thực sự là một đối tượng hay không, hoặc có thể là một lớp mà từ đó bạn sẽ tạo ra một đối tượng của một loại cụ thể.

## Static vs Prototype Methods

Sự khác biệt giữa static và prototype fields rất quan trọng đối với chúng ta vì hầu hết các built-in objects mà chúng ta thảo luận sẽ sử dụng cả hai.

Nếu không hiểu sự khác biệt này, bạn sẽ gặp vấn đề với cả tài liệu mô tả các đối tượng được chọn và cách sử dụng chúng một cách chính xác.

Hãy xem ví dụ với Number constructor:

\`\`\`javascript
let n = new Number(100.123);
let fixed = n.toFixed(2);
let test1 = Number.isInteger(100);
let test2 = n.isInteger(100); // -> n.isInteger is not a function
\`\`\`

Trong ví dụ này, chúng ta tạo đối tượng \`n\`, sử dụng Number constructor.

Trong tài liệu Number, chúng ta sẽ tìm thấy thông tin nói rằng nó chứa phương thức \`toFixed\`, trả về một chuỗi với số của chúng ta sử dụng ký hiệu điểm cố định.

Đây là một **prototype method** (hoặc instance method).

Vì vậy chúng ta sử dụng nó bằng cách sử dụng đối tượng được tạo bởi Number constructor.

Do đó, trong dòng thứ hai của ví dụ, xuất hiện \`n.toFixed(2)\`.

Phương thức hoạt động trên một đối tượng cụ thể và thao tác trên các thuộc tính của nó, trong trường hợp của chúng ta là giá trị 100.123.

Trong cùng tài liệu đó, chúng ta có thể tìm thấy thông tin về một phương thức khác, lần này là **static**: \`isInteger\`.

Phương thức này cho phép chúng ta kiểm tra xem số có phải là số nguyên hay không.

Đây là một phương thức static, vì vậy nó được kết nối không phải với đối tượng được tạo (instance) mà với constructor (hoặc trong các trường hợp khác, với class).

Vì vậy phương thức không hoạt động trên đối tượng.

Nó chỉ sử dụng giá trị được truyền làm đối số của lời gọi.

## Phân Loại Built-in Objects

Hãy chia các đối tượng được thảo luận trong chương này thành ba nhóm. Sự phân chia của chúng ta là tùy ý và không xuất phát trực tiếp từ tài liệu hoặc cách chúng được triển khai. Chúng ta được hướng dẫn ở đây bởi tính khả dụng của các đối tượng, vì vậy đừng ngạc nhiên nếu bạn xem các tài liệu khác về built-in objects và tìm thấy một phân loại khác.

### Nhóm 1: Đối tượng đại diện cho các kiểu dữ liệu đơn giản

- **Boolean**
- **Number** 
- **String**
- **Date**

### Nhóm 2: Đối tượng đại diện cho các kiểu dữ liệu phức hợp

- **Array**
- **Set**
- **Map**
- **Object**

### Nhóm 3: Đối tượng không liên quan đến kiểu dữ liệu, nhưng đơn giản hóa công việc hàng ngày với JavaScript

- **JSON**
- **Math**
- **RegExp**

## Ví Dụ Thực Tế

### Math Object

\`\`\`javascript
// Làm tròn số
Math.round(4.7); // 5
Math.floor(4.7); // 4
Math.ceil(4.3); // 5

// Tìm giá trị lớn nhất và nhỏ nhất
Math.max(1, 3, 2); // 3
Math.min(1, 3, 2); // 1

// Số ngẫu nhiên
Math.random(); // Số ngẫu nhiên từ 0 đến 1
\`\`\`

### JSON Object

\`\`\`javascript
// Chuyển đổi object thành JSON string
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'

// Chuyển đổi JSON string thành object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // { name: "John", age: 30 }
\`\`\`

### Date Object

\`\`\`javascript
// Tạo đối tượng Date
const now = new Date();
console.log(now); // Hiển thị ngày giờ hiện tại

// Các phương thức hữu ích
console.log(now.getFullYear()); // Năm
console.log(now.getMonth()); // Tháng (0-11)
console.log(now.getDate()); // Ngày trong tháng
console.log(now.getDay()); // Ngày trong tuần (0-6)
\`\`\`

## Kết Luận

Như chúng ta đã chỉ ra, đây không phải là tổng quan hoàn chỉnh về các built-in objects tiêu chuẩn.

Chúng ta chỉ làm quen với một bộ cơ bản.

Mỗi đối tượng sẽ được thảo luận từ quan điểm chức năng nghiêm ngặt, và đây sẽ không phải là phân tích toàn diện về tất cả các phương thức và thuộc tính có sẵn.

Chúng ta sẽ tập trung chỉ vào những phương thức và thuộc tính mà hoặc là hữu ích nhất trong lập trình thực tế, hoặc cần thiết để hiểu các cơ chế khác.

Nếu bạn quan tâm đến việc mở rộng kiến thức trong lĩnh vực này, hãy xem các trang MDN.

Việc sử dụng các built-in objects sẽ giúp bạn viết code JavaScript hiệu quả hơn và tận dụng được sức mạnh của ngôn ngữ này một cách tối đa.`
  },
  {
    id: 'conditional-statements-javascript',
    title: 'Conditional Statements trong JavaScript: Điều Khiển Luồng Thực Thi',
    excerpt: 'Tìm hiểu về các câu lệnh điều kiện trong JavaScript - từ if/else cơ bản đến switch/case và toán tử ternary, giúp tạo ra các ứng dụng linh hoạt và phản ứng.',
    date: '2025-01-17',
    tags: ['JavaScript', 'Conditional Statements', 'Control Flow', 'Programming'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop',
    content: `# Conditional Statements trong JavaScript: Điều Khiển Luồng Thực Thi

Conditional execution, hay các câu lệnh điều khiển luồng, đã được đề cập một vài lần trước đó, và bây giờ là lúc để xem xét chúng một cách chi tiết. Đây là một chủ đề rất quan trọng, vì các câu lệnh điều khiển luồng không chỉ cần thiết cho JavaScript, mà còn cho lập trình nói chung.

Không có khả năng phản ứng và thay đổi hành vi, bất kỳ mã nào cũng sẽ luôn làm cùng một việc. Tất nhiên, đôi khi đây chính xác là những gì chúng ta cần, nhưng hầu hết thời gian chúng ta cần tính phản ứng và khả năng xử lý các tình huống khác nhau trong mã.

## Tại Sao Cần Conditional Statements?

Chúng ta có thể tưởng tượng chương trình của mình như một cái cây bắt đầu từ thân cây và dần dần phân nhánh thành các nhánh tiếp theo. Thân cây là điểm bắt đầu của chương trình, và mỗi lệnh điều kiện là sự phản ánh của một nhánh mới.

Các lệnh điều kiện được thực thi dựa trên quyết định của người dùng, kết quả của các phép tính trước đó, hoặc thông tin khác mà chương trình sẽ xem xét.

## 1. Câu Lệnh if

Câu lệnh \`if\` là lệnh điều khiển luồng đầu tiên và đơn giản nhất có sẵn trong JavaScript. Nó có một vài dạng, nhưng ở dạng cơ bản, nó kiểm tra một điều kiện đã cho, và tùy thuộc vào giá trị Boolean của nó, hoặc thực thi một khối mã, hoặc bỏ qua nó.

### Cú pháp cơ bản:

\`\`\`javascript
if (condition) {
    block of code
}
\`\`\`

### Ví dụ thực tế:

\`\`\`javascript
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
\`\`\`

Trong ví dụ này, một alert với thông báo "User ready!" sẽ chỉ hiển thị khi người dùng đóng hộp thoại confirm bằng cách nhấp vào nút OK.

### Lưu ý quan trọng về Code Blocks

Luôn sử dụng dấu ngoặc nhọn \`{}\` ngay cả khi chỉ có một dòng lệnh. Điều này giúp mã sạch hơn và dễ đọc hơn, đồng thời tránh lỗi phổ biến khi thêm lệnh mới vào khối if.

\`\`\`javascript
// ĐÚNG - Sử dụng dấu ngoặc nhọn
if (isUserReady) {
    console.log("User ready!");
    alert("User ready!");
}

// SAI - Thiếu dấu ngoặc nhọn có thể gây lỗi
if (isUserReady)
    console.log("User ready!");
    alert("User ready!"); // Dòng này sẽ luôn chạy!
\`\`\`

### Scope của Variables trong Blocks

Các biến và hằng số được khai báo bằng \`let\` và \`const\` bên trong một khối là local, tức là phạm vi của chúng bị giới hạn trong khối đó.

\`\`\`javascript
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
\`\`\`

## 2. Câu Lệnh if ... else

Câu lệnh \`if\` rất hữu ích, nhưng nếu chúng ta cũng muốn thực thi một số mã khi điều kiện đã cho không được đáp ứng thì sao?

### Cú pháp:

\`\`\`javascript
if (condition) {
    condition - true code
} else {
    condition - false code
}
\`\`\`

### Ví dụ:

\`\`\`javascript
let isUserReady = confirm("Are you ready?");
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}
\`\`\`

Bây giờ chúng ta chỉ có một điều kiện, và chúng ta chắc chắn rằng một trong hai khối mã sẽ được thực thi.

## 3. Câu Lệnh if ... else if ... else

Đôi khi việc phân nhánh luồng thực thi mã chỉ thành hai nhánh là không đủ. JavaScript cung cấp một giải pháp đơn giản - chúng ta có thể lồng các câu lệnh \`if ... else\`.

### Cú pháp:

\`\`\`javascript
if (condition_1) {
    code
} else if (condition_2) {
    code
} else if (condition_3) {
    code
} else {
    code
}
\`\`\`

### Ví dụ thực tế:

\`\`\`javascript
let number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100");
} else {
    alert(">100");
}
\`\`\`

Trong mã này, chỉ một alert sẽ được hiển thị, và JavaScript sẽ dừng việc kiểm tra các điều kiện sau điều kiện đầu tiên được đáp ứng.

### Ví dụ phức tạp với Logical Operators:

\`\`\`javascript
let userAge = 25;
let hasParentsApproval = true;
let cartValue = 350;
let points = 600;
let shippingCost = 9.99;
let addInsurance = true;
let orderIsValid = true;
let hasPromoCode = false;

if (userAge < 21 && !hasParentsApproval) {
    orderIsValid = false;
} else if (userAge < 21 && hasParentsApproval) {
    shippingCost -= 5;
} else if (userAge >= 65) {
    shippingCost = 0;
} else if (userAge >= 21 && (hasParentsApproval || cartValue > 300 || points > 500)) {
    shippingCost = 0;
}

if (addInsurance && orderIsValid && !hasPromoCode) {
    shippingCost += 5; // INSURANCE_COST
}

if (orderIsValid) {
    console.log(\`Shipping cost: \${shippingCost}\`);
} else {
    console.log("Order is not valid");
}
\`\`\`

## 4. Toán Tử Conditional (Ternary Operator)

Toán tử conditional (ternary) cho phép chúng ta thực hiện một trong hai hành động dựa trên giá trị của toán hạng đầu tiên. Nó thường được sử dụng như một thay thế cho lệnh \`if ... else\` khi bạn muốn gán một trong hai giá trị cho một biến, tùy thuộc vào một điều kiện nhất định.

### Cú pháp:

\`\`\`javascript
condition ? valueIfTrue : valueIfFalse
\`\`\`

### Ví dụ:

\`\`\`javascript
// Sử dụng if...else
let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}

// Sử dụng ternary operator
let price = 100;
let shippingCost = price > 50 ? 0 : 5;
console.log(\`price = \${price}, shipping = \${shippingCost}\`); // -> price = 100, shipping = 0
\`\`\`

### Sử dụng với Functions:

\`\`\`javascript
let start = confirm("Start?");
let message = start ? "Here we go!" : "Aborted";
alert(message);
\`\`\`

## 5. Câu Lệnh switch ... case

Câu lệnh \`switch\` là loại câu lệnh cuối cùng được sử dụng để thực thi mã có điều kiện. Nó hơi giống với các câu lệnh \`if ... else\` lồng nhau, nhưng thay vì đánh giá các biểu thức khác nhau, \`switch\` đánh giá một biểu thức điều kiện và sau đó cố gắng khớp giá trị của nó với một trong các case đã cho.

### Cú pháp:

\`\`\`javascript
switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:
        code
}
\`\`\`

### Ví dụ thực tế:

\`\`\`javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}
\`\`\`

### Lưu ý quan trọng:

- Việc đánh giá được thực hiện với toán tử so sánh nghiêm ngặt (\`===\`)
- Phải có từ khóa \`break\` để tránh "fall-through"
- Case \`default\` là tùy chọn và được thực thi khi không có case nào khớp

## Bài Tập Thực Hành

### Bài tập 1: Kiểm tra số
Viết script yêu cầu người dùng nhập một số. Hiển thị thông báo "Bingo!" khi số lớn hơn 90 nhưng nhỏ hơn 110, nếu không thì hiển thị "Miss".

\`\`\`javascript
let number = prompt("Enter a number:", 0);
if (number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}
\`\`\`

### Bài tập 2: Calculator đơn giản
Viết ứng dụng calculator đơn giản. Yêu cầu người dùng nhập hai số và một ký tự đại diện cho phép toán ("+", "-", "*", "/").

\`\`\`javascript
let num1 = prompt("Enter first number:", 0);
let num2 = prompt("Enter second number:", 0);
let operation = prompt("Enter operation (+, -, *, /):", "+");

num1 = Number(num1);
num2 = Number(num2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Invalid numbers!");
} else {
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                break;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            break;
    }
    if (result !== undefined) {
        alert(\`Result: \${result}\`);
    }
}
\`\`\`

## Kết Luận

Các câu lệnh điều khiển luồng là một phần thiết yếu của hầu hết mọi ứng dụng. Chúng ta sử dụng chúng để kiểm tra và xử lý đầu vào của người dùng, các giá trị được tải từ web, hoặc kết quả của hầu hết mọi hoạt động.

Chúng cho phép chúng ta xây dựng các ứng dụng linh hoạt và phản ứng. Cấu trúc phổ biến nhất là câu lệnh \`if ... else\`.

Tuy nhiên, đừng quên rằng trong một số tình huống sẽ thuận tiện hơn khi sử dụng toán tử conditional hoặc câu lệnh \`switch\`.

Việc hiểu và sử dụng thành thạo các conditional statements sẽ giúp bạn viết ra những ứng dụng JavaScript mạnh mẽ và linh hoạt.`
  }
]
