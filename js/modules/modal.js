function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function showModal(modalSelector, intervalOpenModal) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
    console.log(intervalOpenModal);
    if (intervalOpenModal) {
        clearInterval(intervalOpenModal);
    }
}

function modal(triggerSelector, modalSelector, intervalOpenModal) {
    // modal

    const btn = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);

    btn.forEach(element => {
        element.addEventListener('click', () => {
            showModal(modalSelector, intervalOpenModal);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, intervalOpenModal);

            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {showModal};