const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');if(toggle)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
const search=document.getElementById('countrySearch'),grid=document.getElementById('countryGrid'),empty=document.getElementById('emptyState');
if(search&&grid){search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();let n=0;grid.querySelectorAll('.country-card').forEach(c=>{const ok=c.dataset.country.includes(q);c.style.display=ok?'grid':'none';if(ok)n++});empty.style.display=n?'none':'block'})}
function submitForm(e){e.preventDefault();const m=document.getElementById('formMsg');m.textContent='Thanks! Your enquiry has been prepared. Connect this form to your email/CRM to receive submissions.'}
const params=new URLSearchParams(location.search);const country=params.get('country');const ci=document.getElementById('countryInput');if(ci&&country)ci.value=country;
