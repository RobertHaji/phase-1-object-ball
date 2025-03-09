function homeTeam() {
  let object = gameObject();
  return object["home"]["teamName"];
}
console.log(homeTeam());