import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAmAWHNMWt3CdrIY0YSDARl3QGdH1Zzd9g",
    authDomain: "primeiro-bd-d572b.firebaseapp.com",
    projectId: "primeiro-bd-d572b",
    storageBucket: "primeiro-bd-d572b.appspot.com",
    messagingSenderId: "340726958337",
    appId: "1:340726958337:web:87ded2262690d5212c3300"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notify = document.querySelector('.notify');

// Função para adicionar dados
async function addData() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    try {
        const docRef = await addDoc(collection(db, "users"), { name, email });
        alert('Data Added');
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
        GetData();  // Chama a função para atualizar a tabela
    } catch (error) {
        console.log(error);
    }
}

// Evento de click no botão "Cadastrar"
const addBtn = document.querySelector('#add_Data');
addBtn.addEventListener('click', addData);

// Função para buscar e exibir dados na tabela HTML
async function GetData() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));

        // Criando o cabeçalho da tabela
        let html = `
        <table border="1">
            <thead>
                <tr>
                    <th style="width: 150px; height: 30px; background-color: black; color: white;">ID</th>
                    <th style="width: 200px; background-color: black; color: white;">Nome</th>
                    <th style="width: 300px; background-color: black; color: white;">Email</th>
                    
                </tr>
            </thead>
            <tbody>
        `;

        // Preenchendo o corpo da tabela com os dados do Firestore
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            html += `
                <tr>
                    <td style="height: 30px; background-color: gray; color: white; text-align: center;">${data.id}</td>
                    <td style="background-color: gray; color: white; text-align: center;">${data.name}</td>
                    <td style="background-color: gray; color: white; text-align: center;">${data.email}</td>
                    <td >
                        <button onclick="deleteData('${doc.id}')">Excluir</button>
                        <button onclick="updateData('${doc.id}')">Atualizar</button>
                    </td>
                </tr>`;
        });

        // Fechando a tabela
        html += `</tbody></table>`;

        // Inserindo a tabela no documento
        document.querySelector('table').innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}

GetData();

// Função para deletar dados
window.deleteData = async function (id) {

    const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");

    if (confirmDelete) {
        try {
            await deleteDoc(doc(db, "users", id));
            notify.innerHTML = "Data Deleted";
            setTimeout(() => {
                notify.innerHTML = "";
            }, 3000);
            GetData();  // Atualiza a tabela após a exclusão
        } catch (err) {
            console.log(err);
        }
    } else {
        // Se o usuário pressionar "Cancelar", nada será feito
        notify.innerHTML = "Ação cancelada!";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
    }
}


// Função para atualizar dados
window.updateData = async function (id) {
    try {
        const docSnap = await getDoc(doc(db, "users", id));
        const currentUser = docSnap.data();
        document.querySelector('#name').value = currentUser.name;
        document.querySelector('#email').value = currentUser.email;

        const updateDataBtn = document.querySelector('#update_data');
        updateDataBtn.classList.add('show');
        addBtn.classList.add('hide');

        updateDataBtn.addEventListener("click", async function () {
            const newName = document.querySelector('#name').value;
            const newEmail = document.querySelector('#email').value;

            if (newName && newEmail) {
                await updateDoc(doc(db, "users", id), { name: newName, email: newEmail });
                notify.innerHTML = "Data Updated";
                GetData();
                updateDataBtn.classList.remove('show');
                addBtn.classList.remove('hide');
                document.querySelector('#name').value = "";
                document.querySelector('#email').value = "";
                setTimeout(() => {
                    notify.innerHTML = "";
                }, 3000);
            }
        });
    } catch (err) {
        console.log(err);
    }
}
