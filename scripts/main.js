let languages__select = document.querySelector('.languages__select');

let select_img = document.querySelector('.select-img')

let languages_modal = document.querySelector('.languages-modal');

languages__select.onclick = () => {
    select_img.classList.toggle("select-img_active")
    languages_modal.classList.toggle("languages-modal_active");

}