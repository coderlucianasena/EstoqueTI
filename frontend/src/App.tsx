import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

// Páginas de Autenticação
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Páginas do Dashboard
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import ProductDetail from './pages/products/ProductDetail';
import ProductForm from './pages/products/ProductForm';
import Categories from './pages/categories/Categories';
import Suppliers from './pages/suppliers/Suppliers';
import Stock from './pages/stock/Stock';
import Purchases from './pages/purchases/Purchases';
import Sales from './pages/sales/Sales';
import Users from './pages/users/Users';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

// Componentes
import LoadingSpinner from './components/ui/LoadingSpinner';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <Routes>
      {/* Rotas públicas de autenticação */}
      <Route
        path="/auth"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <AuthLayout />
          )
        }
      >
        <Route index element={<Navigate to="/auth/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* Rotas protegidas do dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        
        {/* Produtos */}
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        
        {/* Categorias */}
        <Route path="categories" element={<Categories />} />
        
        {/* Fornecedores */}
        <Route path="suppliers" element={<Suppliers />} />
        
        {/* Estoque */}
        <Route path="stock" element={<Stock />} />
        
        {/* Compras */}
        <Route path="purchases" element={<Purchases />} />
        
        {/* Vendas */}
        <Route path="sales" element={<Sales />} />
        
        {/* Usuários */}
        <Route path="users" element={<Users />} />
        
        {/* Perfil e Configurações */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Rota para códigos de barras/QR */}
      <Route
        path="/scan"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 p-4">
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Leitor de Códigos
                </h1>
                <p className="text-gray-600">
                  Use esta página para escanear códigos de barras e QR codes.
                </p>
                {/* Aqui será implementado o componente de leitura */}
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      {/* Rota 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">
                Página não encontrada
              </p>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Voltar
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
