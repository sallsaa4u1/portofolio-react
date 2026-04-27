import Navbar from "../components/Navbar";

function About() {
    return (
        <div>
            <Navbar />

            <div className="container mt-5">
                <h1>Tentang Saya</h1>

                <p>
                    Saya adalah siswa jurusan RPL yang tertarik di bidang web development.
                </p>

                <h3>Skill</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React (dasar)</li>
                </ul>

                <h3>Tujuan</h3>
                <p>
                    Ingin menjadi web developer dan terus belajar teknologi baru.
                </p>
            </div>
        </div>
    );
}

export default About;