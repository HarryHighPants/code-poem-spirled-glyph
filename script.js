// In binary and black
// Lie creatures of spirled glyph
// Its orbit rhythmed systolic
// Stardiscrete points unnamed

// A creature built from ones
// Spirals with eyes so full
// Pharyngeal minds observe
// Our machines awake

const stardiscrete=(n,e,i=.2,a=10)=>{let $=Math.
sin(e*i),r=Math.abs(Math.round($*a+10)),
s=$<Math.sin((e+1)*i),o=Math.abs($)>.85?"*":s?"-":"@";
return n.substring(0,r)+o+n.substring(r+1)};
for(let frame=0;;frame++){let n=Array(25).join(" ");
n=stardiscrete(n,frame+15,.2,10),n=stardiscrete(n,frame,.21,10),
console.log(n),await new Promise(n=>setTimeout(n,60))}