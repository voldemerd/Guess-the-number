let input = document.getElementById('guess');
let para1 = document.getElementById('guesses')
let para2 = document.getElementById('tries');
let button = document.getElementById('button');
let para3 = document.getElementById('para3');
let image = document.getElementById('imghide');
let x =document.getElementById('para1');
let y =document.getElementById('para2');
let h1 =document.getElementById('head');
let t=document.getElementById('try');
let correctno = '';
let j = 9;
let array=[];
window.onload = (event) => {
    correctno = parseInt(Math.random() * 101);
    console.log(correctno);
};

button.addEventListener('click', function() {

    console.log(input.value);
    if (+input.value === correctno) {
        para3.textContent='Game over';
        image.style.display='block';
        button.style.display="none";
        x.style.display="none";
        y.style.display="none";
        para1.style.display='none';
        para2.style.display='none';
        input.style.display='none';
        para3.style.fontSize='50px';
        h1.style.display='none';
        console.log('matched');
        input.value="";
    } else {
        input.value="";
        console.log('no');
        array.push(input.value);
        // console.log(array);
        para1.innerHTML = array;
        if(j>0)
            {
                para2.textContent=j--;
                if(+input.value > correctno)
                    {
                         para3.textContent='enter lower';
                    }
                else
                {
                    para3.textContent='enter higher';
                }
            }
            else
            {
                button.style.display="none";
                x.style.display="none";
                y.style.display="none";
                para1.style.display='none';
                para2.style.display='none';
                input.style.display='none';
                para3.style.fontSize='50px';
                para3.textContent='You lose';
                h1.style.display='none';
                t.style.display='block';
            }
    }
});
