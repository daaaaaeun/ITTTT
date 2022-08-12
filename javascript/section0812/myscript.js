/* myscript. js */

function hap(a, b){//두수사이의 합을 반환하시오
    //2+3+4+5
    //5+4+3+2

    if(a>b){
        let tmp=a;  a=b;    b=tmp;
    }

    let sum=0;
    for(let n=a; n<=b; n++){
        sum += n;
    }

    return sum;
}//hap() end

function diff(a, b){//두수사이의 차이를 반환하시오
    //2, 5
    //5, 2

    return Math.abs(a-b);
}//diff end

function leap(year){//윤년, 평년을 반환하시오
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}//leap() end