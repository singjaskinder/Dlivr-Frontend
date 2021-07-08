const data = [
  { date: "2021-05-08", status: "bidding", count: 1 },
  { date: "2021-05-08", status: "inprogress", count: 2 },
  { date: "2021-05-08", status: "upcoming", count: 3 },
  { date: "2021-05-08", status: "cancelled", count: 1 },
  { date: "2021-05-08", status: "completed", count: 1 },
  { date: "2021-05-07", status: "bidding", count: 4 },
  { date: "2021-05-07", status: "inprogress", count: 2 },
  { date: "2021-05-07", status: "upcoming", count: 9 },
  { date: "2021-05-07", status: "cancelled", count: 3 },
  { date: "2021-05-07", status: "completed", count: 4 },
  { date: "2021-05-06", status: "bidding", count: 9 },
  { date: "2021-05-06", status: "inprogress", count: 1 },
  { date: "2021-05-06", status: "upcoming", count: 4 },
  { date: "2021-05-06", status: "cancelled", count: 3 },
  { date: "2021-05-06", status: "completed", count: 7 },
  { date: "2021-05-05", status: "bidding", count: 4 },
  { date: "2021-05-05", status: "inprogress", count: 0 },
  { date: "2021-05-05", status: "upcoming", count: 8 },
  { date: "2021-05-05", status: "cancelled", count: 6 },
  { date: "2021-05-05", status: "completed", count: 8 },
  { date: "2021-05-04", status: "bidding", count: 2 },
  { date: "2021-05-04", status: "inprogress", count: 7 },
  { date: "2021-05-04", status: "upcoming", count: 9 },
  { date: "2021-05-04", status: "cancelled", count: 3 },
  { date: "2021-05-04", status: "completed", count: 5 },
  { date: "2021-05-03", status: "bidding", count: 2 },
  { date: "2021-05-03", status: "inprogress", count: 9 },
  { date: "2021-05-03", status: "upcoming", count: 5 },
  { date: "2021-05-03", status: "cancelled", count: 3 },
  { date: "2021-05-03", status: "completed", count: 9 },
  { date: "2021-05-02", status: "bidding", count: 4 },
  { date: "2021-05-02", status: "inprogress", count: 6 },
  { date: "2021-05-02", status: "upcoming", count: 8 },
  { date: "2021-05-02", status: "cancelled", count: 9 },
  { date: "2021-05-02", status: "completed", count: 5 },
  { date: "2021-05-01", status: "bidding", count: 3 },
  { date: "2021-05-01", status: "inprogress", count: 6 },
  { date: "2021-05-01", status: "upcoming", count: 7 },
  { date: "2021-05-01", status: "cancelled", count: 3 },
  { date: "2021-05-01", status: "completed", count: 7 },
];

let bidding = [];

const myData = (cStatus) => {
  const filteredData = data
    .filter((item) => {
      return item.status === cStatus;
    })
    .map((i) => {
      (i.x = i.date), (i.y = i.count);
      return i;
    });
  return filteredData;
};

const formatData = () => {
  let finalData = [];
  finalData.push(
    {
      id: "bidding",
      color: "red",
      data: myData("bidding"),
    },
    {
      id: "inprogress",
      color: "yellow",
      data: myData("inprogress"),
    },
    {
      id: "upcoming",
      color: "pink",
      data: myData("upcoming"),
    },
    {
      id: "completed",
      color: "green",
      data: myData("completed"),
    },
    {
      id: "cancelled",
      color: "blue",
      data: myData("cancelled"),
    }
  );
  return finalData;
};

// myData(status);
console.log(formatData());


[

    { week: 18, status: 'upcoming', count: 3 },
    { week: 18, status: 'cancelled', count: 1 },
    { week: 18, status: 'inprogress', count: 2 },
    { week: 18, status: 'completed', count: 1 },
    { week: 18, status: 'bidding', count: 1 },

    { week: 17, status: 'upcoming', count: 9 },
    { week: 17, status: 'cancelled', count: 6 },
    { week: 17, status: 'inprogress', count: 4 },
    { week: 17, status: 'completed', count: 3 },
    { week: 17, status: 'bidding', count: 8 },

    { week: 16, status: 'upcoming', count: 4 },
    { week: 16, status: 'cancelled', count: 2 },
    { week: 16, status: 'inprogress', count: 9 },
    { week: 16, status: 'completed', count: 4 },
    { week: 16, status: 'bidding', count: 9 },

    { week: 15, status: 'upcoming', count: 3 },
    { week: 15, status: 'cancelled', count: 8 },
    { week: 15, status: 'inprogress', count: 4 },
    { week: 15, status: 'completed', count: 9 },
    { week: 15, status: 'bidding', count: 4 },
]