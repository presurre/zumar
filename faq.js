document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
  
      if (faqItem.classList.contains('open')) {
        faqItem.classList.remove('open');
      } else {
        document.querySelectorAll('.faq-item.open').forEach(openItem => openItem.classList.remove('open'));
        faqItem.classList.add('open');
      }
    });
  });
  