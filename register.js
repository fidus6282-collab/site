document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;;
  if (!name || !email || !lastName || !age ) {
    alert("Itimos barcha o'rinlarni to'ldiring!");
    return;
  }

  console.log(name);
  console.log("Email:", email);
  console.log("LastName:", lastName);
  console.log("Age:", age);

  alert('Ro\'yxatdan o\'tish muvaffaqiyatli amalga oshirildi!');
  window.location.href = 'main.html';  
});