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

    // Tombol Edit
    btnEdit.on("click", function() {
        let teksLama    = spanbaru.text();
        let tanggalLama = spanTanggal.text().replace(": ", "");

        let inputEdit    = $("<input>").attr("type", "text").val(teksLama);
        let inputTglEdit = $("<input>").attr("type", "date").val(tanggalLama);
        let btnSimpan    = $("<button>").text("💾 Simpan").addClass("btn-simpan");

        spanbaru.hide();
        spanTanggal.hide();
        btnEdit.hide();

        btnProgress.before(inputEdit, inputTglEdit, btnSimpan);

    // Tombol Simpan
    btnSimpan.on("click", function() {
            spanbaru.text(inputEdit.val());
            spanTanggal.text(inputTglEdit.val() ? ": " + inputTglEdit.val() : "");

            spanbaru.show();
            spanTanggal.show();
            btnEdit.show();

            inputEdit.remove();
            inputTglEdit.remove();
            btnSimpan.remove();
    });

    }); 

    // Tombol Hapus
    btnHapus.on("click", function() {
        if (confirm("Yakin ingin menghapus tugas ini?")) {
            listbaru.remove();
        }
    });

    // Tombol Progress
    btnProgress.on("click", function() {
        listbaru.attr("class", "status-Progress");
    });

    // Tombol Done
    btnDone.on("click", function() {
        listbaru.attr("class", "status-Done");
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