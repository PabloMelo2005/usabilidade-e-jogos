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

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCu2Fttn5CWYk_2q2Pwwkj3bUZElWoVH8A",
    authDomain: "banco-de-dados-atividade-v.firebaseapp.com",
    projectId: "banco-de-dados-atividade-v",
    storageBucket: "banco-de-dados-atividade-v.appspot.com",
    messagingSenderId: "587044780050",
    appId: "1:587044780050:web:f64c374d97f9f69a03c0cb",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notify = document.querySelector('.notify');

// Função para adicionar dados no Firestore
async function addData() {
    const name = document.querySelector('#name').value;
    const rg = document.querySelector('#rg').value;
    const fatherName = document.querySelector('#fatherName').value;
    const education = document.querySelector('#education').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const birthDate = document.querySelector('#birthDate').value;
    const motherName = document.querySelector('#motherName').value;
    const profession = document.querySelector('#profession').value;
    const cellphone = document.querySelector('#cellphone').value;

    // Log para verificar se os dados estão corretos
    console.log("Adicionando dados:", { name, rg, fatherName, education, phone, email, birthDate, motherName, profession, cellphone });

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            rg: rg,
            fatherName: fatherName,
            education: education,
            phone: phone,
            email: email,
            birthDate: birthDate,
            motherName: motherName,
            profession: profession,
            cellphone: cellphone
        });
        alert('Dados adicionados com sucesso!');
        document.querySelector('#userForm').reset(); // Limpa todos os campos do formulário
        notify.innerHTML = "";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);        
        GetData();
    } catch (error) {
        console.error("Erro ao adicionar dados:", error);
    }
}

// Evento de submit no formulário
const userForm = document.querySelector('#userForm');
userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página
    addData(); // Chama a função para adicionar dados
});

// Função para buscar dados e exibir na tabela
async function GetData() {
    const getDataQuery = await getDocs(collection(db, "users"));
    let html = "";

    getDataQuery.forEach((doc) => {
        const data = doc.data();
        html += `
            <tr>
                <td>${data.name}</td>
                <td>${data.rg}</td>
                <td>${data.email}</td>
                <td>${data.phone}</td>
                <td>${data.cellphone}</td>
                <td>
                    <button onclick="updateData('${doc.id}')">Editar</button>
                    <button onclick="deleteData('${doc.id}')">Excluir</button>
                </td>
            </tr>
        `;
    });

    document.querySelector('table tbody').innerHTML = html;
    console.log("Dados carregados:", html);
}
GetData();

// Função para excluir dados
window.deleteData = async function (id) {
    try {
        await deleteDoc(doc(db, "users", id));
        notify.innerHTML = "Dados excluídos com sucesso!";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
        GetData();
    } catch (err) {
        console.error("Erro ao excluir dados:", err);
    }
}

// Função para atualizar dados
window.updateData = async function (id) {
    try {
        const docSnap = await getDoc(doc(db, "users", id));
        const currentUser = docSnap.data();

        // Preenchendo os campos com os dados do usuário atual
        document.querySelector('#name').value = currentUser.name;
        document.querySelector('#rg').value = currentUser.rg;
        document.querySelector('#fatherName').value = currentUser.fatherName;
        document.querySelector('#education').value = currentUser.education;
        document.querySelector('#phone').value = currentUser.phone;
        document.querySelector('#email').value = currentUser.email;
        document.querySelector('#birthDate').value = currentUser.birthDate;
        document.querySelector('#motherName').value = currentUser.motherName;
        document.querySelector('#profession').value = currentUser.profession;
        document.querySelector('#cellphone').value = currentUser.cellphone;

        const updateDataBtn = document.querySelector('#update_data');
        updateDataBtn.classList.add('show');
        const addBtn = document.querySelector('#add_Data'); // Certifique-se de definir addBtn aqui
        addBtn.classList.add('hide');

        updateDataBtn.addEventListener('click', async function () {
            const newName = document.querySelector('#name').value;
            const newRg = document.querySelector('#rg').value;
            const newFatherName = document.querySelector('#fatherName').value;
            const newEducation = document.querySelector('#education').value;
            const newPhone = document.querySelector('#phone').value;
            const newEmail = document.querySelector('#email').value;
            const newBirthDate = document.querySelector('#birthDate').value;
            const newMotherName = document.querySelector('#motherName').value;
            const newProfession = document.querySelector('#profession').value;
            const newCellphone = document.querySelector('#cellphone').value;

            if (newName && newEmail) {
                await updateDoc(doc(db, "users", id), {
                    name: newName,
                    rg: newRg,
                    fatherName: newFatherName,
                    education: newEducation,
                    phone: newPhone,
                    email: newEmail,
                    birthDate: newBirthDate,
                    motherName: newMotherName,
                    profession: newProfession,
                    cellphone: newCellphone
                });

                notify.innerHTML = "Dados atualizados com sucesso!";
                GetData();
                updateDataBtn.classList.remove('show');
                addBtn.classList.remove('hide');
                document.querySelector('#userForm').reset();
                setTimeout(() => {
                    notify.innerHTML = "";
                }, 3000);
            }
        });
    } catch (err) {
        console.error("Erro ao atualizar dados:", err);
    }
}
