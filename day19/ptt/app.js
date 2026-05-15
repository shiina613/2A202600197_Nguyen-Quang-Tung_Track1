// ===== MathHint - App.js (Prototype Interactions) =====

document.addEventListener('DOMContentLoaded', () => {
  let hintCounter = 0;
  let maxHints = 3; // Mock: sẽ thay đổi theo session để demo

  const messageInput = document.getElementById('messageInput');
  const sendBtn = document.getElementById('sendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const newChatBtn = document.getElementById('newChatBtn');
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const typingIndicator = document.getElementById('typingIndicator');
  const sessionItems = document.querySelectorAll('.session-item');

  // Auto-resize textarea
  messageInput.addEventListener('input', () => {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
  });

  // Send message
  function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    messageInput.value = '';
    messageInput.style.height = 'auto';

    // Show typing indicator
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      const response = generateDemoResponse(text);
      appendMessage('bot', response.html, response.hintLevel);
    }, 1500 + Math.random() * 1000);
  }

  sendBtn.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Append message to chat
  function appendMessage(role, content, hintLevel) {
    const msg = document.createElement('div');
    msg.className = `message ${role}`;

    const avatar = role === 'bot' ? '🧠' : 'Q';
    const hintBadge = hintLevel ? getHintBadge(hintLevel) : '';

    msg.innerHTML = `
      <div class="message-avatar">${avatar}</div>
      <div class="message-content">
        ${hintBadge}
        ${content}
        <div class="message-meta">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;

    chatMessages.insertBefore(msg, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (hintLevel) updateHintDots(hintLevel);
  }

  function getHintBadge(level) {
    if (level === 'general') {
      return '<div class="hint-badge general">📖 Cách giải tổng quát</div>';
    }
    const levelClass = level === maxHints ? 'level-3' : level === 1 ? 'level-1' : 'level-2';
    return `<div class="hint-badge ${levelClass}">💡 Gợi ý ${level}/${maxHints}</div>`;
  }

  function updateHintDots(level) {
    const dotsContainer = document.querySelector('.hint-dots');
    const label = document.querySelector('.hint-progress .hint-label:last-child');
    if (!dotsContainer || !label) return;

    // Re-render dots theo maxHints
    dotsContainer.innerHTML = '';
    for (let i = 0; i < maxHints; i++) {
      const dot = document.createElement('span');
      dot.className = 'hint-dot' + (i < level ? ' active' : '');
      dotsContainer.appendChild(dot);
    }

    if (level === 'general' || level > maxHints) {
      label.textContent = '✓';
    } else {
      label.textContent = `${level}/${maxHints}`;
    }
  }

  function generateDemoResponse(text) {
    hintCounter++;
    const lower = text.toLowerCase();

    // Fallback/Give up logic
    if (hintCounter > maxHints || lower.includes('không hiểu') || lower.includes('chịu') || lower.includes('khó quá')) {
      return {
        hintLevel: 'general',
        html: `
          Mình hiểu rồi, phần này có thể hơi lắt léo một chút! Đừng lo nhé 💪
          <br><br>
          📖 <strong>Cách giải tổng quát để tìm cực trị hàm số:</strong>
          <br><br>
          <strong>Bước 1:</strong> Tính đạo hàm <span class="math">y'</span>
          <br><strong>Bước 2:</strong> Giải phương trình <span class="math">y' = 0</span> để tìm các điểm tới hạn <span class="math">x_i</span>
          <br><strong>Bước 3:</strong> Lập bảng xét dấu <span class="math">y'</span> hoặc tính <span class="math">y''</span>
          <br><strong>Bước 4:</strong> Kết luận:
          <br>• <span class="math">y'</span> đổi dấu (+) → (-): Điểm cực đại
          <br>• <span class="math">y'</span> đổi dấu (-) → (+): Điểm cực tiểu
          <br><br>
          🎯 <em>Áp dụng vào bài: <span class="math">y = x³ - 3x² + 2</span>, em sẽ thấy đạo hàm đổi dấu từ dương sang âm tại x = 0 (cực đại), và âm sang dương tại x = 2 (cực tiểu).</em>
          <br><br>
          Em xem lại các bước, có đoạn nào chưa rõ cứ hỏi mình nhé!
        `
      };
    }

    // Dynamic responses based on context (mocking AI)
    if (lower.includes('bảng biến thiên') || lower.includes('xét dấu')) {
      return {
        hintLevel: Math.min(hintCounter, maxHints),
        html: `
          Đúng hướng rồi! Lập bảng xét dấu là cách trực quan nhất. 📊
          <br><br>
          Nhắc lại quy tắc xét dấu tam thức bậc hai <span class="math">y' = 3x² - 6x</span>: <strong>"Trong trái, ngoài cùng"</strong> (với hệ số a = 3 > 0).
          <br><br>
          Nghĩa là:
          <br>• Trong khoảng (0, 2): <span class="math">y'</span> mang dấu <strong>Âm (-)</strong>
          <br>• Ngoài khoảng [x < 0 hoặc x > 2]: <span class="math">y'</span> mang dấu <strong>Dương (+)</strong>
          <br><br>
          🤔 Vậy mũi tên chiều biến thiên của hàm số <span class="math">y</span> sẽ đi lên hay đi xuống qua các khoảng này? Từ đó cực đại/cực tiểu nằm ở đâu?
        `
      };
    }

    if (lower.includes('đạo hàm cấp 2') || lower.includes("y''")) {
      return {
        hintLevel: Math.min(hintCounter, maxHints),
        html: `
          Rất tốt! Dùng <span class="math">y''</span> là một cách làm rất thông minh và nhanh gọn. 🧠
          <br><br>
          Ta có <span class="math">y' = 3x² - 6x</span>, vậy <span class="math">y'' = 6x - 6</span>.
          <br><br>
          📝 <strong>Quy tắc cực trị với y'':</strong>
          <br>• Nếu <span class="math">y''(x_0) > 0</span> ➔ <span class="math">x_0</span> là điểm cực tiểu
          <br>• Nếu <span class="math">y''(x_0) < 0</span> ➔ <span class="math">x_0</span> là điểm cực đại
          <br><br>
          🤔 Em thử thay <span class="math">x = 0</span> và <span class="math">x = 2</span> vào <span class="math">y''</span> xem kết quả ra sao nhé?
        `
      };
    }

    // Default sequential hints
    if (hintCounter === 1) {
      return {
        hintLevel: 1,
        html: `
          Bài toán tìm cực trị hàm số rất quan trọng trong Giải tích 12! 📈
          <br><br>
          🤔 Trước tiên, em hãy nhớ lại:
          <br>Để biết hàm số đạt cực trị ở đâu, mình cần xét sự biến thiên của hàm số. Đại lượng nào đặc trưng cho sự biến thiên đó?
          <br><br>
          <em>Gợi ý: Công cụ đầu tiên mình học ở chương này là gì nhỉ?</em>
        `
      };
    }

    if (hintCounter === 2) {
      return {
        hintLevel: 2,
        html: `
          Mình đang đi đúng hướng rồi! ✅
          <br><br>
          📝 <strong>Bước tiếp theo:</strong>
          <br>Tìm các điểm nghi ngờ là cực trị bằng cách giải phương trình đạo hàm bằng 0.
          <br><br>
          🤔 Em hãy thử tính đạo hàm <span class="math">y'</span> của hàm số <span class="math">y = x³ - 3x² + 2</span> và cho <span class="math">y' = 0</span> xem tìm được <span class="math">x</span> bằng mấy?
        `
      };
    }

    return {
      hintLevel: Math.min(hintCounter, maxHints),
      html: `
        Gần ra kết quả rồi! Cố lên em 🎯
        <br><br>
        Khi đã có các hoành độ <span class="math">x</span>, em cần phân biệt đâu là điểm cực đại, đâu là điểm cực tiểu.
        <br><br>
        Có 2 cách:
        <br>1️⃣ Lập bảng xét dấu <span class="math">y'</span> (quy tắc trong trái ngoài cùng).
        <br>2️⃣ Tính <span class="math">y''</span> và thay <span class="math">x</span> vào.
        <br><br>
        <em>Em muốn làm theo cách nào? Thử làm và cho mình biết kết quả nhé! 💡</em>
      `
    };
  }

  // Mock data cho các session - Mỗi session là một kịch bản khác nhau
  const mockSessions = {
    // SESSION 1: HAPPY PATH - Học sinh tự giải được với 2 hints (bài đơn giản)
    'session-1': {
      title: 'Cực trị hàm số bậc 3',
      maxHints: 2, // Demo: bài đơn giản chỉ cần 2 gợi ý
      messages: [
        { role: 'user', content: 'Làm sao tìm cực trị của hàm số y = x³ - 3x² + 2?' },
        { role: 'bot', content: 'Bài toán tìm cực trị hàm số rất quan trọng trong Giải tích 12! 📈<br><br>🤔 Trước tiên, em hãy nhớ lại:<br>Để biết hàm số đạt cực trị ở đâu, mình cần xét sự biến thiên của hàm số. Đại lượng nào đặc trưng cho sự biến thiên đó?<br><br><em>Gợi ý: Công cụ đầu tiên mình học ở chương này là gì nhỉ?</em>', hintLevel: 1 },
        { role: 'user', content: 'Đạo hàm phải không? y\' = 3x² - 6x' },
        { role: 'bot', content: 'Chính xác! Đạo hàm <span class="math">y\' = 3x² - 6x</span> hoàn toàn đúng. ✅<br><br>Bây giờ, cực trị sẽ xuất hiện tại những điểm mà đạo hàm bằng 0.<br><br>📝 <strong>Bước tiếp theo:</strong><br>Em hãy giải phương trình <span class="math">y\' = 0</span> để tìm các điểm tới hạn nhé.<br><br>🤔 <span class="math">3x² - 6x = 0</span> có những nghiệm nào?', hintLevel: 2 },
        { role: 'user', content: 'x = 0 hoặc x = 2. Rồi em dùng y\'\' để xét: y\'\' = 6x - 6<br>• Tại x=0: y\'\'(0) = -6 < 0 → cực đại<br>• Tại x=2: y\'\'(2) = 6 > 0 → cực tiểu<br><br>Vậy hàm số có cực đại tại x=0 và cực tiểu tại x=2!' },
        { role: 'bot', content: '🎉 <strong>Xuất sắc!</strong> Em đã tự giải được hoàn toàn đúng! �<br><br>✅ Các bước của em:<br>• Tính đạo hàm chính xác<br>• Giải phương trình y\' = 0 đúng<br>• Áp dụng y\'\' để phân biệt cực đại/cực tiểu rất thông minh!<br><br>📊 <strong>Kết quả:</strong><br>• Cực đại: (0, 2)<br>• Cực tiểu: (2, -2)<br><br><div class="celebration-stats"><div class="celeb-stat"><span class="celeb-icon">💡</span><span>Chỉ dùng <strong>2 gợi ý</strong></span></div><div class="celeb-stat"><span class="celeb-icon">⏱️</span><span>Hoàn thành trong <strong>4 phút</strong></span></div><div class="celeb-stat"><span class="celeb-icon">🔥</span><span>Streak: <strong>15 ngày</strong></span></div></div><br>📈 Mastery <strong>Cực trị</strong>: 70% → <strong>85%</strong> (+15%)' }
      ]
    },
    // SESSION 2: USER DÙNG HẾT 3 HINTS + XEM GENERAL METHOD (bài trung bình)
    'session-2': {
      title: 'Đạo hàm hàm hợp',
      maxHints: 3, // Demo: bài trung bình cần 3 gợi ý
      messages: [
        { role: 'user', content: 'Tính đạo hàm của y = (3x² + 2x - 1)⁵' },
        { role: 'bot', content: 'Đây là bài toán đạo hàm hàm hợp! 📚<br><br>🤔 Em hãy nhớ lại:<br>Khi có một hàm số "lồng" trong một hàm số khác (như ở đây có lũy thừa bậc 5 của một biểu thức), mình cần dùng quy tắc gì?<br><br><em>Gợi ý: Quy tắc này có tên tiếng Anh là "Chain Rule"...</em>', hintLevel: 1 },
        { role: 'user', content: 'Ừm... không nhớ lắm ạ' },
        { role: 'bot', content: 'Không sao, mình cùng nhớ lại nhé! 💡<br><br>📝 <strong>Quy tắc đạo hàm hàm hợp:</strong><br>Nếu <span class="math">y = [u(x)]ⁿ</span> thì <span class="math">y\' = n·[u(x)]ⁿ⁻¹ · u\'(x)</span><br><br>Nói đơn giản: <strong>Đạo hàm ngoài × Đạo hàm trong</strong><br><br>🎯 Với bài này:<br>• Hàm ngoài: <span class="math">u⁵</span><br>• Hàm trong: <span class="math">u = 3x² + 2x - 1</span><br><br>🤔 Em thử tính đạo hàm của từng phần xem sao?', hintLevel: 2 },
        { role: 'user', content: 'Đạo hàm của u⁵ là 5u⁴ phải không? Còn đạo hàm của 3x² + 2x - 1 em chưa biết tính...' },
        { role: 'bot', content: 'Đúng rồi! Đạo hàm ngoài là <span class="math">5u⁴</span> ✅<br><br>Còn đạo hàm trong thì đơn giản thôi:<br>• <span class="math">(3x²)\' = 6x</span><br>• <span class="math">(2x)\' = 2</span><br>• <span class="math">(-1)\' = 0</span><br><br>Vậy <span class="math">u\' = 6x + 2</span><br><br>🎯 Bây giờ em nhân 2 cái lại:<br><span class="math">y\' = 5u⁴ · (6x + 2)</span><br><br>Thay <span class="math">u = 3x² + 2x - 1</span> vào là xong!<br><br>🤔 Em thử viết kết quả cuối cùng xem?', hintLevel: 3 },
        { role: 'user', content: 'Em vẫn hơi bị rối... Không hiểu lắm ạ 😢' },
        { role: 'bot', content: 'Mình hiểu rồi, phần này có thể hơi lắt léo một chút! Đừng lo nhé 💪<br><br>📖 <strong>Cách giải tổng quát đạo hàm hàm hợp:</strong><br><br><strong>Bước 1:</strong> Xác định hàm ngoài và hàm trong<br>• Hàm ngoài: phần "bao" bên ngoài (ở đây là lũy thừa bậc 5)<br>• Hàm trong: phần ở "trong ngoặc" (ở đây là 3x² + 2x - 1)<br><br><strong>Bước 2:</strong> Tính đạo hàm hàm ngoài (giữ nguyên hàm trong)<br>• <span class="math">[u]⁵ → 5[u]⁴</span><br><br><strong>Bước 3:</strong> Nhân với đạo hàm hàm trong<br>• <span class="math">u\' = (3x² + 2x - 1)\' = 6x + 2</span><br><br><strong>Bước 4:</strong> Kết hợp lại<br>• <span class="math">y\' = 5(3x² + 2x - 1)⁴ · (6x + 2)</span><br><br>🎯 <strong>Công thức tổng quát:</strong><br><span class="math">y = [u(x)]ⁿ → y\' = n·[u(x)]ⁿ⁻¹ · u\'(x)</span><br><br>Em xem lại từng bước, có đoạn nào chưa rõ cứ hỏi mình nhé! 🤗', hintLevel: 'general' }
      ]
    },
    // SESSION 3: USER MUỐN ÔN LẠI KIẾN THỨC TỪ ĐẦU (EXPLAIN MODE)
    'session-3': {
      title: 'Khảo sát hàm số bậc 3',
      maxHints: 3,
      messages: [
        { role: 'user', content: 'Anh ơi, em quên mất cực trị là gì rồi. Giải thích lại cho em được không?' },
        { role: 'bot', content: '📚 Không sao cả! Mình cùng ôn lại từ đầu nhé!<br><br>🎯 <strong>Cực trị là gì?</strong><br><br><strong>Cực đại:</strong> Là điểm "đỉnh núi" trên đồ thị - nơi hàm số đạt giá trị lớn nhất trong một khoảng xung quanh nó.<br><br><strong>Cực tiểu:</strong> Là điểm "đáy thung lũng" - nơi hàm số đạt giá trị nhỏ nhất trong một khoảng xung quanh nó.<br><br>📊 <strong>Ví dụ trực quan:</strong><br>Tưởng tượng em đi bộ trên một con đường đồi núi:<br>• Khi lên đến đỉnh đồi rồi bắt đầu đi xuống → đó là <strong>cực đại</strong><br>• Khi xuống đến chân đồi rồi bắt đầu đi lên → đó là <strong>cực tiểu</strong><br><br>🔍 <strong>Đặc điểm quan trọng:</strong><br>• Tại điểm cực trị, đồ thị "đổi chiều" (từ lên thành xuống hoặc ngược lại)<br>• Đạo hàm tại điểm cực trị bằng 0 hoặc không xác định<br>• Cực đại/tiểu chỉ là "cục bộ", không phải lớn/nhỏ nhất toàn bộ<br><br>📝 <strong>Ví dụ cụ thể:</strong><br>Hàm số <span class="math">y = x³ - 3x² + 2</span> có:<br>• Cực đại tại x = 0, y = 2<br>• Cực tiểu tại x = 2, y = -2<br><br>Em có muốn mình giải thích cách TÌM cực trị không? 🤔' },
        { role: 'user', content: 'Có ạ! Em muốn biết cách tìm' },
        { role: 'bot', content: '📖 <strong>Cách tìm cực trị của hàm số:</strong><br><br><strong>PHƯƠNG PHÁP 1: Dùng đạo hàm cấp 1 (y\')</strong><br><br><strong>Bước 1:</strong> Tính đạo hàm y\'<br><strong>Bước 2:</strong> Giải phương trình y\' = 0 để tìm các điểm tới hạn<br><strong>Bước 3:</strong> Lập bảng xét dấu y\'<br><strong>Bước 4:</strong> Kết luận:<br>• Nếu y\' đổi dấu từ (+) sang (-) → <strong>Cực đại</strong><br>• Nếu y\' đổi dấu từ (-) sang (+) → <strong>Cực tiểu</strong><br><br><strong>PHƯƠNG PHÁP 2: Dùng đạo hàm cấp 2 (y\'\')</strong><br><br><strong>Bước 1:</strong> Tính y\' và giải y\' = 0 → tìm được x₀<br><strong>Bước 2:</strong> Tính y\'\'<br><strong>Bước 3:</strong> Thay x₀ vào y\'\':<br>• Nếu y\'\'(x₀) > 0 → x₀ là điểm <strong>cực tiểu</strong><br>• Nếu y\'\'(x₀) < 0 → x₀ là điểm <strong>cực đại</strong><br><br>💡 <strong>Mẹo nhớ:</strong><br>• y\'\' > 0: đồ thị "cong lên" (như chữ U) → cực tiểu ở đáy<br>• y\'\' < 0: đồ thị "cong xuống" (như chữ ∩) → cực đại ở đỉnh<br><br>🎯 Em muốn thử làm một bài tập để thực hành không?' }
      ]
    },
    // SESSION 4: USER LÀM SAI, BOT CHỈNH SỬA VÀ HƯỚNG DẪN
    'session-4': {
      title: 'Lượng giác - sin, cos',
      maxHints: 3,
      messages: [
        { role: 'user', content: 'Giải phương trình: sin(2x) = 1/2' },
        { role: 'bot', content: 'Đây là phương trình lượng giác cơ bản! 🔺<br><br>🤔 Để giải phương trình dạng sin(u) = a, em cần nhớ lại:<br>• Điều kiện: |a| ≤ 1 (ở đây a = 1/2 ✅)<br>• Công thức nghiệm: sin(u) = sin(α) khi nào?<br><br><em>Gợi ý: Có 2 trường hợp nghiệm cho phương trình sin...</em>', hintLevel: 1 },
        { role: 'user', content: 'sin(2x) = 1/2 thì 2x = 30° nên x = 15°' },
        { role: 'bot', content: '🤔 Em đã tìm được MỘT nghiệm, nhưng chưa đầy đủ nhé!<br><br>❌ <strong>Vấn đề:</strong><br>• Em chỉ tìm được 1 nghiệm x = 15° (hay π/12)<br>• Nhưng phương trình lượng giác có <strong>vô số nghiệm</strong> (vì tính tuần hoàn)<br>• Và còn thiếu trường hợp thứ 2<br><br>📝 <strong>Công thức đúng:</strong><br>sin(u) = sin(α) ⟺<br>• u = α + k·2π, hoặc<br>• u = π - α + k·2π (k ∈ ℤ)<br><br>🎯 Với bài này:<br>sin(2x) = 1/2 = sin(π/6)<br><br>⟹ <strong>Trường hợp 1:</strong> 2x = π/6 + k·2π<br>⟹ x = π/12 + k·π<br><br>⟹ <strong>Trường hợp 2:</strong> 2x = π - π/6 + k·2π = 5π/6 + k·2π<br>⟹ x = 5π/12 + k·π<br><br>✅ <strong>Đáp án đầy đủ:</strong><br>• x = π/12 + k·π<br>• x = 5π/12 + k·π (k ∈ ℤ)<br><br>💡 Em thấy khác gì so với cách làm ban đầu không?', hintLevel: 2 },
        { role: 'user', content: 'À em hiểu rồi! Em quên mất công thức nghiệm tổng quát. Cảm ơn anh!' },
        { role: 'bot', content: '🎉 Tuyệt vời! Em đã nắm được rồi!<br><br>📌 <strong>Lưu ý quan trọng khi giải PT lượng giác:</strong><br><br>1️⃣ <strong>Luôn nhớ tính tuần hoàn</strong> → có vô số nghiệm (+ k·2π hoặc + k·360°)<br><br>2️⃣ <strong>Sin và Cos có 2 trường hợp nghiệm:</strong><br>• sin(u) = sin(α) → u = α + k·2π HOẶC u = π - α + k·2π<br>• cos(u) = cos(α) → u = ±α + k·2π<br><br>3️⃣ <strong>Tan chỉ có 1 trường hợp:</strong><br>• tan(u) = tan(α) → u = α + k·π<br><br>4️⃣ <strong>Đổi về radian</strong> khi làm bài thi (trừ khi đề yêu cầu độ)<br><br>🎯 Em thử làm thêm bài này xem: cos(3x) = √3/2' }
      ]
    },
    // SESSION 5: USER HỎI NHIỀU CÂU LIÊN TIẾP (CONVERSATION FLOW)
    'session-5': {
      title: 'Tích phân cơ bản',
      maxHints: 2,
      messages: [
        { role: 'user', content: 'Tích phân là gì vậy anh?' },
        { role: 'bot', content: '📏 <strong>Tích phân</strong> là phép toán ngược của đạo hàm! 🔄<br><br>🎯 <strong>Ý nghĩa hình học:</strong><br>Tích phân <span class="math">∫[a,b] f(x)dx</span> tính <strong>diện tích</strong> giữa đồ thị hàm số f(x) và trục Ox từ x = a đến x = b.<br><br>📝 <strong>Công thức Newton-Leibniz:</strong><br><span class="math">∫[a,b] f(x)dx = F(b) - F(a)</span><br><br>Trong đó F(x) là <strong>nguyên hàm</strong> của f(x)<br><br>💡 Nghĩa là: để tính tích phân, em cần tìm nguyên hàm trước!' },
        { role: 'user', content: 'Vậy nguyên hàm là gì?' },
        { role: 'bot', content: '🔄 <strong>Nguyên hàm</strong> là hàm số mà khi lấy đạo hàm ra thì được hàm ban đầu!<br><br>📝 <strong>Định nghĩa:</strong><br>F(x) là nguyên hàm của f(x) nếu: <span class="math">F\'(x) = f(x)</span><br><br>🎯 <strong>Ví dụ:</strong><br>• f(x) = 2x → F(x) = x² (vì (x²)\' = 2x)<br>• f(x) = cos(x) → F(x) = sin(x) (vì (sin(x))\' = cos(x))<br>• f(x) = 3x² → F(x) = x³ (vì (x³)\' = 3x²)<br><br>⚠️ <strong>Lưu ý:</strong> Nguyên hàm không duy nhất!<br>• F(x) = x² + 5 cũng là nguyên hàm của 2x<br>• F(x) = x² - 10 cũng là nguyên hàm của 2x<br>• Nói chung: F(x) = x² + C (C là hằng số bất kỳ)<br><br>📌 Vì vậy ta viết: <span class="math">∫2x dx = x² + C</span>' },
        { role: 'user', content: 'À em hiểu rồi! Vậy cho em hỏi: tính ∫[0,2] 3x² dx' },
        { role: 'bot', content: 'Tuyệt! Em đã sẵn sàng tính tích phân rồi đấy! 🎯<br><br>🤔 Hãy thử áp dụng những gì vừa học nhé:<br><br><strong>Bước 1:</strong> Tìm nguyên hàm của 3x²<br>• Em biết nguyên hàm của 3x² là gì không?<br><br><em>Gợi ý: Hàm nào khi lấy đạo hàm ra được 3x²?</em>', hintLevel: 1 },
        { role: 'user', content: 'Là x³ phải không ạ?' },
        { role: 'bot', content: 'Chính xác! ✅ F(x) = x³<br><br><strong>Bước 2:</strong> Áp dụng công thức Newton-Leibniz<br><span class="math">∫[0,2] 3x² dx = F(2) - F(0) = 2³ - 0³ = 8 - 0 = 8</span><br><br>🎉 <strong>Đáp án: 8</strong><br><br>📊 <strong>Ý nghĩa:</strong> Diện tích giữa đồ thị y = 3x² và trục Ox từ x = 0 đến x = 2 là 8 đơn vị diện tích.<br><br>💡 Em đã hiểu cách tính tích phân rồi đấy! Có muốn thử bài khó hơn không? 😊' }
      ]
    },
    // SESSION 6: USER THỬ PHƯƠNG PHÁP MỚI (EXPLORER BADGE)
    'session-6': {
      title: 'Số phức',
      maxHints: 3,
      messages: [
        { role: 'user', content: 'Tính (2 + 3i)(1 - 2i)' },
        { role: 'bot', content: 'Đây là phép nhân số phức! 🔢<br><br>🤔 Em đã từng làm dạng này chưa? Có 2 cách để nhân số phức:<br><br><strong>Cách 1: Nhân phân phối (như nhân đa thức)</strong><br><strong>Cách 2: Dùng công thức (a+bi)(c+di) = (ac-bd) + (ad+bc)i</strong><br><br>Em thường dùng cách nào?', hintLevel: 1 },
        { role: 'user', content: 'Em thường dùng cách 1, nhưng lần này em muốn thử cách 2 xem sao!' },
        { role: 'bot', content: '🔬 Tuyệt vời! Thử phương pháp mới là cách học rất tốt! 🌟<br><br>📝 <strong>Công thức:</strong><br>(a + bi)(c + di) = (ac - bd) + (ad + bc)i<br><br>🎯 <strong>Áp dụng với (2 + 3i)(1 - 2i):</strong><br>• a = 2, b = 3<br>• c = 1, d = -2<br><br><strong>Phần thực:</strong> ac - bd = 2·1 - 3·(-2) = 2 + 6 = 8<br><strong>Phần ảo:</strong> ad + bc = 2·(-2) + 3·1 = -4 + 3 = -1<br><br>✅ <strong>Kết quả:</strong> (2 + 3i)(1 - 2i) = 8 - i<br><br>💡 <strong>So sánh với cách 1 (nhân phân phối):</strong><br>(2 + 3i)(1 - 2i)<br>= 2·1 + 2·(-2i) + 3i·1 + 3i·(-2i)<br>= 2 - 4i + 3i - 6i²<br>= 2 - i - 6(-1)  [vì i² = -1]<br>= 2 - i + 6<br>= 8 - i ✅<br><br>🤔 Em thấy cách nào nhanh hơn?' },
        { role: 'user', content: 'Cách 2 nhanh hơn nhiều! Nhưng phải nhớ công thức' },
        { role: 'bot', content: '🎉 Chính xác! Em đã khám phá được ưu/nhược điểm của từng phương pháp!<br><br>📊 <strong>Phân tích:</strong><br><br><strong>Cách 1 (Nhân phân phối):</strong><br>✅ Không cần nhớ công thức<br>✅ Dễ hiểu, trực quan<br>❌ Nhiều bước hơn<br>❌ Dễ nhầm dấu với i²<br><br><strong>Cách 2 (Công thức):</strong><br>✅ Nhanh gọn<br>✅ Ít sai sót<br>❌ Phải nhớ công thức<br><br>💡 <strong>Lời khuyên:</strong><br>• Thi trắc nghiệm: dùng Cách 2 (nhanh)<br>• Thi tự luận: dùng Cách 1 (dễ trình bày)<br>• Luyện tập: thử cả 2 để linh hoạt!<br><br><div class="badge-earned"><span class="badge-icon">🔬</span><span>Badge mới: <strong>"Nhà thám hiểm"</strong> — Thử phương pháp mới cho cùng dạng bài!</span></div><br>🎯 Em muốn thử thêm bài nào không?' }
      ]
    },

    // SESSION 7: OCR SAI - BOT HỎI XÁC NHẬN - USER SỬA LẠI
    'session-7': {
      title: 'Phương trình bậc 2 (OCR)',
      maxHints: 2,
      messages: [
        { 
          role: 'user', 
          content: '<div class="ocr-badge">📷 OCR</div><img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'100\'%3E%3Crect fill=\'%23f5f0eb\' width=\'300\' height=\'100\'/%3E%3Ctext x=\'20\' y=\'50\' font-family=\'Times New Roman\' font-size=\'20\' fill=\'%232d2a26\'%3EGiải PT: x² - 5x + 6 = 0%3C/text%3E%3C/svg%3E" class="message-image" alt="Math problem"><div class="formula-box">Giải phương trình: x² - 3x + 6 = 0</div>',
          isImage: true
        },
        { 
          role: 'bot', 
          content: '<div class="ocr-badge">🔍 Xác nhận OCR</div>Mình đã đọc được đề bài từ ảnh:<div class="formula-box">Giải phương trình: x² - 3x + 6 = 0</div><br>🤔 <strong>Đề bài này có chính xác không em?</strong><div class="confirmation-actions"><button class="confirm-btn correct-btn" style="opacity: 0.5" disabled>✅ Đúng rồi</button><button class="confirm-btn incorrect-btn" style="opacity: 0.5" disabled>❌ Sai, sửa lại</button></div>'
        },
        {
          role: 'bot',
          content: 'Ồ, xin lỗi em! OCR đôi khi có thể nhầm lẫn. 😅<br><br>✏️ <strong>Em hãy sửa lại đề bài cho chính xác nhé:</strong><div class="ocr-correction-container"><textarea class="ocr-correction-field" rows="3" disabled>Giải phương trình: x² - 5x + 6 = 0</textarea><div class="ocr-correction-hint">💡 Sửa những chỗ sai, sau đó nhấn "Xác nhận"</div><button class="btn-primary" style="opacity: 0.5" disabled>✅ Xác nhận</button></div>'
        },
        {
          role: 'user',
          content: '<div class="ocr-correction-badge">✏️ Đã sửa</div><div class="formula-box">Giải phương trình: x² - <span class="correction-highlight">5x</span> + 6 = 0</div>'
        },
        { 
          role: 'bot', 
          content: '🙏 Cảm ơn em đã sửa lại! Bây giờ mình đã hiểu rõ đề bài rồi.<br><br>📝 <strong>Đề bài:</strong> Giải phương trình: x² - 5x + 6 = 0<br><br>Đây là phương trình bậc 2 dạng cơ bản!<br><br>🎯 <strong>Phương trình bậc 2:</strong> ax² + bx + c = 0<br>• a = 1<br>• b = -5<br>• c = 6<br><br>🤔 Em thử tính Δ (delta) = b² - 4ac xem bằng bao nhiêu?',
          hintLevel: 1
        },
        { role: 'user', content: 'Δ = (-5)² - 4·1·6 = 25 - 24 = 1' },
        { 
          role: 'bot', 
          content: 'Chính xác! ✅ Δ = 1 > 0<br><br>📝 Vậy phương trình có <strong>2 nghiệm phân biệt</strong>:<br><br>x₁ = (-b + √Δ) / 2a = (5 + 1) / 2 = 3<br>x₂ = (-b - √Δ) / 2a = (5 - 1) / 2 = 2<br><br>✅ <strong>Đáp án:</strong> x = 2 hoặc x = 3<br><br>💡 <strong>Kiểm tra:</strong><br>• x = 2: 2² - 5·2 + 6 = 4 - 10 + 6 = 0 ✓<br>• x = 3: 3² - 5·3 + 6 = 9 - 15 + 6 = 0 ✓<br><br>🎉 Em đã giải đúng! Và cảm ơn em đã giúp mình sửa lại OCR, giúp mình hiểu đúng đề bài! 🙏<br><br>📊 <strong>Lưu ý:</strong> Khi Δ > 0, PT luôn có 2 nghiệm phân biệt. Em có thể dùng định lý Vi-et để kiểm tra nhanh: x₁ + x₂ = 5, x₁·x₂ = 6 ✅'
        }
      ]
    },

    // SESSION 8: BÀI KHÓ → GỢI Ý LÀM BÀI DỄ HƠN → QUAY LẠI BÀI KHÓ
    'session-8': {
      title: 'Tích phân từng phần (Adaptive)',
      maxHints: 5, // Demo: bài phức tạp cần 5 gợi ý
      messages: [
        { role: 'user', content: 'Tính tích phân: ∫ x·eˣ dx' },
        { 
          role: 'bot', 
          content: 'Đây là bài toán <strong>Tích phân từng phần</strong>! 📚<br><br>Đây là dạng bài khá nâng cao đấy. Mình sẽ hướng dẫn em từng bước nhé!<br><br>🤔 <strong>Hint 1:</strong><br>Tích phân từng phần có công thức: <span class="math">∫u dv = uv - ∫v du</span><br><br>Bước đầu tiên là chọn u và dv. Em thử nghĩ xem nên chọn cái nào là u, cái nào là dv?<br><br><em>Gợi ý: Thường chọn u là hàm "dễ đạo hàm", dv là hàm "dễ tích phân"</em>',
          hintLevel: 1
        },
        { role: 'user', content: 'Ừm... em chưa hiểu lắm. u là x hay eˣ ạ?' },
        { 
          role: 'bot', 
          content: '🤔 <strong>Hint 2:</strong><br>Có một quy tắc gọi là <strong>"LIATE"</strong> để chọn u:<br>• <strong>L</strong>ogarit (ln, log)<br>• <strong>I</strong>nverse trig (arcsin, arccos...)<br>• <strong>A</strong>lgebraic (đa thức: x, x², x³...)<br>• <strong>T</strong>rig (sin, cos, tan...)<br>• <strong>E</strong>xponential (eˣ, aˣ...)<br><br>Cái nào ở trên sẽ được chọn làm u trước!<br><br>Trong bài này có x (Algebraic) và eˣ (Exponential).<br><br>🎯 Vậy em nghĩ nên chọn cái nào làm u?',
          hintLevel: 2
        },
        { role: 'user', content: 'Thì chọn x làm u à? Rồi sau đó làm sao ạ?' },
        { 
          role: 'bot', 
          content: '✅ Đúng rồi! u = x<br><br>🤔 <strong>Hint 3:</strong><br>Nếu u = x thì:<br>• du = dx (đạo hàm của x)<br>• dv = eˣ dx (phần còn lại)<br>• v = eˣ (tích phân của eˣ)<br><br>Bây giờ áp dụng công thức:<br><span class="math">∫x·eˣ dx = x·eˣ - ∫eˣ dx</span><br><br>🎯 Em thử tính tiếp phần ∫eˣ dx xem sao?',
          hintLevel: 3
        },
        { role: 'user', content: 'Em vẫn bị rối... Không hiểu tại sao lại ra như vậy 😢' },
        { 
          role: 'bot', 
          content: '💭 Mình thấy em đang gặp khó khăn với tích phân từng phần. Đây là dạng bài khá nâng cao!<br><br>🎯 <strong>Mình có đề xuất:</strong><br><br>Thay vì cố gắng với bài này ngay, em thử làm một bài <strong>dễ hơn</strong> trước để hiểu rõ phương pháp, sau đó quay lại bài này nhé!<br><br>📝 <strong>Bài tập làm quen:</strong><br>Tính tích phân đơn giản hơn: <span class="math">∫x dx</span><br><br>Bài này sẽ giúp em:<br>• Ôn lại cách tính tích phân cơ bản<br>• Hiểu công thức nguyên hàm<br>• Tự tin hơn trước khi quay lại bài khó<br><br>🤔 Em có muốn thử bài này trước không?',
          isAdaptive: true
        },
        { role: 'user', content: 'Được ạ, em thử bài dễ hơn trước!' },
        { 
          role: 'bot', 
          content: '👍 Tuyệt! Mình cùng làm bài này nhé!<br><br>📝 <strong>Bài tập:</strong> Tính ∫x dx<br><br>🎯 <strong>Công thức nguyên hàm cơ bản:</strong><br><span class="math">∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C</span><br><br>Với bài này, x = x¹, vậy n = 1.<br><br>🤔 Em thử áp dụng công thức xem kết quả ra sao?'
        },
        { role: 'user', content: '∫x dx = x²/2 + C phải không ạ?' },
        { 
          role: 'bot', 
          content: '🎉 <strong>Chính xác!</strong> ∫x dx = x²/2 + C<br><br>✅ Em đã hiểu công thức nguyên hàm rồi đấy!<br><br>📚 <strong>Bây giờ mình làm thêm 1 bài nữa:</strong><br>Tính ∫eˣ dx<br><br>💡 <strong>Đặc biệt:</strong> Hàm eˣ rất đặc biệt - đạo hàm và nguyên hàm của nó đều là chính nó!<br><br>Vậy ∫eˣ dx = ?'
        },
        { role: 'user', content: '∫eˣ dx = eˣ + C!' },
        { 
          role: 'bot', 
          content: '🎉 <strong>Xuất sắc!</strong> Em đã nắm được 2 công thức quan trọng!<br><br>✅ ∫x dx = x²/2 + C<br>✅ ∫eˣ dx = eˣ + C<br><br>🔄 <strong>Bây giờ mình quay lại bài toán ban đầu nhé:</strong><br><br>📝 <strong>Bài toán:</strong> ∫x·eˣ dx<br><br>Với những gì em vừa học, giờ mình sẽ dễ hiểu hơn!<br><br>🎯 <strong>Nhắc lại Hint 1:</strong><br>Công thức tích phân từng phần: <span class="math">∫u dv = uv - ∫v du</span><br><br>Chọn:<br>• u = x → du = dx<br>• dv = eˣ dx → v = eˣ (em vừa tính được đấy!)<br><br>🤔 Bây giờ em thử áp dụng công thức xem sao?',
          hintLevel: 1
        },
        { role: 'user', content: 'À em hiểu rồi! ∫x·eˣ dx = x·eˣ - ∫eˣ dx' },
        { 
          role: 'bot', 
          content: '✅ <strong>Chính xác!</strong> Em đã hiểu cách áp dụng rồi!<br><br>🎯 <strong>Bước tiếp theo:</strong><br>∫x·eˣ dx = x·eˣ - ∫eˣ dx<br><br>Phần ∫eˣ dx em đã biết rồi đúng không?<br><br>🤔 Vậy kết quả cuối cùng là gì?',
          hintLevel: 2
        },
        { role: 'user', content: '∫x·eˣ dx = x·eˣ - eˣ + C = eˣ(x - 1) + C' },
        { 
          role: 'bot', 
          content: '🎉🎉🎉 <strong>HOÀN HẢO!</strong> Em đã tự giải được bài toán khó rồi!<br><br>✅ <strong>Đáp án:</strong> ∫x·eˣ dx = eˣ(x - 1) + C<br><br>📊 <strong>Hành trình của em:</strong><br>1️⃣ Gặp bài khó, chưa hiểu (3 hints)<br>2️⃣ Làm bài dễ hơn để nắm kiến thức nền<br>3️⃣ Quay lại bài khó với kiến thức vững vàng<br>4️⃣ Tự giải thành công! 🏆<br><br><div class="celebration-stats"><div class="celeb-stat"><span class="celeb-icon">🧠</span><span>Tư duy <strong>kiên trì</strong></span></div><div class="celeb-stat"><span class="celeb-icon">📈</span><span>Học theo <strong>lộ trình</strong></span></div><div class="celeb-stat"><span class="celeb-icon">💪</span><span>Không <strong>bỏ cuộc</strong></span></div></div><br>💡 <strong>Bài học:</strong> Khi gặp bài khó, đừng nản! Hãy:<br>• Ôn lại kiến thức nền<br>• Làm bài dễ hơn trước<br>• Quay lại với tự tin hơn<br><br>📈 Mastery <strong>Tích phân từng phần</strong>: 0% → <strong>75%</strong> (+75%)<br><br><div class="badge-earned"><span class="badge-icon">🏔️</span><span>Badge mới: <strong>"Chinh phục đỉnh núi"</strong> — Vượt qua bài khó bằng cách học từ cơ bản!</span></div>'
        }
      ]
    }
  };

  // Session switching
  sessionItems.forEach(item => {
    item.addEventListener('click', () => {
      sessionItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Lấy session ID từ data attribute hoặc tạo từ index
      const sessionId = item.getAttribute('data-session-id') || `session-${Array.from(sessionItems).indexOf(item) + 1}`;
      const sessionData = mockSessions[sessionId];
      
      if (sessionData) {
        // Xóa tất cả messages hiện tại
        const messages = chatMessages.querySelectorAll('.message');
        messages.forEach(m => m.remove());
        
        // Load maxHints từ session data
        maxHints = sessionData.maxHints || 3;
        
        // Load messages từ mock data
        sessionData.messages.forEach(msg => {
          appendMessage(msg.role, msg.content, msg.hintLevel);
        });
        
        // Reset hint counter dựa trên số hints trong session
        const hintMessages = sessionData.messages.filter(m => m.hintLevel && m.hintLevel !== 'general');
        const lastHintLevel = hintMessages.map(m => m.hintLevel).pop() || 0;
        hintCounter = lastHintLevel;
        updateHintDots(lastHintLevel);
      } else {
        // Nếu không có data, reset về trạng thái mới
        const messages = chatMessages.querySelectorAll('.message');
        messages.forEach((m, i) => { if (i > 0) m.remove(); });
        hintCounter = 0;
        maxHints = 3;
        const dotsContainer = document.querySelector('.hint-dots');
        const label = document.querySelector('.hint-progress .hint-label:last-child');
        if (dotsContainer) {
          dotsContainer.innerHTML = '<span class="hint-dot"></span><span class="hint-dot"></span><span class="hint-dot"></span>';
        }
        if (label) label.textContent = '0/?';
      }
    });
  });

  // New chat
  newChatBtn.addEventListener('click', () => {
    sessionItems.forEach(i => i.classList.remove('active'));
    // Clear messages except welcome
    const messages = chatMessages.querySelectorAll('.message');
    messages.forEach((m, i) => { if (i > 0) m.remove(); });
    hintCounter = 0;
    maxHints = 3; // Reset về mặc định, sẽ được detect lại khi user gửi bài
    // Reset hint progress về trạng thái chờ
    const dotsContainer = document.querySelector('.hint-dots');
    const label = document.querySelector('.hint-progress .hint-label:last-child');
    if (dotsContainer) {
      dotsContainer.innerHTML = '<span class="hint-dot"></span><span class="hint-dot"></span><span class="hint-dot"></span>';
    }
    if (label) label.textContent = '0/?';
  });

  // Toggle sidebar (mobile)
  toggleSidebar.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
  });

  // Suggestion cards click
  document.querySelectorAll('.suggestion-card').forEach(card => {
    card.addEventListener('click', () => {
      messageInput.value = card.querySelector('.card-text').textContent;
      sendMessage();
    });
  });

  // Visual Math Editor
  const mathInputBtn = document.getElementById('mathInputBtn');
  const mathInputModal = document.getElementById('mathInputModal');
  const mathDisplayContent = document.getElementById('mathDisplayContent');
  const insertMathBtn = document.getElementById('insertMathBtn');
  const clearMathBtn = document.getElementById('clearMathBtn');

  // Store LaTeX representation separately
  let latexExpression = '';

  if (mathInputBtn) {
    mathInputBtn.addEventListener('click', () => {
      openModal('mathInputModal');
      if (mathDisplayContent) {
        mathDisplayContent.innerHTML = '';
        latexExpression = '';
        mathDisplayContent.focus();
      }
    });
  }

  // Tool buttons - Insert at cursor position
  document.querySelectorAll('.tool-btn-compact').forEach(btn => {
    btn.addEventListener('click', () => {
      const template = btn.getAttribute('data-template');
      const insert = btn.getAttribute('data-insert');

      if (!mathDisplayContent) return;

      // Focus on display first
      mathDisplayContent.focus();

      if (template) {
        insertMathTemplate(template);
      } else if (insert) {
        insertTextAtCursor(insert);
        latexExpression += insert;
      }
    });
  });

  function insertMathTemplate(type) {
    let html = '';
    let latex = '';
    
    switch(type) {
      case 'frac':
        html = '<span class="math-frac" data-latex="\\frac{a}{b}"><span class="math-frac-num"><span class="math-input-box" contenteditable="true" data-part="num">a</span></span><span class="math-frac-den"><span class="math-input-box" contenteditable="true" data-part="den">b</span></span></span>';
        latex = '\\frac{a}{b}';
        break;
      case 'sqrt':
        html = '<span class="math-sqrt" data-latex="\\sqrt{x}"><span class="math-sqrt-content"><span class="math-input-box" contenteditable="true" data-part="content">x</span></span></span>';
        latex = '\\sqrt{x}';
        break;
      case 'nroot':
        html = '<span class="math-nroot" data-latex="\\sqrt[n]{x}"><span class="math-nroot-index"><span class="math-input-box" contenteditable="true" style="font-size:16px;" data-part="index">n</span></span><span class="math-nroot-symbol">√</span><span class="math-nroot-content"><span class="math-input-box" contenteditable="true" data-part="content">x</span></span></span>';
        latex = '\\sqrt[n]{x}';
        break;
      case 'power':
        html = '<span class="math-power" data-latex="x^{n}"><span class="math-power-base"><span class="math-input-box" contenteditable="true" data-part="base">x</span></span><span class="math-power-exp"><span class="math-input-box" contenteditable="true" style="font-size:18px;" data-part="exp">n</span></span></span>';
        latex = 'x^{n}';
        break;
      case 'subscript':
        html = '<span class="math-subscript" data-latex="x_{n}"><span class="math-subscript-base"><span class="math-input-box" contenteditable="true" data-part="base">x</span></span><span class="math-subscript-sub"><span class="math-input-box" contenteditable="true" style="font-size:18px;" data-part="sub">n</span></span></span>';
        latex = 'x_{n}';
        break;
      case 'integral':
        html = '<span class="math-integral" data-latex="\\int f(x) dx"><span class="math-integral-symbol">∫</span><span class="math-input-box" contenteditable="true" data-part="content">f(x)</span>dx</span>';
        latex = '\\int f(x) dx';
        break;
      case 'sum':
        html = '<span class="math-sum" data-latex="\\sum_{i=1}^{n}"><span class="math-sum-upper"><span class="math-input-box" contenteditable="true" style="font-size:16px;" data-part="upper">n</span></span><span class="math-sum-symbol">∑</span><span class="math-sum-lower"><span class="math-input-box" contenteditable="true" style="font-size:16px;" data-part="lower">i=1</span></span></span>';
        latex = '\\sum_{i=1}^{n}';
        break;
      case 'limit':
        html = '<span class="math-limit" data-latex="\\lim_{x \\to a}"><span class="math-limit-text">lim</span><span class="math-limit-arrow"><span class="math-input-box" contenteditable="true" style="font-size:14px;" data-part="arrow">x→a</span></span></span>';
        latex = '\\lim_{x \\to a}';
        break;
    }
    
    if (html) {
      insertHtmlAtCursor(html);
      latexExpression += latex;
    }
  }

  function insertTextAtCursor(text) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      mathDisplayContent.innerHTML += text;
    }
  }

  function insertHtmlAtCursor(html) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // Make sure we're inside mathDisplayContent
      if (!mathDisplayContent.contains(range.commonAncestorContainer)) {
        // If not, just append to the end
        const temp = document.createElement('div');
        temp.innerHTML = html;
        while (temp.firstChild) {
          mathDisplayContent.appendChild(temp.firstChild);
        }
        return;
      }
      
      range.deleteContents();
      const fragment = range.createContextualFragment(html);
      range.insertNode(fragment);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // No selection, append to end
      const temp = document.createElement('div');
      temp.innerHTML = html;
      while (temp.firstChild) {
        mathDisplayContent.appendChild(temp.firstChild);
      }
    }
    
    // Keep focus
    mathDisplayContent.focus();
  }

  // Convert visual display to LaTeX
  function convertToLatex(element) {
    let latex = '';
    
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        latex += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const dataLatex = node.getAttribute('data-latex');
        
        if (dataLatex) {
          // This is a math component, extract actual values
          let componentLatex = dataLatex;
          
          // Find all input boxes and replace placeholders
          const inputBoxes = node.querySelectorAll('.math-input-box');
          inputBoxes.forEach(box => {
            const part = box.getAttribute('data-part');
            const value = box.textContent.trim();
            
            // Replace placeholders in LaTeX
            if (part === 'num') {
              componentLatex = componentLatex.replace(/\\frac\{[^}]*\}/, `\\frac{${value}}`);
            } else if (part === 'den') {
              componentLatex = componentLatex.replace(/\}\{[^}]*\}/, `}{${value}}`);
            } else if (part === 'content') {
              componentLatex = componentLatex.replace(/\{[^}]*\}/, `{${value}}`);
            } else if (part === 'index') {
              componentLatex = componentLatex.replace(/\[([^\]]*)\]/, `[${value}]`);
            } else if (part === 'base') {
              componentLatex = componentLatex.replace(/^([^_^{]+)/, value);
            } else if (part === 'exp') {
              componentLatex = componentLatex.replace(/\^?\{[^}]*\}/, `^{${value}}`);
            } else if (part === 'sub') {
              componentLatex = componentLatex.replace(/_?\{[^}]*\}/, `_{${value}}`);
            } else if (part === 'upper') {
              componentLatex = componentLatex.replace(/\^?\{[^}]*\}/, `^{${value}}`);
            } else if (part === 'lower') {
              componentLatex = componentLatex.replace(/_\{[^}]*\}/, `_{${value}}`);
            } else if (part === 'arrow') {
              componentLatex = componentLatex.replace(/\{[^}]*\}/, `{${value.replace('→', '\\to')}}`);
            }
          });
          
          latex += componentLatex;
        } else {
          // Regular element, recurse
          latex += convertToLatex(node);
        }
      }
    });
    
    return latex;
  }

  // Clear button
  if (clearMathBtn) {
    clearMathBtn.addEventListener('click', () => {
      if (mathDisplayContent) {
        mathDisplayContent.innerHTML = '';
        latexExpression = '';
        mathDisplayContent.focus();
      }
    });
  }

  // Insert math into message
  if (insertMathBtn) {
    insertMathBtn.addEventListener('click', () => {
      if (!mathDisplayContent) return;
      
      // Convert visual display to LaTeX
      const latex = convertToLatex(mathDisplayContent);
      
      if (latex.trim()) {
        messageInput.value = (messageInput.value + ' ' + latex).trim();
        mathDisplayContent.innerHTML = '';
        latexExpression = '';
        closeAllModals();
        messageInput.focus();
      }
    });
  }

  // Auto-focus when modal opens
  if (mathInputModal) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('show') && mathDisplayContent) {
          setTimeout(() => mathDisplayContent.focus(), 100);
        }
      });
    });
    observer.observe(mathInputModal, { attributes: true, attributeFilter: ['class'] });
  }

  // Image Upload
  const imageUploadBtn = document.getElementById('imageUploadBtn');
  const cameraBtn = document.getElementById('cameraBtn');
  const imageFileInput = document.getElementById('imageFileInput');
  const imagePreviewModal = document.getElementById('imagePreviewModal');
  const previewImage = document.getElementById('previewImage');
  const processImageBtn = document.getElementById('processImageBtn');
  const ocrResultContainer = document.getElementById('ocrResultContainer');
  const ocrResult = document.getElementById('ocrResult');
  const initialImageActions = document.getElementById('initialImageActions');
  const confirmOcrBtn = document.getElementById('confirmOcrBtn');
  const editOcrBtn = document.getElementById('editOcrBtn');

  let currentImageFile = null;
  let currentOcrText = '';

  if (imageUploadBtn) {
    imageUploadBtn.addEventListener('click', () => {
      imageFileInput.click();
    });
  }

  if (cameraBtn) {
    cameraBtn.addEventListener('click', () => {
      // In real app, this would open camera
      imageFileInput.setAttribute('capture', 'environment');
      imageFileInput.click();
    });
  }

  if (imageFileInput) {
    imageFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        currentImageFile = file;
        const reader = new FileReader();
        reader.onload = (event) => {
          previewImage.src = event.target.result;
          openModal('imagePreviewModal');
          ocrResultContainer.style.display = 'none';
          initialImageActions.style.display = 'flex';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (processImageBtn) {
    processImageBtn.addEventListener('click', () => {
      // Simulate OCR processing
      processImageBtn.textContent = 'Đang xử lý...';
      processImageBtn.disabled = true;
      
      setTimeout(() => {
        // Mock OCR result (intentionally wrong for demo)
        currentOcrText = 'Tìm cực trị của hàm số y = x³ - 3x² + 2';
        ocrResult.textContent = currentOcrText;
        ocrResultContainer.style.display = 'block';
        initialImageActions.style.display = 'none';
        processImageBtn.textContent = 'Xử lý ảnh';
        processImageBtn.disabled = false;
      }, 2000);
    });
  }

  if (confirmOcrBtn) {
    confirmOcrBtn.addEventListener('click', () => {
      // Send image + OCR text as message
      appendImageMessage(previewImage.src, currentOcrText);
      closeAllModals();
      
      // Bot asks for confirmation
      setTimeout(() => {
        typingIndicator.style.display = 'flex';
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
      
      setTimeout(() => {
        typingIndicator.style.display = 'none';
        appendBotConfirmationMessage(currentOcrText);
      }, 2000);
    });
  }

  if (editOcrBtn) {
    editOcrBtn.addEventListener('click', () => {
      // Convert to editable field
      const editField = document.createElement('textarea');
      editField.className = 'ocr-edit-field';
      editField.value = currentOcrText;
      editField.rows = 3;
      
      ocrResult.replaceWith(editField);
      
      const hint = document.createElement('div');
      hint.className = 'ocr-edit-hint';
      hint.textContent = '💡 Sửa những chỗ sai, sau đó nhấn "Xác nhận"';
      editField.after(hint);
      
      editOcrBtn.textContent = '✅ Xác nhận';
      editOcrBtn.onclick = () => {
        currentOcrText = editField.value;
        
        // Send corrected message
        appendImageMessage(previewImage.src, currentOcrText, true);
        closeAllModals();
        
        // Bot response
        setTimeout(() => {
          typingIndicator.style.display = 'flex';
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
        
        setTimeout(() => {
          typingIndicator.style.display = 'none';
          appendMessage('bot', '✅ Cảm ơn em đã xác nhận lại! Mình đã hiểu đề bài rồi.<br><br>Bài toán: <strong>Tìm cực trị của hàm số y = x³ - 3x² + 2</strong><br><br>🤔 Để tìm cực trị, bước đầu tiên em cần làm gì nhỉ?<br><br><em>Gợi ý: Đại lượng nào giúp ta biết hàm số đang tăng hay giảm?</em>', 1);
        }, 2500);
      };
    });
  }

  function appendImageMessage(imageSrc, text, isCorrected = false) {
    const msg = document.createElement('div');
    msg.className = 'message user';
    
    const badge = isCorrected 
      ? '<div class="ocr-correction-badge">✏️ Đã sửa</div>'
      : '<div class="ocr-badge">📷 OCR</div>';
    
    msg.innerHTML = `
      <div class="message-avatar">Q</div>
      <div class="message-content">
        ${badge}
        <img src="${imageSrc}" class="message-image" alt="Uploaded image">
        <div class="formula-box">${text}</div>
        <div class="message-meta">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    
    chatMessages.insertBefore(msg, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendBotConfirmationMessage(ocrText) {
    const msg = document.createElement('div');
    msg.className = 'message bot';
    
    msg.innerHTML = `
      <div class="message-avatar">🧠</div>
      <div class="message-content">
        <div class="ocr-badge">🔍 Xác nhận OCR</div>
        Mình đã đọc được đề bài từ ảnh:
        <div class="formula-box">${ocrText}</div>
        <br>
        🤔 <strong>Đề bài này có chính xác không em?</strong>
        <div class="confirmation-actions">
          <button class="confirm-btn correct-btn" onclick="handleOcrCorrect()">✅ Đúng rồi</button>
          <button class="confirm-btn incorrect-btn" onclick="handleOcrIncorrect('${ocrText.replace(/'/g, "\\'")}')">❌ Sai, sửa lại</button>
        </div>
        <div class="message-meta">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    
    chatMessages.insertBefore(msg, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Global functions for confirmation buttons
  window.handleOcrCorrect = function() {
    // Disable buttons
    document.querySelectorAll('.confirmation-actions button').forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
    
    // Show typing indicator
    setTimeout(() => {
      typingIndicator.style.display = 'flex';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
    
    // Bot continues with the problem
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      appendMessage('bot', '✅ Tuyệt! Mình đã hiểu đề bài rồi.<br><br>Đây là bài toán <strong>Tìm cực trị hàm số bậc 3</strong>.<br><br>🤔 Để tìm cực trị, bước đầu tiên em cần làm gì nhỉ?<br><br><em>Gợi ý: Đại lượng nào giúp ta biết hàm số đang tăng hay giảm?</em>', 1);
    }, 2000);
  };

  window.handleOcrIncorrect = function(originalText) {
    // Disable buttons
    document.querySelectorAll('.confirmation-actions button').forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
    
    // Show typing indicator
    setTimeout(() => {
      typingIndicator.style.display = 'flex';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
    
    // Bot asks user to correct
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      appendBotCorrectionRequest(originalText);
    }, 1500);
  };

  function appendBotCorrectionRequest(originalText) {
    const msg = document.createElement('div');
    msg.className = 'message bot';
    
    msg.innerHTML = `
      <div class="message-avatar">🧠</div>
      <div class="message-content">
        Ồ, xin lỗi em! OCR đôi khi có thể nhầm lẫn. 😅
        <br><br>
        ✏️ <strong>Em hãy sửa lại đề bài cho chính xác nhé:</strong>
        <div class="ocr-correction-container">
          <textarea class="ocr-correction-field" id="ocrCorrectionField" rows="3">${originalText}</textarea>
          <div class="ocr-correction-hint">💡 Sửa những chỗ sai, sau đó nhấn "Xác nhận"</div>
          <button class="btn-primary" onclick="submitCorrection()">✅ Xác nhận</button>
        </div>
        <div class="message-meta">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    
    chatMessages.insertBefore(msg, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Focus on textarea
    setTimeout(() => {
      document.getElementById('ocrCorrectionField').focus();
    }, 100);
  }

  window.submitCorrection = function() {
    const correctedText = document.getElementById('ocrCorrectionField').value;
    
    // Disable textarea and button
    document.getElementById('ocrCorrectionField').disabled = true;
    document.querySelector('.ocr-correction-container button').disabled = true;
    document.querySelector('.ocr-correction-container button').style.opacity = '0.5';
    
    // User sends corrected message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerHTML = `
      <div class="message-avatar">Q</div>
      <div class="message-content">
        <div class="ocr-correction-badge">✏️ Đã sửa</div>
        <div class="formula-box">${correctedText}</div>
        <div class="message-meta">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    chatMessages.insertBefore(userMsg, typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Bot thanks and continues
    setTimeout(() => {
      typingIndicator.style.display = 'flex';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
    
    setTimeout(() => {
      typingIndicator.style.display = 'none';
      appendMessage('bot', '🙏 Cảm ơn em đã sửa lại! Bây giờ mình đã hiểu rõ đề bài rồi.<br><br>📝 <strong>Đề bài:</strong> ' + correctedText + '<br><br>🤔 Để giải bài này, bước đầu tiên em cần làm gì nhỉ?<br><br><em>Gợi ý: Đại lượng nào giúp ta biết hàm số đang tăng hay giảm?</em>', 1);
    }, 2000);
  };

  // Profile dropdown toggle
  const userProfileBtn = document.getElementById('userProfileBtn');
  const profileDropdown = document.getElementById('profileDropdown');
  const profileArrow = document.getElementById('profileArrow');

  if (userProfileBtn && profileDropdown) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
      profileArrow.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target) && !userProfileBtn.contains(e.target)) {
        profileDropdown.classList.remove('show');
        profileArrow.classList.remove('open');
      }
    });
  }

  // Modals Logic
  const modalOverlay = document.getElementById('modalOverlay');
  const closeBtns = document.querySelectorAll('.close-modal-btn');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modalOverlay.classList.add('show');
      modal.classList.add('show');
      // Close dropdown if open
      if (profileDropdown) {
        profileDropdown.classList.remove('show');
        profileArrow.classList.remove('open');
      }
    }
  }

  function closeAllModals() {
    modalOverlay.classList.remove('show');
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
  }

  // Bind dropdown items to open modals based on text content
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const text = item.textContent.toLowerCase();
      if (text.includes('hồ sơ')) {
        // Navigate to profile page instead of modal
        window.location.href = 'profile.html';
      } else if (text.includes('cài đặt')) {
        e.preventDefault();
        openModal('settingsModal');
      } else if (text.includes('thống kê')) {
        e.preventDefault();
        openModal('statsModal');
      }
    });
  });

  // Close modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeAllModals);
  }

});
