import React from "react";
const mockData = {
  "name": "Price",
  "values": {
    "counts": ["0", 4, "50", 50, "200", 8, "350", 20, "500", 34],
    "gap": 50,
    "start": 0,
    "end": 2000,
  },
};

function Data() {
  const counts = mockData.values.counts;
  console.log(counts);

  return (
    <div className="form">
      {counts.map((item, index) => (
        <div key={item}>
          {typeof item === "string"
            ? `${item} ${
                isNaN(counts[index + 2])
                  ? "+"
                  : ` to  ${counts[index + 2] - 0.01}`
              } (${counts[index + 1]})`
            : ""}
        </div>
      ))}
    </div>
  );
}

export default Data;
