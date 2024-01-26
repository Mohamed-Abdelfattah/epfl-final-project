export default function TraineeStats({ id, name, role, photo_path, progress }) {
  //

  return (
    <div className="stat">
      <div className="stat-figure text-secondary">
        <div className="avatar ">
          {/* online */}
          <div className="w-16 rounded-full">
            <img src={photo_path} alt="User Avatar" />
          </div>
        </div>
      </div>
      <div className="stat-value">{progress}%</div>
      <div className="stat-title">Track Completion</div>
      <div className="stat-desc text-secondary">{name}</div>
    </div>
  );
}
