// Tipos base para o sistema
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos de usuário
export interface User extends BaseEntity {
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  lastLogin?: Date;
  avatar?: string;
}

export type UserRole = 'ADMIN' | 'MANAGER' | 'USER' | 'VIEWER';

// Tipos de produto
export interface Product extends BaseEntity {
  name: string;
  description?: string;
  sku: string;
  barcode?: string;
  qrCode?: string;
  categoryId: string;
  supplierId?: string;
  costPrice: number;
  sellingPrice: number;
  minStock: number;
  maxStock?: number;
  currentStock: number;
  unit: string;
  weight?: number;
  dimensions?: string;
  image?: string;
  isActive: boolean;
  category?: Category;
  supplier?: Supplier;
}

// Tipos de categoria
export interface Category extends BaseEntity {
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  isActive: boolean;
}

// Tipos de fornecedor
export interface Supplier extends BaseEntity {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  cnpj?: string;
  contactName?: string;
  isActive: boolean;
}

// Tipos de movimentação de estoque
export interface StockMovement extends BaseEntity {
  productId: string;
  type: MovementType;
  quantity: number;
  previousStock: number;
  newStock: number;
  reason?: string;
  reference?: string;
  notes?: string;
  product?: Product;
  userId: string;
  user?: User;
}

export type MovementType = 'IN' | 'OUT' | 'ADJUSTMENT' | 'TRANSFER';

// Tipos de compra
export interface Purchase extends BaseEntity {
  supplierId: string;
  purchaseDate: Date;
  totalAmount: number;
  status: PurchaseStatus;
  notes?: string;
  supplier?: Supplier;
  items?: PurchaseItem[];
}

export interface PurchaseItem extends BaseEntity {
  purchaseId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  product?: Product;
}

export type PurchaseStatus = 'PENDING' | 'APPROVED' | 'RECEIVED' | 'CANCELLED';

// Tipos de venda
export interface Sale extends BaseEntity {
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  saleDate: Date;
  totalAmount: number;
  status: SaleStatus;
  notes?: string;
  items?: SaleItem[];
}

export interface SaleItem extends BaseEntity {
  saleId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  product?: Product;
}

export type SaleStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';

// Tipos de autenticação
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

// Tipos de resposta da API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Tipos de filtros
export interface ProductFilters {
  search?: string;
  categoryId?: string;
  supplierId?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  lowStock?: boolean;
}

export interface StockFilters {
  productId?: string;
  type?: MovementType;
  startDate?: Date;
  endDate?: Date;
  userId?: string;
}

// Tipos de dashboard
export interface DashboardStats {
  totalProducts: number;
  totalCategories: number;
  totalSuppliers: number;
  totalUsers: number;
  lowStockProducts: number;
  outOfStockProducts: number;
  totalStockValue: number;
  recentMovements: StockMovement[];
  topProducts: Product[];
}

// Tipos de upload
export interface FileUpload {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}

// Tipos de código de barras/QR
export interface CodeScanResult {
  code: string;
  type: 'barcode' | 'qrcode';
  format?: string;
  timestamp: Date;
}

// Tipos de notificação
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
}

// Tipos de auditoria
export interface AuditLog extends BaseEntity {
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  oldValues?: any;
  newValues?: any;
  ipAddress?: string;
  userAgent?: string;
  user?: User;
}
