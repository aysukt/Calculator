let inputField = document.querySelector('.input');
let islem = '';

function updateDisplay(value) {
    inputField.value = value;
}
function appendValue(value) {
    islem += value;
    updateDisplay(islem);
}
function clearAll() {
    islem = '';
    updateDisplay(0);
}
function clearLast(){
    islem = inputField.value.slice(0,-1)
    updateDisplay(islem || 0);
}
function calculate() {
    if (islem = eval(islem).toString())
       { updateDisplay(islem);}
     else {
        islem = '';
        updateDisplay(0);}
}

function a() { appendValue('7'); }
function b() { appendValue('8'); }
function c() { appendValue('9'); }
function d() { appendValue('/'); }
function e() { appendValue('4'); }
function f() { appendValue('5'); }
function g() { appendValue('6'); }
function h() { appendValue('*'); }
function i() { appendValue('1'); }
function j() { appendValue('2'); }
function k() { appendValue('3'); }
function l() { appendValue('-'); }
function m() { appendValue('.'); }
function n() { appendValue('0'); }
function o() { appendValue('+'); }
function s() { calculate(); }
function r() { clearAll(); }
function p() { clearLast();}
