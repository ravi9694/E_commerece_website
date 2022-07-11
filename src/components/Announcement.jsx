import { useState } from "react";

export default function Announcement() {
  const [crossed, setCrossed] = useState(false);

  const handleCross = () => {
    setCrossed(!crossed);
  };
  return (
    <div>
      {!crossed ? (
        <div className="px-4 row justify-content-between bg-primary text-white fs-6 mx-0">
          <span className="col">Hurry Up ! 20% off on all products !</span>
          <span
            style={{ cursor: "pointer" }}
            className="col pe-auto text-end"
            onClick={handleCross}
          >
            x
          </span>
        </div>
      ) : null}
    </div>
  );
}
