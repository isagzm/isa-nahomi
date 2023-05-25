export function kata() {
  const div = document.createElement("div");
  const p = document.createElement("p");
  div.id = "square";
  p.id = "text";
  p.textContent = "Hello World";
  div.appendChild(p);
  document.body.appendChild(div);
}
