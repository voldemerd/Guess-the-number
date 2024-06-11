let input = document.getElementById('guess');
let para1 = document.getElementById('guesses')
let para2 = document.getElementById('tries');
let button = document.getElementById('button');
let para3 = document.getElementById('para3');
let image = document.getElementById('imghide');
let correctno = '';
let j = 10;
let array=[];
window.onload = (event) => {
    correctno = parseInt(Math.random() * 101);
    console.log(correctno);
};

button.addEventListener('click', function() {
    console.log(input.value);
    if (+input.value === correctno) {
        para3.textContent='Gome over';
        image.style.display='block';
        console.log('matched');
    } else {
        console.log('no');
        array.push(input.value);
        // console.log(array);
        para1.innerHTML = array;
        if(j>=0)
            {
                para2.textContent=j--;
                if(+input.value >= correctno)
                    {
                         para3.textContent='enter lower';
                    }
                else
                {
                    para3.textContent='enter higher';
                }
            }
    }
});