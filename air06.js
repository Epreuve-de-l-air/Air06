#! node

// Quicksort script

// Gestion d'erreur

let arg = process.argv;
arg.splice(0, 2);

if (arg.length < 3) {
  console.log(
    "Veuillez indiquer au script, une liste de nombre à trier. Exemple : node air06.js 15 4 2 8 56 3"
  );
  return;
}

for (let x = 0; x < arg.length; x++) {
  if (arg[x] % 1 != 0) {
    console.log("Veuillez indiquer seulement des nombres au script");
    return;
  }
}

// Function

const quicksort = (arg) => {
  const liste = arg.map((num) => Number(num));

  if (liste.length <= 1) {
    return liste;
  }

  const pivot = liste.pop();
  const left = [];
  const right = [];

  for (let x = 0; x < liste.length; x++) {
    if (liste[x] < pivot) {
      left.push(liste[x]);
    } else {
      right.push(liste[x]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(quicksort(arg));
