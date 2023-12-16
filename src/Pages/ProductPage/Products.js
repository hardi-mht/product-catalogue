import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { GlobalContext } from "../../context/GlobalContext";
import ProductTable from "../../Components/ProductTable";

const Products = () => {
  const { userData, getProductsData, products, productView } = useContext(GlobalContext);
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}><Grid container spacing={2} style={{ marginTop: 10 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {productView ?
          <Grid container spacing={2} style={{ marginTop: 10 }}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={4} md={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid> : <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: '20%' }}>Images</TableCell>
                    <TableCell align="right" style={{ width: '14px' }}>Name</TableCell>
                    <TableCell align="right" style={{ width: '14px' }}>Stock&nbsp;</TableCell>
                    <TableCell align="right" style={{ width: '14px' }}>Set Size&nbsp;</TableCell>
                    <TableCell align="right" style={{ width: '14px' }}>Set&nbsp;</TableCell>
                    <TableCell align="right" style={{ width: '14px' }}>&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <ProductTable product={product} />
                  ))}

                </TableBody>
              </Table>
            </TableContainer>
          </>}</Box>
    </Container>
  );
};

export default Products;
