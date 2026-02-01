// ----- CONFIG -----
const navLinks = [
  { name: "Overworld", url: "/World/overworld/" },
  { name: "Nether", url: "/World/nether/" },
  { name: "Netherhub", url: "/World/netherhub/" }
];

// ----- CREATE NAV -----
const nav = document.createElement("nav");
nav.className = "floating-nav";

navLinks.forEach(link => {
  const btn = document.createElement("button");
  btn.textContent = link.name;

  if (window.location.pathname.startsWith(link.url)) {
    btn.classList.add("active");
  }

  btn.onclick = () => {
    window.location.href = link.url;
  };

  nav.appendChild(btn);
});

document.body.appendChild(nav);
