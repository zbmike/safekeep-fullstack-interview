import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function DataTable({data, dispatch}) {
  
    return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.surName}</TableCell>
                <TableCell align="right">{row.hours}</TableCell>
                <TableCell align="center"><Button color="secondary" onClick={() => dispatch({type:"delete", payload: {id: row.id}})} ><Icon>delete</Icon></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    );
  }