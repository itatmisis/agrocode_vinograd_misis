
export default function SelectVineHouse({ onStoreChoose,vineHouses}) {
  return (
    <>
      <select
        className="selectShop"
        onChange={(e) => onStoreChoose(e.target.value)}
      >
        {vineHouses.map((el) => (
          <option key={el} value={`${el}`}>
            {el.name}
          </option>
        ))}
        
      </select>
    </>
  );
}