const activeItem = document.querySelectorAll(".nav-menu-item");


 activeItem.forEach(link => {
    link.addEventListener('click', () => {
        activeItem.forEach(i => i.setAttribute('aria-current', 'false'));

        link.setAttribute('aria-current', 'true');

        
activeItem.forEach(item => {
    if(item.getAttribute("aria-current") === "true"){
        item.classList.add("add-active-color");
        item.classList.remove("remove-active-color");
    }else{
        if(item.getAttribute("aria-current") === "false"){
            item.classList.remove("add-active-color");
            item.classList.add("remove-acvite-color");
        }
    
    }
});

    });
});


const activeStatus = document.getElementById("activeStatus");

if(activeStatus.getAttribute("aria-current") === "true"){
    activeStatus.classList.add("add-active-color");
}


