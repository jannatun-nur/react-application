import  { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const json = [
  {
    "department": "Engineering",
    "sub_departments": ["Frontend", "Backend"]
  },
  {
    "department": "Marketing",
    "sub_departments": ["SEO", "Content"]
  }
];

const Categories = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [department]: !prevOpen[department] }));
  };

  const handleSelect = (department: string, subDepartment?: string) => {
    if (subDepartment) {
      setSelected(prevSelected => ({
        ...prevSelected,
        [subDepartment]: !prevSelected[subDepartment],
        [department]: json
          .find(dep => dep.department === department)!
          .sub_departments.every(sub => selected[sub] || sub === subDepartment)
      }));
    } else {
      const allSelected = !selected[department];
      setSelected(prevSelected => ({
        ...prevSelected,
        [department]: allSelected,
        ...Object.fromEntries(
          json
            .find(dep => dep.department === department)!
            .sub_departments.map(sub => [sub, allSelected])
        )
      }));
    }
  };

  return (
    <List>
      {json.map((dep, index) => (
        <div key={index}>
          <ListItem>
            <Checkbox
              checked={!!selected[dep.department]}
              onChange={() => handleSelect(dep.department)}
            />
            <ListItemText primary={dep.department} />
            <IconButton onClick={() => handleToggle(dep.department)}>
              {open[dep.department] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={open[dep.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dep.sub_departments.map((sub, idx) => (
                <ListItem key={idx} sx={{ pl: 4 }}>
                  <Checkbox
                    checked={!!selected[sub]}
                    onChange={() => handleSelect(dep.department, sub)}
                  />
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Categories;
