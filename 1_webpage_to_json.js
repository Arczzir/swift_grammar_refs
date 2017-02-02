a = document.getElementsByClassName("syntax-defs")

function contents(e) {
  var result = []
  var t = e.children
  if (t.length == 0) {
    result.push(e.textContent.trim())
  } else {
    for(var i=0;i<t.length;i++){
      var tta = contents(t[i]) 
      if(t[i].className == "alternative" && i != t.length-1) {
        tta.push("⎥")
      }
      result.push(tta)
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

