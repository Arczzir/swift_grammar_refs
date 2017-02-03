a = document.getElementsByClassName("syntax-defs")

function contents(e) {
  var result = []
  var t = e.childNodes
  var elementTotal = e.children.length
  if (t.length == 0) {
    result.push(e.textContent.trim())
  } else {
    var j = 0
    for(var i=0;i<t.length;i++){
      var tta = []
      if (t[i].nodeType == 1) {
        j += 1
        tta = contents(t[i]) 
        if(t[i].className == "alternative" && j != elementTotal) {
          tta.push("⎥")
        }
      } else if (t[i].nodeType == 3) {
        var s = t[i].textContent.trim()
        if (s.length > 0) {
          tta = [s]
        }
      }
      if (tta.length > 0) {
        result.push(tta)
      }
    }
  }
  return result
}

r = []
for(var i=0;i<a.length;i++) {
  a[i].style.border = "2px solid red"
  ta = a[i].getElementsByClassName("syntax-def")
  for (var j=0;j<ta.length;j++) {
    r.push(contents(ta[j]))
  }
}
console.log(JSON.stringify(r))

