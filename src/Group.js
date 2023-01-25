import React from "react";
import { useDrop } from "react-dnd";

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
        height: 100
      }}
    >
      {group.name[0].toUpperCase() + group.name.substring(1).toLowerCase()}
      {group.student.map((name,i) => <div key={i} style={{paddingLeft:10}}>{name}</div>)}
    </div>
  );
};

export default Group;
