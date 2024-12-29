// スクロールアニメーション
document.addEventListener('DOMContentLoaded', () => {
    // カードのスクロールアニメーション
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });

    // フォームバリデーション
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('すべての項目を入力してください。');
            return;
        }

        alert('お問い合わせありがとうございます。');
        form.reset();
    });

    // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}); 
