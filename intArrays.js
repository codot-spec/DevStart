var intsec=function(arr,arr2)
{
    let set=new Set(arr);
    let set2=new Set();
    for(let n of arr2)
    {
        if(set.has(n))
        {
            set2.add(n);
        }
    }
    return [...set2];
}
let arr=[1,2,2,3,3];
let arr2=[2,3];
console.log(intsec(arr,arr2));