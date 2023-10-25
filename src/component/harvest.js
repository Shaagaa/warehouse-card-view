import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import axios from 'axios';
const theme = createTheme(); // Create a theme

// Define the styles for your table components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const CustomTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
            const url = 'http://192.168.0.235:8017/api/v1/harvest/harvest';
            const response = await axios.post(url);
            console.log('Response Data:', response.data.result);
            setData(response.data.result)
            } catch (error) {
            console.error('Error:', error);
            }
        }
        fetchData();
    }, []);
  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}
        <h2 className="location-title">Бөглөх хуудасны бункерийн бүртгэл болон пүүний бүртгэл читоноор холбогдсон бичилтүүд харагдана</h2>
        <TableContainer component={Paper}>
        <Table>
            <StyledTableHead>
            <TableRow>
                <StyledTableCell>Компани</StyledTableCell>
                <StyledTableCell>Хэсэг</StyledTableCell>
                <StyledTableCell>Талбай</StyledTableCell>
                <StyledTableCell>Тарималын төрөл</StyledTableCell>
                <StyledTableCell>Сорт</StyledTableCell>
                <StyledTableCell>Ургац</StyledTableCell>
                <StyledTableCell>Цент</StyledTableCell>
            </TableRow>
            </StyledTableHead>
            <TableBody>
            {/* Map through your data and create rows */}
            {data.map((row,index) => (
                <TableRow key={index}>
                <TableCell>{row.company_name}</TableCell>
                <TableCell>{row.sector_name}</TableCell>
                <TableCell>{row.square_name}</TableCell>
                <TableCell>{row.cultivation_type_name}</TableCell>
                <TableCell>{row.cultivation_sort_name}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.cent}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </ThemeProvider>
  );
};

export default CustomTable;
