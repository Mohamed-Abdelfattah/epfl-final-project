export default function ProfileInfo({ data }) {
  //
  const { id, name, photo_path, role } = data;

  return (
    <>
      <div className="bg-base-100 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur flex flex-col ">
        <div className=" w-20 h-20 lg:w-28 lg:h-28 transition-all">
          <img
            className=" rounded-full object-cover"
            src={photo_path}
            alt="User Avatar"
          />
        </div>
        <h2 className="mt-2 mb-2 font-medium">{name}</h2>
        <h4>{role}</h4>
      </div>
    </>
  );
}
