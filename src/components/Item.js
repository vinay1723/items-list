export default function Item({ item, deleteItems, onToggleItem }) {
  function onCheck() {
    onToggleItem(item.id);
  }
  function onDeleteItems() {
    deleteItems(item.id);
  }
  return (
    <li>
      <input className="check" type="checkbox" onClick={onCheck} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItems}>❌</button>
    </li>
  );
}
