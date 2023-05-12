function print(n)
{
    let ele=document.getElementById('body');
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            const ele2=document.createElement('label');
            if((i+j)%2==0)
            ele2.innerText="* ";
            else
            ele2.innerText="# ";
            ele.appendChild(ele2);

        }
        newLine();
    }
    const ele2=document.createElement('h2');
    ele2.innerText="printing chess board of size "+n+" x "+n;
    ele.appendChild(ele2);
}
function newLine(){
    const ele=document.getElementById('body');
    const ele2=document.createElement('br');
    ele.appendChild(ele2);
}
print(8);
document.getElementById('body').style.fontSize="40px";
document.getElementById('body').style.fontWeight="700";
document.getElementById('body').style.fontStyle="italic";
document.getElementById('body').style.margin="20px";