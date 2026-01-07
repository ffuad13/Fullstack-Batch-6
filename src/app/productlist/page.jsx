"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CircularProgress, Box } from "@mui/material";
import useAuthGurad from "@/hooks/useAuthGuard";

export default function ProductListPage() {
  useAuthGurad()

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }
        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 6, p: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Product List
      </Typography>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: Rp{item.product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total: Rp{item.total_price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {new Date(item.transaction_date).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
