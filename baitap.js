function checkAge(a)
{
    // var age = document.getElementById("age").value;
    if( a <18)
    {
        return "Vi thanh nien";
        // document.getElementById("bai1").innerHTML="Vi thanh nien";
    }
    else 
    {
    return "Nguoi lon";
    // document.getElementById("bai1").innerHTML="Nguoi lon";
    }
}
console.log(checkAge(18))
function checkEvenOdd(a)
{
    if(a%2==0)
    {
        return "So chan";
    }
    else return "So le";
}
console.log(checkEvenOdd(4));

function compareNumbers(a,b)
{
    if(a>b)
    {
        return "So thu nhat lon hon";
    }
    else if(a<b)
    {
        return "So thu hai lon hon";
    }
    else return "Hai so bang nhau";
}
console.log(compareNumbers(4,5));

function checkInterger(a)
{
    var check= a - parseInt(a);
    if(check==0)
    {
        return "Day la so nguyen";
    }
    else return "Day khong phai la so nguyen";
}
console.log(checkInterger(4));

function convertNumbertoMonth(a)
{
    switch(a)
    {
        case 1:
            return "Thang mot";
            break;
        case 2:
            return "Thang hai";
            break;
        case 3:
            return "Thang ba";
            break;
        case 4:
            return "Thang tu";
            break;
            case 5:
                return "Thang nam";
                break;
            case 6:
                return "Thang sau";
                break;
            case 7:
                return "Thang bay";
                break;
            case 8:
                return "Thang tam";
                break;
               case 9:
                    return "Thang chin";
               break;
               case 10:
                    return "Thang muoi";
                  break;
                case 11:
                return "Thang muoi mot";
                    break;
            case 12:
                    return "Thang muoi hai";
                break;
            default:
                return "Thang khong hop le";

    }
}
console.log(convertNumbertoMonth(5));

function caculateShipping(a)
{
    var sum=0;
    for(var i=0;i<a;i++)
    {
        if(i<5)
        {
            sum +=7000;
        }
        else sum +=2000;
    }
    return sum;
}
console.log(caculateShipping(15));

function gradeExam(a)
{
    if(a>=90)
    {
        return "Xuat sac";
    }
    else if(a>=80&&a<=89) return "Gioi";
    else if(a>=70&&a<=79) return "Kha";
    else if(a>=60&&a<=69) return "Trung binh";
    else return "Yeu";
}
console.log(gradeExam(74));



