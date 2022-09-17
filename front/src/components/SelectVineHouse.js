
export default function SelectVineHouse({onStoreChoose,vineHouses}) {
  return (
    <>
      <select
        className="selectShop"
        onChange={(e) => onStoreChoose(e.target.value)}
      >
        {vineHouses.map((el) => (
          <option value={`${el.name}`}>{el.name}</option>
        ))}
        <option value="km20">KM20</option>
        <option value="belief">BELIEF</option>
        <option value="brandshop">BRANDSHOP</option>
      </select>
    </>
  );
}