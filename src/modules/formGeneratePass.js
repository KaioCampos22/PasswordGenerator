import generatePass from "./generetors";
const generatePassword = document.querySelector('.generated-password')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkUpperCase = document.querySelector('.chk-upperCase')
const chkLowerCase = document.querySelector('.chk-lowerCase')
const chkNumbers = document.querySelector('.chk-numbers')
const chkSymbols = document.querySelector('.chk-symbols')
const btnPassword = document.querySelector('.btn-password')
export default () => {
    btnPassword.addEventListener('click', () => {
        generatePassword.innerHTML = gera();

    });
};
function gera() {
    const password = generatePass(
        qtdCaracteres.value,
        chkUpperCase.checked,
        chkLowerCase.checked,
        chkNumbers.checked,
        chkSymbols.checked
    );

    return password || 'Nada selecionado.';
};