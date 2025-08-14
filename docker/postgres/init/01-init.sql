-- Script de inicialização do banco de dados EstoqueTI
-- Este script é executado automaticamente quando o container é criado

-- Criar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Criar usuário admin padrão (senha: admin123)
INSERT INTO users (id, email, name, password, role, "isActive", "createdAt", "updatedAt")
VALUES (
    'admin-user-001',
    'admin@estoque.com',
    'Administrador',
    '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uO.G', -- admin123
    'ADMIN',
    true,
    NOW(),
    NOW()
) ON CONFLICT (email) DO NOTHING;

-- Criar categorias padrão
INSERT INTO categories (id, name, description, color, icon, "isActive", "createdById", "updatedById", "createdAt", "updatedAt")
VALUES 
    ('cat-001', 'Eletrônicos', 'Produtos eletrônicos e tecnológicos', '#3B82F6', 'smartphone', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('cat-002', 'Informática', 'Produtos de informática e computação', '#8B5CF6', 'laptop', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('cat-003', 'Periféricos', 'Periféricos para computadores', '#06B6D4', 'mouse', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('cat-004', 'Redes', 'Equipamentos de rede e conectividade', '#10B981', 'wifi', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('cat-005', 'Software', 'Licenças e programas de computador', '#F59E0B', 'disc', true, 'admin-user-001', 'admin-user-001', NOW(), NOW())
ON CONFLICT (name) DO NOTHING;

-- Criar fornecedores padrão
INSERT INTO suppliers (id, name, email, phone, address, cnpj, "contactName", "isActive", "createdById", "updatedById", "createdAt", "updatedAt")
VALUES 
    ('sup-001', 'Tech Solutions Ltda', 'contato@techsolutions.com', '(11) 99999-9999', 'Rua das Tecnologias, 123 - São Paulo/SP', '12.345.678/0001-90', 'João Silva', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('sup-002', 'Digital Components', 'vendas@digitalcomponents.com', '(21) 88888-8888', 'Av. Digital, 456 - Rio de Janeiro/RJ', '98.765.432/0001-10', 'Maria Santos', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('sup-003', 'Network Pro', 'suporte@networkpro.com', '(31) 77777-7777', 'Rua da Conectividade, 789 - Belo Horizonte/MG', '55.444.333/0001-22', 'Pedro Costa', true, 'admin-user-001', 'admin-user-001', NOW(), NOW())
ON CONFLICT (cnpj) DO NOTHING;

-- Criar produtos de exemplo
INSERT INTO products (id, name, description, sku, barcode, "qrCode", "categoryId", "supplierId", "costPrice", "sellingPrice", "minStock", "maxStock", "currentStock", unit, weight, dimensions, "isActive", "createdById", "updatedById", "createdAt", "updatedAt")
VALUES 
    ('prod-001', 'Mouse Gamer RGB', 'Mouse gamer com iluminação RGB e 6 botões programáveis', 'MOU-001', '7891234567890', 'QR-MOU-001', 'cat-003', 'sup-001', 45.00, 89.90, 10, 100, 50, 'UN', 0.150, '12x6x4cm', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('prod-002', 'Teclado Mecânico', 'Teclado mecânico com switches Cherry MX Blue', 'TEC-001', '7891234567891', 'QR-TEC-001', 'cat-003', 'sup-001', 120.00, 249.90, 5, 50, 25, 'UN', 0.800, '35x13x3cm', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('prod-003', 'SSD 500GB', 'SSD SATA III de 500GB com velocidade de leitura de 550MB/s', 'SSD-001', '7891234567892', 'QR-SSD-001', 'cat-002', 'sup-002', 180.00, 359.90, 8, 80, 40, 'UN', 0.050, '10x7x1cm', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('prod-004', 'Switch 24 Portas', 'Switch gerenciável de 24 portas Gigabit Ethernet', 'SWI-001', '7891234567893', 'QR-SWI-001', 'cat-004', 'sup-003', 450.00, 899.90, 3, 30, 15, 'UN', 2.500, '44x30x4cm', true, 'admin-user-001', 'admin-user-001', NOW(), NOW()),
    ('prod-005', 'Licença Windows 11 Pro', 'Licença de software Windows 11 Professional', 'WIN-001', '7891234567894', 'QR-WIN-001', 'cat-005', 'sup-002', 200.00, 399.90, 20, 200, 100, 'LIC', 0.001, 'Digital', true, 'admin-user-001', 'admin-user-001', NOW(), NOW())
ON CONFLICT (sku) DO NOTHING;

-- Criar movimentações de estoque iniciais
INSERT INTO "stockMovements" (id, "productId", type, quantity, "previousStock", "newStock", reason, reference, notes, "userId", "createdAt")
VALUES 
    ('mov-001', 'prod-001', 'IN', 50, 0, 50, 'Estoque inicial', 'INIT-001', 'Estoque inicial do produto', 'admin-user-001', NOW()),
    ('mov-002', 'prod-002', 'IN', 25, 0, 25, 'Estoque inicial', 'INIT-002', 'Estoque inicial do produto', 'admin-user-001', NOW()),
    ('mov-003', 'prod-003', 'IN', 40, 0, 40, 'Estoque inicial', 'INIT-003', 'Estoque inicial do produto', 'admin-user-001', NOW()),
    ('mov-004', 'prod-004', 'IN', 15, 0, 15, 'Estoque inicial', 'INIT-004', 'Estoque inicial do produto', 'admin-user-001', NOW()),
    ('mov-005', 'prod-005', 'IN', 100, 0, 100, 'Estoque inicial', 'INIT-005', 'Estoque inicial do produto', 'admin-user-001', NOW());

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_barcode ON products(barcode);
CREATE INDEX IF NOT EXISTS idx_products_qrcode ON products("qrCode");
CREATE INDEX IF NOT EXISTS idx_products_category ON products("categoryId");
CREATE INDEX IF NOT EXISTS idx_products_supplier ON products("supplierId");
CREATE INDEX IF NOT EXISTS idx_stock_movements_product ON "stockMovements"("productId");
CREATE INDEX IF NOT EXISTS idx_stock_movements_date ON "stockMovements"("createdAt");
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);
CREATE INDEX IF NOT EXISTS idx_suppliers_cnpj ON suppliers(cnpj);

-- Comentários para documentação
COMMENT ON TABLE users IS 'Tabela de usuários do sistema';
COMMENT ON TABLE products IS 'Tabela de produtos do estoque';
COMMENT ON TABLE categories IS 'Tabela de categorias de produtos';
COMMENT ON TABLE suppliers IS 'Tabela de fornecedores';
COMMENT ON TABLE "stockMovements" IS 'Tabela de movimentações de estoque';
COMMENT ON TABLE purchases IS 'Tabela de compras de fornecedores';
COMMENT ON TABLE sales IS 'Tabela de vendas para clientes';

-- Log de inicialização
INSERT INTO "stockMovements" (id, "productId", type, quantity, "previousStock", "newStock", reason, reference, notes, "userId", "createdAt")
VALUES ('mov-init', 'prod-001', 'ADJUSTMENT', 0, 0, 0, 'Inicialização do banco', 'DB-INIT', 'Banco de dados inicializado com sucesso', 'admin-user-001', NOW());
