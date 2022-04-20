let loader = document.querySelector('.loader');
let user = JSON.parse(sessionStorage.user || null);

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
    if(user){
        if(compareToken(user.authToken, user.email)){
            if(user.role != 'seller'){
                becomeSellerElement.classList.remove('hide');
            } else{
                loader.style.display = 'block';
                setupProducts();
            }
        } else{
            //location.replace('/login');
        }
    } else{
        location.replace('/login');
    }
}




showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

//form submission

const applyFormButton = document.querySelector('#apply-form-btn');
const businessName = document.querySelector('#business-name');
const address = document.querySelector('#business-add');
const about = document.querySelector('#about');
const numberSubs = document.querySelector('#number-subs');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const legitInfo = document.querySelector('#legitInfo');

//user input profile picture
let uploadImages = document.querySelectorAll('.fileupload');
let imagePaths = []; //will store all uploaded images paths;

uploadImages.forEach((fileupload, index) => {
    fileupload.addEventListener('change', () => {
        const file = fileupload.files[0];
        let imageUrl;

        if(file.type.includes('image')){
            //means user uploaded an image
            fetch('/s3url').then(res => res.json())
            .then(url => {
                fetch(url,{
                    method: 'PUT',
                    headers: new Headers({'Content-Type': 'multipart/form-data'}),
                    body: file
                }).then(res => {
                    imageUrl = url.split("?")[0];
                    imagePaths[index] = imageUrl;
                    let label = document.querySelector(`label[for=${fileupload.id}]`);
                    label.style.backgroundImage = `url(${imageUrl})`;
                })
            })
        } else{
            showAlert('upload image only');
        }
    })
})


applyFormButton.addEventListener('click', () => {
    if(!businessName.value.length || !address.value.length || !about.value.length || !number.value.length || !numberSubs.value.length){
        showAlert('fill all the inputs');
    } else if(!tac.checked || !legitInfo.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        //making server request
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName.value,
            address: address.value,
            about: about.value,
            number: number.value,
            subscribers: numberSubs.value,
            image: imagePaths,
            tac: tac.checked,
            legit: legitInfo.checked,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})

const setupProducts = () => {
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({email: user.email})
    })
    .then(res => res.json())
    .then(data => {
        loader.style.display = null;
        productListingElement.classList.remove('hide');
        if(data == 'no products'){
            let emptySvg = document.querySelector(".no-product-image");
            emptySvg.classList.remove('hide');
        }
        else{
            data.forEach(product => createProduct(product));
        }
    });
}

