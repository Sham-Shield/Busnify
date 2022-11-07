        // Import the functions you need from the SDKs you need

        import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
        import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js';
        import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

       

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
    apiKey: "AIzaSyA8uTR9S1zLL0GD9LAXyPlepK7X_X_L9WI",
    authDomain: "busnify-572c0.firebaseapp.com",
    projectId: "busnify-572c0",
    storageBucket: "busnify-572c0.appspot.com",
    messagingSenderId: "971089173143",
    appId: "1:971089173143:web:ac020a79e222b756fae7d2",
    measurementId: "G-CNB0QSQF92"
  };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        async function writeUserData(userId, name, email, imageUrl){


            // Initialize Cloud Firestore and get a reference to the service
            const db = getFirestore(app);
            // Add a new document in collection "cities"
            try {
                const docRef = await addDoc(collection(db, "mee"), {
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
                console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                console.error("Error adding document: ", e);
                }
            /*
            const db = getDatabase();
            const reference = ref(db,'users/' + userId);

            set(reference, {
                username: name,
                email: email,
                profile_picture: imageUrl

            });
*/
            console.log("Init")
            
        }

        function typepressed(){
            console.log('pressed')
        }
    
        const element = document.getElementById("myBtn");
        element.addEventListener("click", function() {
            writeUserData('Abood', 'Abu', 'abood@gmail.com', 'abood.caimg');
        }); 