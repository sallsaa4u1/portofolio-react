import { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";
import Navbar from "../components/Navbar";

function Project() {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const [daftarSiswa, setDaftarSiswa] = useState([]);
  const [editId, setEditId] = useState(null);
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    /*mengambil data dari localStorage agar data tetap tersimpan*/
    const data = localStorage.getItem("dataSiswa");
    if (data) {
      setDaftarSiswa(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataSiswa", JSON.stringify(daftarSiswa));
  }, [daftarSiswa]);

  useEffect(() => {
    /*mengambil data dari API menggunakan fetch, lalu disimpan ke state dan ditampilkan*/
    fetch("https://raw.githubusercontent.com/sallsaa4u1/eksplore_jogja/refs/heads/main/data.json")
      .then((res) => res.json())
      .then((data) => setDataApi(data))
      .catch((err) => console.log(err));
  }, []);

  function tambahSiswa(e) {
    e.preventDefault();

    if (judul === "" || deskripsi === "" || kategori === "") {
      alert("Semua field harus diisi!");
      return;
    }

    const pengalamanBaru = {
      id: Date.now(),
      judul,
      deskripsi,
      kategori,
    };

    setDaftarSiswa([...daftarSiswa, pengalamanBaru]);
    alert("Data berhasil ditambahkan!");
    setJudul("");
    setDeskripsi("");
    setKategori("");

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  function hapusSiswa(id) {
    const dataBaru = daftarSiswa.filter((item) => item.id !== id);
    setDaftarSiswa(dataBaru);
    alert("Yakin ingin hapus data ini??");
  }

  function editSiswa(id) {
    const data = daftarSiswa.find((item) => item.id === id);
    setJudul(data.judul);
    setDeskripsi(data.deskripsi);
    setKategori(data.kategori);
    setEditId(id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function updateSiswa(e) {
    e.preventDefault();

    const dataUpdate = daftarSiswa.map((item) =>
      item.id === editId ? { ...item, judul, deskripsi, kategori } : item
    );

    setDaftarSiswa(dataUpdate);
    alert("Data berhasil diupdate!");
    setEditId(null);
    setJudul("");
    setDeskripsi("");
    setKategori("");

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  function hapusSemua() {
    setDaftarSiswa([]);
    alert("Semua data berhasil dihapus!");
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Portofolio Pengalaman</h1>

        <div className="card p-3 mb-4">
          <form onSubmit={editId ? updateSiswa : tambahSiswa}>
            <div className="mb-2">
              <input 
                type="text"
                className="form-control"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul pengalaman"
              />
            </div>

            <div className="mb-2">
              <input 
                type="text"
                className="form-control"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Deskripsi"
              />
            </div>

            <div className="mb-2">
              <select
                className="form-control"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
              >
                <option value="">Pilih Kategori</option>
                <option value="PKL">PKL</option>
                <option value="Freelance">Freelance</option>
                <option value="Lomba">Lomba</option>
                <option value="Project">Project</option>
                <option value="Ekstrakurikuler">Ekstrakurikuler</option>
              </select>
            </div>

            <button className="btn btn-primary">
              {editId ? "Update" : "Tambah"}
            </button>
          </form>
        </div>

        <button className="btn btn-danger mb-3" onClick={hapusSemua}>
          Hapus Semua
        </button>

        <h3 className="mt-4">Data dari API</h3>

        {dataApi.map((user) => (
          <div key={user.id} className="card mb-2 p-2">
            <h5>{user.judul}</h5>
            <p>{user.deskripsi}</p>
          </div>
        ))}

        {daftarSiswa.length === 0 && (
          <p className="text-muted">Belum ada pengalaman</p>
        )}

        {daftarSiswa.map((item) => (
          <StudentCard
            key={item.id}
            judul={item.judul}
            deskripsi={item.deskripsi}
            kategori={item.kategori}
            onDelete={() => hapusSiswa(item.id)}
            onEdit={() => editSiswa(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;