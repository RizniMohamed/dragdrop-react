import React from "react";
import { useDrag } from "react-dnd";

const Name = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name },
    type: "name",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{
      opacity: isDragging ? 0.5 : 1,
      padding: "0.5rem",
      backgroundColor: "#123449",
      color: "white", marginTop: 2
    }}>
      {name[0].toUpperCase() + name.substring(1).toLowerCase()}
    </div>
  );
};

export default Name;
