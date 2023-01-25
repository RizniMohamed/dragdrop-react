import {
  Button,
  Input,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import Group from "./Group";
import Name from "./Name";

const useStyles = makeStyles({

  divAddContainer: {
    display: "flex",
    // backgroundColor: "#123559",
    marginBottom: 10,
  },
  divRoot: {
    color: "white",
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
    backgroundColor: "#123559",
  },
  divContainer: {
    backgroundColor: "#123",
    margin: 20,
    width: "100%",
    minHeight: "50vh",
  },
  divGroupContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  typoName: {
    border: "1px solid red",
    fontSize: 15,
  },
  TextBox: {
    color: "rgb(255,255,255,0.5)"
  }
});

function App() {
  const classes = useStyles();
  const [group, setGroup] = useState([
    {
      name: "Group 1",
      student: ["Rizni"]
    },
    {
      name: "Group 2",
      student: []
    },
    {
      name: "Group 3",
      student: []
    },
  ]);
  const [name, setName] = useState(["John Smith", "Samantha Jones", "Mike Brown"]);

  const onAddClick = (e) => {
    e.preventDefault();
    if (e.target.group) {
      let inputName = e.target.group.value.toLowerCase();
      if (new Set(group).has(inputName)) alert("Name already exist");
      else setGroup(Array.from([...group, { name: inputName, student: [] }]));
    }
    if (e.target.name) {
      let inputName = e.target.name.value.toLowerCase();
      if (new Set(name).has(inputName)) alert("Name already exist");
      else setName(Array.from([...name, inputName]));
    }
  };

  const onDrop = (itemName, groupName) => {
    const targetGroup = group.find(g => g.name.toLowerCase() === groupName.toLowerCase())
    targetGroup.student.push(itemName)
    setGroup(group)

    const newNames = name.filter(name => name.toLowerCase() !== itemName.toLowerCase())
    setName(newNames)

  }

  return (
    <div className={classes.divRoot}>

      <div className={classes.divContainer}>
        {/* Names */}
        <form onSubmit={onAddClick} className={classes.divAddContainer}>
          <Input placeholder="Group Name" type="text" size="small" name="name" required={true} className={classes.TextBox} />
          <Button type="submit" variant="contained" color="primary" size="small" style={{ textTransform: "none" }} >
            Add
          </Button>
        </form>
        {name.map((name, i) => <Name key={i} name={name} />)}
      </div>

      {/* Groups */}
      <div className={classes.divContainer}>
        <form onSubmit={onAddClick} className={classes.divAddContainer}>
          <Input placeholder="Group Name" type="text" size="small" name="group" required={true} className={classes.TextBox} />
          <Button type="submit" variant="contained" color="primary" size="small" style={{ textTransform: "none" }} >
            Add
          </Button>
        </form>
        <div className={classes.divGroupContainer}>
          {group.map((group, i) => <Group key={i} group={group} onDrop={onDrop} />)}
        </div>
      </div>

    </div>
  );
}

export default App;
