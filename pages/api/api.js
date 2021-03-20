const jsonData = [
  {
    id: 0,
    firstname: "Jack",
    lastname: "Ripper",
    age: 20,
    nickname: "Jkri",
  },
  {
    id: 1,
    firstname: "Nina",
    lastname: "Hawk",
    age: 23,
    nickname: "Hawni",
  },
  {
    id: 2,
    firstname: "Sony",
    lastname: "Hawk",
    age: 25,
    nickname: "Sonic",
  },
];

export default (req, res) => {
  res.status(200).json(jsonData);
};
