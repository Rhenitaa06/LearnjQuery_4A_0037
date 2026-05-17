const inputTugas   = $("#inputTugas");
const inputTanggal = $("#inputTanggal");
const btntambah    = $("#btnTambah");
const daftarTugas  = $("#daftarTugas");

$("#btntambah").on("click", function() {
    let teksTugas = $inputTugas.val();
    let tanggal   = $inputTanggal.val();

    if (teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = $(`
    <li>
        <span class="teks-tugas">${teksTugas}</span>
        <span class="teks-tanggal">${tanggal ? ": " + tanggal : ""}</span>
        <button class="btn-progress">📖 Progress</button>
        <button class="btn-done">✅ Done</button>
        <button class="btn-edit">✏️ Edit</button>
        <button class="btn-hapus">🗑️ Hapus</button>
    </li>
    `);

    let spanbaru    = listbaru.find(".teks-tugas");
    let spanTanggal = listbaru.find(".teks-tanggal");
    let btnProgress = listbaru.find(".btn-progress");
    let btnDone     = listbaru.find(".btn-done");
    let btnEdit     = listbaru.find(".btn-edit");
    let btnHapus    = listbaru.find(".btn-hapus");

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