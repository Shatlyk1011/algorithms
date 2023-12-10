// MAPS

const map = new Map();

map.set("key", { he: "heheh" });

console.log("map", map);

console.log("GET", map.get("key"));


//recursive 
function recursive(num) {
  if (num === 1) return num;

  return num + recursive(num - 1);
}

console.log("recursive", recursive(5));