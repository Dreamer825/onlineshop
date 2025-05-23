function addToCart(name, price) {
  // Warenkorb aus dem Speicher holen (falls vorhanden)
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Produkt hinzufügen
  cart.push({ name, price });

  // Zurück in den Speicher legen
  localStorage.setItem("cart", JSON.stringify(cart));

  // Bestätigung anzeigen
  alert(`${name} wurde zum Warenkorb hinzugefügt!`);
}
