
 var firstname= prompt ("what is your first name ? ");
 var lastname= prompt ("what is your last name ?");
 alert ("welcome" +" " + firstname + " " + lastname +" "+ 'and thank you for visit my company page ');
 var age= prompt("what is your age ? ");
 if (age >=18)  {alert ("welcome to the better software company in the world") ;

}else alert ("when you adult must be visit this company page ");

var order = prompt("waht do you wish website or web application ?");
while (order !== 'website' && order !== 'web application')
{
    order = prompt("what do you wish website or web application? ");
}
var itemorder = ' ';
if (order == "website")
{
    itemorder = '<img src = "download (2).jpg " />';   
}
else if (order == "web application")
{
itemorder = '<img src = "images.png "/>';
}
var numofpage = prompt("what is the number of page you need ?");
var result ='';
for (var i=0;i<numofpage;i++){
    result = result + itemorder ;
}
document.write (result );








