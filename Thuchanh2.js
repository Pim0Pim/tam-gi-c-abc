let a = Number( prompt("Hãy nhập số đo cạnh:"))
let b = Number( prompt("Hãy nhập số đo cạnh thứ hai:"))
let c = Number( prompt("Hãy nhập số đo cạnh thứ ba:"));
if ((a<=0 || b<=0 || c<=0) || (!((a+b)>c) || !((a+c)>b) || !((c+b)>a))){
    alert ("Đây không thể là hình tam giác");
}  else if ((Math.pow((a+b),2)==Math.pow(c,2)) || Math.pow((a+c),2)==Math.pow(b,2) || Math.pow((b+c),2)==Math.pow(a,2) && (a==b || b==c || a==c)){
    alert ("Đây là tam giác vuông cân");
} else if (a==b==c){
    alert ("Đây là tam giác đều");
} else if (a==b || b==c || a==c){
    alert ("Đây là tam giác cân");
} else if ((Math.pow((a+b),2)==Math.pow(c,2)) || Math.pow((a+c),2)==Math.pow(b,2) || Math.pow((b+c),2)==Math.pow(a,2)){
    alert ("Đây là tam giác vuông");
}