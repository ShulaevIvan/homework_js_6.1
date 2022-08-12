window.addEventListener('DOMContentLoaded', ()=> {

    let modalMain = document.querySelector('#modal_main'),
        modalSuccess = document.querySelector('#modal_success'),
        btnDanger = document.querySelector('.btn_danger'),
        btnSuccess = document.querySelector('.btn_success'),
        modalClose = Array.from(document.querySelectorAll('.modal__close'));


        for (let i = 0; i < modalClose.length; i++) {

            modalClose[i].addEventListener('click', (e)=>{

                let target = e.target;

                if (target && target.classList.contains('modal__close')) {
                    modalMain.classList.remove('modal_active')
                    modalSuccess.classList.remove('modal_active')
                };
            });
        };

    btnDanger.addEventListener('click', (e)=> {

        let target = e.target

        if (target && target.classList.contains('btn_danger')) {
            modalSuccess.classList.add('modal_active')
            modalMain.classList.remove('modal_active')
        };
    });

    btnSuccess.addEventListener('click', (e)=> {

        let target = e.target

        if (target && target.classList.contains('btn_success')) {
            modalMain.classList.add('modal_active')
            modalSuccess.classList.remove('modal_active')
        };
    });

    modalMain.classList.add('modal_active')

});