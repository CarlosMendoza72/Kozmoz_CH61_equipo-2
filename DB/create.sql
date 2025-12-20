USE `Kozmoz`;

-- 1. Tabla: category
INSERT INTO `category` (`names`) VALUES 
('Ficción'), ('Ciencia'), ('Historia'), ('Fantasía'), ('Biografías');

-- 2. Tabla: users
INSERT INTO `users` (`names`, `email`, `password`, `creationDate`) VALUES 
('Juan Pérez', 'juan@mail.com', 'pass123', NOW()),
('Maria Garcia', 'maria@mail.com', 'mery789', NOW()),
('Carlos Ruiz', 'cruiz@mail.com', 'carlos01', NOW()),
('Ana López', 'ana@mail.com', 'ana_pass', NOW()),
('Luis Sosa', 'luis@mail.com', 'luis999', NOW());

-- 3. Tabla: book
INSERT INTO `book` (`title`, `authors`, `price`, `stock`, `creationDate`, `category_idCategory`) VALUES 
('El Quijote', 'Miguel de Cervantes', 25.50, 10, NOW(), 1),
('Breve Historia del Tiempo', 'Stephen Hawking', 18.00, 5, NOW(), 2),
('Sapiens', 'Yuval Noah Harari', 22.00, 8, NOW(), 3),
('Harry Potter', 'J.K. Rowling', 30.00, 15, NOW(), 4),
('Steve Jobs', 'Walter Isaacson', 20.00, 12, NOW(), 5);

-- 4. Tabla: orders
INSERT INTO `orders` (`orderDate`, `total`, `users_idUser`) VALUES 
(NOW(), 51.00, 1),
(NOW(), 18.00, 2),
(NOW(), 52.00, 3),
(NOW(), 30.00, 4),
(NOW(), 20.00, 5);

-- 5. Tabla: orders_has_book
INSERT INTO `orders_has_book` (`orderId`, `bookId`, `quantity`, `price`) VALUES 
(1, 1, 2, 25.50), -- Juan compró 2 Quijotes
(2, 2, 1, 18.00), -- Maria compró 1 de Ciencia
(3, 3, 1, 22.00), -- Carlos compró 1 Sapiens
(3, 4, 1, 30.00), -- Carlos también compró 1 Harry Potter
(4, 4, 1, 30.00), -- Ana compró 1 Harry Potter
(5, 5, 1, 20.00); -- Luis compró 1 Biografía

SELECT b.title AS Libro, b.price AS Precio, c.names AS Categoria
FROM book b
JOIN category c ON b.category_idCategory = c.idCategory;

SELECT 
    u.names AS Cliente, 
    o.idOrder AS Numero_Pedido, 
    b.title AS Libro_Comprado, 
    ohb.quantity AS Cantidad,
    ohb.price AS Precio_Unitario
FROM users u
JOIN orders o ON u.idUser = o.users_idUser
JOIN orders_has_book ohb ON o.idOrder = ohb.orderId
JOIN book b ON ohb.bookId = b.idBook;

SELECT title, stock FROM book WHERE stock < 10;