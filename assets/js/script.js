const exibidorSenha = document.getElementById('exibidor-senha');
const buttonCopiar = document.getElementById('button-copiar');
const sliderComprimento = document.getElementById('slider-comprimento');
const valorComprimento = document.querySelector('.valor-comprimento');
const buttonGerarSenha = document.getElementById('gerador-senha');
const spanTextoCopiado = document.querySelector('.texto-copiado');
const barraPreenchimento = document.querySelector('.barra-preenchimento');

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

  if (caracteres === '') {
    exibidorSenha.textContent = 'Selecione uma opção';
    return;
  }

  let senha = '';

  for (let i = 0; i < sliderComprimento.value; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  exibidorSenha.textContent = senha;

  if (senha.length < 10) {
    barraPreenchimento.style.width = '33%';
    barraPreenchimento.style.background = 'red';
  } else if (senha.length === 10 || senha.length <= 16) {
    barraPreenchimento.style.width = '66%';
    barraPreenchimento.style.background = 'yellow';
  } else {
    barraPreenchimento.style.width = '100%';
    barraPreenchimento.style.background = 'green';
  }
}

buttonGerarSenha.addEventListener('click', gerarSenha);

buttonCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(exibidorSenha.textContent);
  spanTextoCopiado.style.display = 'block';

  setTimeout(() => {
    spanTextoCopiado.style.display = 'none';
  }, 2000);
});

gerarSenha();