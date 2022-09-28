function log(m){
  console.log("NR COLORS: ", m);
}
log('init');

//window.addEventListener("load", function(){
//none of the load/domready events work... sigh.
setTimeout( updateButtonColor, 1000);

function updateButtonColor(){
  log('update');
  // newrelic have zero ids/names/aria... hope you are not handicaped.
  //
  // So lets get all buttons, cast as array, and filter by the only thing
  // we can to identify the accounts dropdown: the inner text... sigh
  // TODO: i18n the Account part.
  var accountobjs = [].slice.call(window.document.getElementsByTagName('button'), 0)
    .filter( b => b.textContent.startsWith('Account: '))
  if( accountobjs.length !== 1 ){
    log('cannot find account button');
  }else{
    var accountbtn = accountobjs[0]
    account = accountbtn.innerText.split(' ')[1]; // "Account: 123456 - SomeName Here" ==>> 123456
    log(account);

    var color = Array.from(account);
    accountbtn.style.background = 'linear-gradient('+toDegree(color[6])+'deg, rgb('
    +toColorItem(color[0]*100)+', '
    +toColorItem(color[4]*100)+', '
    +toColorItem(color[2]*100)+'), rgb('
    +toColorItem(color[5]*100)+', '
    +toColorItem(color[1]*100)+', '
    +toColorItem(color[3]*100)+'))'
  }
  setTimeout(updateButtonColor, 1500);
}
function toDegree( i ){
  if( i > 360 ){ return toDegree( Math.floor( i/2 )); }
  return i;
}
function toColorItem( i ){
  if( i > 255 ){ return toColorItem( Math.floor( i/5 )); }
  return i;
}
