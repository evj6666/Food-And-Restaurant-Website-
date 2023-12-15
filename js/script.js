//count function
document.addEventListener('DOMContentLoaded',()=>{
    function count(name,end,step)
    {
        let displayTag=document.getElementById(name);
        let count=0;
        let id=setInterval(()=>{
            count++;
            displayTag.innerText=count;
            if(count===end)
            {
                clearInterval(id);
            }
        },step);

    }
    count("count1",1520,10);
    count("count2",1000,50);
    count("count3",1010,30);
    count("count4",1010,40);
});

//nav hide
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a)
{
    a.addEventListener('click',function(){
        navCollapse.classList.remove("show");
    })
})

