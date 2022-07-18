// MENUITEMS 
const menuItems = document.querySelectorAll('.menu-item');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesNotification = document.querySelector('#messages-notification');
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const colorPalette = document.querySelectorAll('.choose-color span');

const changeActiveClass =()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

// Active class sidebar 

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveClass();
        item.classList.add('active');
        if(item.id == 'notificatons'){
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'none'; 
        }
        // if(item.id == "messages-notification"){
        //     messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        //     setTimeout(() => {
        //         messages.style.boxShadow = 'none';
        //     }, 2000);

        // }else{
        //     messages.style.boxShadow = 'none';
        // }
    })
})

// MEssagse boxshadow 
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// Messaage serach 

messageSearch.addEventListener('keyup',()=>{
    let val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })

})


// Theme 
theme.addEventListener('click',()=>{
    themeModal.style.display = 'grid';
})

themeModal.addEventListener('click',(e)=>{
     if(e.target.classList.contains('customize-theme')){
         themeModal.style.display = 'none';
     }
})




// color primary color 
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
           primaryHue = 52;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
        document.getElementById
})})
