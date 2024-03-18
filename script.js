// In binary and black
// Lie creatures of spirled glyph
// Its orbit rhythmed systolic
// Stardiscrete points unnamed

// A creature built from ones
// Spirals with eyes so full
// Pharyngeal minds observe
// Our machines awake
let                     spiral
=(e,                     a)=>
 {let                     i=
  Math                  .sin
   (a),                 n=
      Math          .round
        (10         *i+
          10)    ,r=
             Math
          .abs   (i)
        >.85        ?"*"
     :Math           .cos
    (a)                 >0?
   "-"                   :"@"
 return                    e.
 slice                    (0,n
)+r                         +e
.slice                    (n+1)
 };for                    (let
  frame                  =0;;
   frame++              ){
     await            new
       Promise     ((e)=>
           setTimeout
             (e,60))
           let     e=
        spiral       (" ".
     repeat            (25),
   (frame                +15)
  *.2);                  console
.log(                      spiral
(e,                          .21*                  
frame                         ))}
