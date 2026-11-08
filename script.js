//Pages Copy Script
const Copy_Btn = document.getElementById('Copy_Btn');
const Copy_Text = 'play.simpfun.cn:25621';
let busy = false;

Copy_Btn.addEventListener('click', async () => {
    if (busy) return;
    busy = true;

    try {
        await navigator.clipboard.writeText(Copy_Text);
    } catch (err) {
        console.error('复制失败：', err);
        busy = false;
        return;
    }

    const pop = document.createElement('span');
    pop.className = 'pop';
    pop.textContent = 'RIGHT';
    Copy_Btn.appendChild(pop);

    pop.addEventListener('animationend', () => {
        pop.remove();
        busy = false;
    }, { once: true });
});

//briger menu
const menu_btn = document.getElementById('menu_btn');
const menu = document.getElementById('menu');

menu_btn.onclick = function () {
    menu.classList.toggle('show');
};
