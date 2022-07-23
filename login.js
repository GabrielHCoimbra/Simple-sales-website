//Function to check correct user and password and redirect to index.html
function html_redirect(){
    usuario_lg = document.form1.usuario.value
    senha_lg = document.form1.senha.value
    if(usuario_lg == "Admin" && senha_lg == "AdminFesta" ){
        window.location.href = "index.html";
    }else{
        alert("Usuario ou Senha incorreto");
    }
}
//Function to show and hide password
function showpass(){
    input = document.form1.senha;
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text');
    }else{
        input.setAttribute('type', 'password');
    }
}
