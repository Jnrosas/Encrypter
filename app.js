var string = '';

function validateString(func){
  let str = document.getElementById('text-to-encrypt').value;
  if (/^[a-z]+$/g.test(str)){
    func;
  } else {
      document.getElementById('cover-encrypted-section').style.display = 'none';
      document.getElementById('text-encrypted').value = 'No uppercase, special characters nor signs, please'
    }
}

function encrypt() {
  string = document.getElementById('text-to-encrypt').value;
  let newtxt = '';
  let code = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
  };
  let added = false;
  for (let i=0; i<string.length; i++){
    for (let x in code){
      if (string[i] == x){
        newtxt += code[x];
        added = true;
        break;
      } else {
        continue;
      }
    }
    if (added == false){
      newtxt += string[i];
    }
    added = false;
  }
  document.getElementById('cover-encrypted-section').style.display = 'none';
  document.getElementById('text-encrypted').value = newtxt
}

function decrypt(){
  let string = document.getElementById('text-to-encrypt').value;
  if (/ai/g.test(string)){
    string = string.replaceAll(/ai/g, 'a');
  } 
  if (/enter/g.test(string)){
    string = string.replaceAll(/enter/g, 'e');
  } 
  if (/imes/g.test(string)){
    string = string.replaceAll(/imes/g, 'i');
  } 
  if (/ober/g.test(string)){
    string = string.replaceAll(/ober/g, 'o');
  } 
  if (/ufat/g.test(string)){
    string = string.replaceAll(/ufat/g, 'u');
  }
  document.getElementById('cover-encrypted-section').style.display = 'none';
  document.getElementById('text-encrypted').value = string;
}

function capture(){
  let copyText = document.getElementById('text-encrypted');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
  document.getElementById('text-to-encrypt').value = '';
  document.getElementById('text-encrypted').value = '';
}

function decrypt2(){
  document.getElementById('cover-encrypted-section').style.display = 'none';
  if (string){
    document.getElementById('text-encrypted').value = string;
  } else {
    decrypt()
  }
}

