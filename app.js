function getInputValues() {
    // ดึงค่าจาก input
    const name = document.querySelector('input[type="name"]').value;
    const username = document.querySelector('input[type="username"]').value;
    const password = document.querySelector('input[type="password"]').value;

    document.getElementById('name').innerText = name
    document.getElementById('user').innerText = username
    document.getElementById('pass').innerText = password


}