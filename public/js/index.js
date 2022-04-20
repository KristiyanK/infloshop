const becomeSeller11 = document.querySelector('.btn-seller');
becomeSeller11.addEventListener('click', () => {
    location.replace('/seller');
})

import { getFirestore, orderBy, doc, getDoc, getDocs, query, where, onSnapshot, collection, updateDoc, deleteDoc}
                from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
                const db = getFirestore();

const inflo = document.querySelector('.inflo')

const renderUser = doc => {
    
    const container = `
        <div class="influencecr-card" onclick="location.href='/search/${doc.data().name}'">
            <div class="influencecr-image" id=${doc.data().name}>
                <img src="${doc.data().image}" class="influencecr-thumb" alt="">
            </div>
            <div class="influencecr-info" >
                <h2 class="influencecr-name">${doc.data().name}</h2>
            </div>
        </div>
    `;
    inflo.insertAdjacentHTML('beforeend', container);
  }

const querySnapshot = await getDocs(collection(db, "seller"));
const querySnapshot_2 = await getDocs(collection(db, "users"));
const collectionRef = collection(db,"users")
const sellers = query(collectionRef,where("role","==", "seller"))
const querySnapshot_3 = await getDocs(sellers);
querySnapshot_3.forEach((doc)=>{
    console.log(doc.data());
})
      
//const q = query(querySnapshot_2,where("email", "==", email))

//const usersRef = getDocs(collection(db, "users"));
//const sellers = query(collection(db,"users"), where("role", "==", "seller"))
window.onload = querySnapshot.forEach((doc) => {
    
        renderUser(doc);
    
});



//, where("role","==", "seller")