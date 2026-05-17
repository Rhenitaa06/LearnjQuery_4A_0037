const inputTugas   = $("#inputTugas");
const inputTanggal = $("#inputTanggal");
const btntambah    = $("#btnTambah");
const daftarTugas  = $("#daftarTugas");

btntambah.addEventListener("click", function() {
    let teksTugas = inputTugas.value;
    let tanggal   = inputTanggal.value;

    if (teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru    = document.createElement("li");
    let spanbaru    = document.createElement("span");
    let spanTanggal = document.createElement("span");
    let btnProgress = document.createElement("button");
    let btnDone     = document.createElement("button");
    let btnHapus    = document.createElement("button");
    let btnEdit     = document.createElement("button");

    spanbaru.innerHTML    = teksTugas;
    spanTanggal.innerHTML = tanggal ? ": " + tanggal : "";

    // Tombol Edit
    btnEdit.innerHTML = "✏️ Edit";
    btnEdit.classList.add("btn-edit");
    btnEdit.addEventListener("click", function() {
        let teksLama    = spanbaru.innerHTML;
        let tanggalLama = spanTanggal.innerHTML.replace(": ", "");

        let inputEdit    = document.createElement("input");
        let inputTglEdit = document.createElement("input");
        let btnSimpan    = document.createElement("button");
        
        inputEdit.type     = "text";
        inputEdit.value    = teksLama;
        inputTglEdit.type  = "date";
        inputTglEdit.value = tanggalLama;

        btnSimpan.innerHTML = "💾 Simpan";
        btnSimpan.classList.add("btn-simpan");

        spanbaru.style.display    = "none";
        spanTanggal.style.display = "none";
        btnEdit.style.display     = "none";

        listbaru.insertBefore(inputEdit, btnProgress);
        listbaru.insertBefore(inputTglEdit, btnProgress);
        listbaru.insertBefore(btnSimpan, btnProgress);

        btnSimpan.addEventListener("click", function() {
            spanbaru.innerHTML    = inputEdit.value;
            spanTanggal.innerHTML = inputTglEdit.value ? ": " + inputTglEdit.value : "";

            spanbaru.style.display    = "";
            spanTanggal.style.display = "";
            btnEdit.style.display     = "";

            inputEdit.remove();
            inputTglEdit.remove();
            btnSimpan.remove();
        });

    }); 

    // Tombol Hapus
    btnHapus.innerHTML = "🗑️ Hapus";
    btnHapus.classList.add("btn-hapus");
    btnHapus.addEventListener("click", function() {
        if (confirm("Yakin ingin menghapus tugas ini?")) {
            listbaru.remove();
        }
    });

    // Tombol Progress
    btnProgress.innerHTML = "📖 Progress";
    btnProgress.classList.add("btn-progress");
    btnProgress.addEventListener("click", function() {
        listbaru.className = "status-Progress";
    });

    // Tombol Done
    btnDone.innerHTML = "✅ Done";
    btnDone.classList.add("btn-done");
    btnDone.addEventListener("click", function() {
        listbaru.className = "status-Done";
    });

    listbaru.appendChild(spanbaru);
    listbaru.appendChild(spanTanggal);
    listbaru.appendChild(btnProgress);
    listbaru.appendChild(btnDone);
    listbaru.appendChild(btnEdit);
    listbaru.appendChild(btnHapus);
    daftarTugas.appendChild(listbaru);

    inputTugas.value   = "";
    inputTanggal.value = "";
}); 