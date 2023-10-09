import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearlistItems() {
    const confirmed = window.confirm("Are sure you want to delete all items?");
    if (confirmed) setItems((items) => []);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        deleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        clearList={handleClearlistItems}
      />
      <Stats items={items} />
    </div>
  );
}
