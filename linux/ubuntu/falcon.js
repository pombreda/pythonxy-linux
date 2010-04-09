var DHTML = (document.getElementById || document.all || document.layers);

function getObj(name) {
  if (document.getElementById) {
    this.obj = document.getElementById(name);
    this.style = document.getElementById(name).style;
  }
  else if (document.all) {
    this.obj = document.all[name];
    this.style = document.all[name].style;
  }
  else if (document.layers) {
    this.obj = document.layers[name];
    this.style = document.layers[name];
  }
}
function toggle(item,prefix) {
  var cl = new getObj(prefix + 'l_' + item);
  var c  = new getObj(prefix + '_' + item);
  if ( c.style.display == 'inline' ) {
    c.style.display = 'none';
  }
  else {
    c.style.display = 'inline';
  }

}
