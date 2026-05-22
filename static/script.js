
let mode = "";

document.getElementById("roll_no").addEventListener("blur", async function() {
    let roll = this.value;

    if(!roll) return;

    let res = await fetch(`/get/${roll}`);
    let data = await res.json();

    if(data) {
        mode = "update";
        fillForm(data);
        enableUpdate();
    } else {
        mode = "save";
        enableSave();
    }
});

function fillForm(data){
    document.getElementById("full_name").value = data.full_name;
    document.getElementById("class").value = data.class;
    document.getElementById("birth_date").value = data.birth_date;
    document.getElementById("address").value = data.address;
    document.getElementById("enrollment_date").value = data.enrollment_date;
}

function enableSave(){
    toggleFields(false);
    document.getElementById("saveBtn").disabled = false;
}

function enableUpdate(){
    toggleFields(false);
    document.getElementById("updateBtn").disabled = false;
    document.getElementById("roll_no").disabled = true;
}

function toggleFields(state){
    document.getElementById("full_name").disabled = state;
    document.getElementById("class").disabled = state;
    document.getElementById("birth_date").disabled = state;
    document.getElementById("address").disabled = state;
    document.getElementById("enrollment_date").disabled = state;
}

async function saveData(){
    let obj = getData();

    await fetch("/save", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    });

    document.getElementById("msg").innerText = "Saved Successfully";
    resetForm();
}

async function updateData(){
    let roll = document.getElementById("roll_no").value;
    let obj = getData();

    await fetch(`/update/${roll}`, {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    });

    document.getElementById("msg").innerText = "Updated Successfully";
    resetForm();
}

function getData(){
    return {
        roll_no: document.getElementById("roll_no").value,
        full_name: document.getElementById("full_name").value,
        class: document.getElementById("class").value,
        birth_date: document.getElementById("birth_date").value,
        address: document.getElementById("address").value,
        enrollment_date: document.getElementById("enrollment_date").value
    };
}

function resetForm(){
    location.reload();
}
