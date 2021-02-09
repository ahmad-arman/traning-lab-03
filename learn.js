function inside (){

var order = prompt("what do want meat or cheiken ?" ); 
while (order !== "meat" && order !== "cheiken" )
{
    order = prompt("what do want meat or chiken ?");
}
var itemorder = ' ';
if(order == "meat")
{
    itemorder = '<img src = " download.jpg" />';
}
else if (order == "cheiken")
{
    itemorder = '<img src = "download (1).jpg "/> ';

}

var numofmeal = prompt("what is the numder of meal? ");
var result =' ';
for (var i = 0; i<numofmeal; i++ )
{
    result = result +itemorder;
}
document.write( result  );
}
inside();


