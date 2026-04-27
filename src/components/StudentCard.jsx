import Navbar from "./Navbar";

function StudentCard({ judul, deskripsi, kategori, onDelete, onEdit }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{judul}</h5>
        <p className="card-text">{deskripsi}</p>
        <p><strong>Kategori:</strong>{kategori}</p>

        <button className="btn btn-warning me-2" onClick={onEdit}>
          Edit
        </button>

        <button className="btn btn-danger" onClick={onDelete}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default StudentCard;