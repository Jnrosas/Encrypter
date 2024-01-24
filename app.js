function encrypt(string) {
  let newtxt = ''
  let code = {
    a: 'qw',
    e: 'er',
    i: 'sd',
    o: 'hj',
    u: 'vb'
  };
  let added = false
  for (let i=0; i<string.length; i++){
    for (let x in code){
      if (string[i] == x){
        newtxt += code[x]
        added = true
        break
      } else {
        continue
      }
    }
    if (added == false){
      newtxt += string[i]
    }
    added = false
  }
  return newtxt
}

  
  let res = encrypt('casa rodante')
  console.log(res)
