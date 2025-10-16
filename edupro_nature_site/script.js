// Basic interactions: menu toggle and simple subscribe handling
document.addEventListener('DOMContentLoaded', function(){
  function toggleMenu(btnId){
    const btn = document.getElementById(btnId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      const nav = document.querySelector('.nav');
      if(nav.style.display === 'flex'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(255,255,255,0.02)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '8px';
      }
    });
  }
  toggleMenu('menuToggle');
  toggleMenu('menuToggle2');
  toggleMenu('menuToggle3');
  toggleMenu('menuToggle4');

  // Inline subscribe form on home
  const inlineForm = document.getElementById('subscribeInline');
  if(inlineForm){
    inlineForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('inlineEmail').value;
      if(!email.includes('@')){ alert('Please enter a valid email'); return; }
      alert('Thanks for subscribing, ' + email + '!');
      inlineForm.reset();
    });
  }

  // Subscribe page form
  const subForm = document.getElementById('subscribeForm');
  if(subForm){
    subForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('subEmail').value;
      if(!email.includes('@')){ alert('Please enter a valid email'); return; }
      alert('Subscription confirmed for ' + email + '. Check your inbox for a welcome note!');
      subForm.reset();
    });
  }

  // ===== Enrollment Modal Functionality =====
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  const modal = document.getElementById('enrollModal');
  const modalClose = document.getElementById('modalClose');
  const courseField = document.getElementById('courseName');

  // Open modal when clicking "Enroll Now"
  enrollButtons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const course = btn.dataset.course || '';
      if(courseField) courseField.value = course;
      if(modal) modal.style.display='block';
    });
  });

  // Close modal
  if(modalClose) modalClose.addEventListener('click', ()=> modal.style.display='none');
  window.addEventListener('click', (e)=>{ 
    if(e.target == modal) modal.style.display='none'; 
  });

  // Enrollment form submission
  const enrollForm = document.getElementById('enrollForm');
  if(enrollForm){
    enrollForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Enrollment submitted for ' + courseField.value + '!');
      enrollForm.reset();
      if(modal) modal.style.display='none';
    });
  }
});
