
console.log('ola estou cuncionando');

// Efeito 1 - Voltar ao topo
    window.addEventListener('scroll', function () {
      const btn = document.getElementById('topo-btn');
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    document.getElementById('topo-btn').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Efeito 2 - Menu toggle para mobile
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('nav ul').toggleClass('show');
      });
    });