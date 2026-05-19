const exibidorSenha = document.getElementById('exibidor-senha');
const buttonCopiar = document.getElementById('button-copiar');
const sliderComprimento = document.getElementById('slider-comprimento');
const valorComprimento = document.querySelector('.valor-comprimento');
const buttonGerarSenha = document.getElementById('gerador-senha');
const spanTextoCopiado = document.querySelector('.texto-copiado')

// Opções Checkbox
const checkboxSimbolos = document.getElementById('simbolos');
const checkboxNumeros = document.getElementById('numeros');
const checkboxMaiusculas = document.getElementById('maiusculas');
const checkboxMinusculas = document.getElementById('minusculas');

// Cadeia de Caracteres
const simbolos = '!@#$%^&*()';
const numeros = '0123456789';
const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';

sliderComprimento.addEventListener('input', () => {
  valorComprimento.textContent = sliderComprimento.value;
})

function gerarSenha() {
  let caracteres = '';

  if (checkboxSimbolos.checked) {
    caracteres += simbolos;
  }

  if (checkboxNumeros.checked) {
    caracteres += numeros;
  }

  if (checkboxMaiusculas.checked) {
    caracteres += maiusculas;
  }

  if (checkboxMinusculas.checked) {
    caracteres += minusculas;
  }

  let senha = '';

  for (let i = 0; i < sliderComprimento.value; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  exibidorSenha.textContent = senha;
}

buttonGerarSenha.addEventListener('click', gerarSenha);

buttonCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(exibidorSenha.textContent);
  spanTextoCopiado.style.display = 'block';

  setTimeout(() => {
    spanTextoCopiado.style.display = 'none';
  }, 2000);
})

gerarSenha();