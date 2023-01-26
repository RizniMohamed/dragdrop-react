import React from "react";
import { useDrop } from "react-dnd";
import Name from "./Name"
const Group = ({ group, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "name",
    drop: (item) => {
      onDrop(item.name, group.name)
      console.log(`${item.name} dropped into ${group.name}`);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? (canDrop ? "green" : "red") : "#123449",
        padding: "0.5rem",
        color: "white",
        margin: 5,
        minWidth: 300,
        minHeight: 100
      }}
    >
      {group.name[0].toUpperCase() + group.name.substring(1).toLowerCase()}
      {group.student.map((name, i) => <Name key={i} name={name} /> )}
    </div>
  );
};

export default Group;
