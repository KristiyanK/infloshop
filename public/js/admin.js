const tableRequests = document.querySelector('#table-requests');
const tableSellers = document.querySelector('#table-sellers');

import { getFirestore, doc, getDoc, setDoc, addDoc, getDocs, onSnapshot, collection, updateDoc, deleteDoc }
                from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
                const db = getFirestore();

let id;

window.onload = doc => {
  if(sessionStorage.user){
    let user = JSON.parse(sessionStorage.user);
      if(user.role != "admin"){
     location.replace('/404');}
  } else {
  }
}

// Create element and render users
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.email}'>
      <td>${doc.data().email}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().about}</td>
      <td>${doc.data().subscribers}</td>
      <td>${doc.data().number}</td>
      <td><img src="${doc.data().image}"></td>
    </tr>
  `;
  return tr;
}

const querySnapshot = await getDocs(collection(db, "sellerReq"));
      window.onload = querySnapshot.forEach((doc) => {
            const tr=renderUser(doc);
            tableRequests.insertAdjacentHTML('beforeend', tr);
        });
const querySnapshot_2 = await getDocs(collection(db, "seller"));
      window.onload = querySnapshot_2.forEach((doc) => {
        const tr=renderUser(doc);
        tableSellers.insertAdjacentHTML('beforeend', tr);
        });
       
       
const updateForm = document.querySelector('.update');
const updateBtn = document.querySelector('.update-btn');
const deleteBtn = document.querySelector('.delete-btn');
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const v =updateForm.id.value;
    const docRef = doc(db, 'users', updateForm.id.value);
    updateDoc(docRef, {
        role: "seller"
    })
    .then(()=>{
      getDoc(doc(db, "sellerReq", updateForm.id.value)).then(docSnap =>{
        const docData = {
          about: docSnap.data().about,
          address: docSnap.data().address,
          email: docSnap.data().email,
          image: docSnap.data().image,
          legit: docSnap.data().legit,
          name: docSnap.data().name,
          number: docSnap.data().number,
          subscribers: docSnap.data().subscribers,
          tac: docSnap.data().tac
        }
        setDoc(doc(db, "seller", docSnap.data().email), docData);
      })
    })
    
    .then(() =>{
        updateForm.reset();
  })
})


deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'sellerReq', updateForm.id.value);
    deleteDoc(docRef)
      .then(()=>{
        updateForm.reset();
      })
})

