import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  ProductOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import CartDrawer from "./CartDrawer";

export const Header: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((s: any) => s.cart.items);
  const cartCount = cartItems.length;

  return (
    <>
      <header
        style={{
          background: "#e6f4ff",
          padding: "0.8rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Home */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          <a href="/" style={{ color: "#1677ff", fontSize: "1rem" }}>
            <HomeOutlined /> Home
          </a>
          <a href="/products" style={{ color: "#1677ff", fontSize: "1rem" }}>
            <ProductOutlined /> Produtos
          </a>
          <a href="/clients" style={{ color: "#1677ff", fontSize: "1rem" }}>
            <TeamOutlined /> Clientes
          </a>
        </div>

        {/* Barra de busca */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            margin: "0 2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "20px",
              padding: "0.3rem 1rem",
              width: "60%",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              placeholder="Buscar produtos..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <SearchOutlined style={{ color: "#1677ff", fontSize: "18px" }} />
          </div>
        </div>

        {/* Login + Cart */}
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="#"
            style={{
              color: "#1677ff",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <UserOutlined /> Login
          </a>
          <button
            onClick={() => setCartOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#1677ff",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            <Badge count={cartCount} offset={[-5, 5]}>
              <ShoppingCartOutlined /> Carrinho
            </Badge>
          </button>
        </nav>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};
