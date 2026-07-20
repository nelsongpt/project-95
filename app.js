document.querySelectorAll('input[type=checkbox]').forEach(cb=>{
cb.addEventListener('change',()=>localStorage.setItem(cb.parentElement.textContent.trim(),cb.checked))
cb.checked=localStorage.getItem(cb.parentElement.textContent.trim())==='true';
});