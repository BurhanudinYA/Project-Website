// Ambil semua tombol "Detail"
const btnDetails = document.querySelectorAll(".btnDetail");

btnDetails.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const card = btn.closest(".card");
    const title = card.querySelector(".card-text").innerText;
    const deskripsiEl = card.querySelector(".deskripsi");
    const deskripsi = deskripsiEl ? deskripsiEl.innerText.trim() : "";
    const image = card.querySelector("img").getAttribute("src");
    const harga = card.querySelector(".harga").innerText;

    // Isi modal
    document.querySelector(".modalTitle").innerText = title;
    document.querySelector(".modalDeskripsi").innerText = deskripsi;
    document.querySelector(".modalImg").setAttribute("src", image);
    document.querySelector(".modalHarga").innerText = harga;

    // Tambahkan parameter image ke URL pembayaran
    const params = new URLSearchParams({
      produk: title,
      harga: harga,
      deskripsi: deskripsi,
      image: image,
    });
    const urlPembayaran = `pembayaran.html?${params.toString()}`;
    document.querySelector(".btnBeliBank").setAttribute("href", urlPembayaran);

    // Tampilkan modal
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  });
});
