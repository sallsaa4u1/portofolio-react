import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5 text-center">
        <h1>Halo, Saya Aulia Sallsa Supriyono</h1>
        <p className="lead">
          Saya siswa RPL yang sedang belajar membuat website menggunakan React.
        </p>

        <hr />

        <p>Selamat datang di portofolio saya</p>
      </div>
    </div>
  );
}

export default Home;