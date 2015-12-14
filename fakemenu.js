var fakemenuFuncs = [];
var fakemenu = function() {
  function stateObj() {
    this.objs = [];
  }

  stateObj.prototype.addItem = function(text, onClick, disabled) {
    if(disabled) {
      this.objs.push({type: 'disabled', onClick: onClick, text: text});
    } else {
      this.objs.push({type: 'item', onClick: onClick, text: text});
    }
    return this;
  }

  stateObj.prototype.addSep = function() {
    this.objs.push({type: 'sep'});
    return this;
  }

  stateObj.prototype.build = function(x, y) {
    var plat = 'win-chrome';
    if(navigator.userAgent.indexOf('Macintosh') >= 0) plat = 'osx';

    var out = '';
    out += '<div class="fakemenu-' + plat + '"';
    if(typeof(x) === 'number' && typeof(y) === 'number') {
      out += ' style="position: absolute; z-index: 9999; top: ' + y + 'px; left: ' + x + 'px;"';
    }
    out += '>';
    for(var obj of this.objs) {
      switch(obj.type) {
      case 'item':
        out += '<div class="fakemenu-item-' + plat + '"';
        if(typeof(obj.onClick) == 'function') {
          var id = fakemenuFuncs.push(obj.onClick) - 1;
          out += 'onclick="fakemenuFuncs[' + id + ']()"';
        }
        out += '>' + obj.text + '</div>';
        break;
      case 'disabled':
        out += '<div class="fakemenu-disabled-' + plat + '">' + obj.text + '</div>';
        break;
      case 'sep':
        out += '<div class="fakemenu-sep-' + plat + '"></div>';
        break;
      }
    }
    out += '</div>';
    return out;
  }

  return new stateObj();
}
