const data = {
    products: [
        { id: 1, name: 'Smartphone', price: '699.99' },
        { id: 2, name: 'Laptop', price: '1299.99' },
        { id: 3, name: 'Headphones', price: '99.99' },
        { id: 4, name: 'Smartwatch', price: '199.99' },
        { id: 5, name: 'Tablet', price: '499.99' },
        { id: 6, name: 'Camera', price: '599.99' },
        { id: 7, name: 'Bluetooth Speaker', price: '79.99' },
        { id: 8, name: 'Gaming Console', price: '399.99' },
        { id: 9, name: 'Fitness Tracker', price: '149.99' },
        { id: 10, name: 'Wireless Earbuds', price: '129.99' },
        { id: 11, name: 'Monitor', price: '299.99' },
        { id: 12, name: 'External Hard Drive', price: '79.99' },
        { id: 13, name: 'Printer', price: '199.99' },
        { id: 14, name: 'Keyboard', price: '49.99' },
        { id: 15, name: 'Mouse', price: '29.99' },
        { id: 16, name: 'Router', price: '99.99' },
        { id: 17, name: 'Webcam', price: '69.99' },
        { id: 18, name: 'Portable Charger', price: '39.99' },
        { id: 19, name: 'USB Flash Drive', price: '19.99' },
        { id: 20, name: 'Wireless Mouse', price: '59.99' }
    ],
    customers: [
        { id: 1, name: 'John Doe', address: '123 Main St, Springfield, IL 62701', postcode: '62701' },
        { id: 2, name: 'Jane Smith', address: '456 Elm St, Anytown, NY 10001', postcode: '10001' },
        { id: 3, name: 'David Johnson', address: '789 Oak St, Smallville, TX 75001', postcode: '75001' },
        { id: 4, name: 'Emily Brown', address: '101 Pine St, Lakeside, CA 92040', postcode: '92040' },
        { id: 5, name: 'Michael Wilson', address: '234 Cedar St, Rivertown, FL 33101', postcode: '33101' },
        { id: 6, name: 'Lisa Taylor', address: '567 Maple St, Hillside, PA 19001', postcode: '19001' },
        { id: 7, name: 'Robert Martinez', address: '890 Birch St, Mountainview, WA 98001', postcode: '98001' },
        { id: 8, name: 'Sarah Anderson', address: '111 Spruce St, Oceanview, NJ 07001', postcode: '07001' },
        { id: 9, name: 'Daniel Thomas', address: '222 Elm St, Sunnyvale, CA 94086', postcode: '94086' },
        { id: 10, name: 'Jennifer Lee', address: '333 Oak St, Forestville, NY 14701', postcode: '14701' },
        { id: 11, name: 'William Garcia', address: '444 Pine St, Greenvale, TX 76001', postcode: '76001' },
        { id: 12, name: 'Amanda Rodriguez', address: '555 Maple St, Riverdale, FL 33401', postcode: '33401' },
        { id: 13, name: 'Matthew Hernandez', address: '666 Cedar St, Lakeside, PA 19101', postcode: '19101' },
        { id: 14, name: 'Jessica Lopez', address: '777 Birch St, Hillside, WA 98501', postcode: '98501' },
        { id: 15, name: 'Christopher Perez', address: '888 Spruce St, Oceanview, NJ 07601', postcode: '07601' },
        { id: 16, name: 'Ashley Sanchez', address: '999 Elm St, Sunnyvale, CA 95086', postcode: '95086' },
        { id: 17, name: 'Joshua Scott', address: '123 Oak St, Forestville, NY 11701', postcode: '11701' },
        { id: 18, name: 'Samantha Ramirez', address: '456 Pine St, Greenvale, TX 75001', postcode: '75001' },
        { id: 19, name: 'Andrew Flores', address: '789 Cedar St, Riverdale, FL 33441', postcode: '33441' },
        { id: 20, name: 'Megan King', address: '101 Birch St, Lakeside, PA 19111', postcode: '19111' }
    ],
    transactions: [
        { id: 1, Type: 'Cash', Amount: 100, date:'Wed Mar 20 2024 08:00:00', name: 'John Doe', status: 'APPROVED', address: '456 Oak St, Anytown, USA', phoneNumber: '123-456-7890' },
        { id: 2, Type: 'Card', Amount: 200, date:'Wed Mar 20 2024 08:00:00', name: 'Alice Smith', status: 'DECLINED', address: '789 Elm St, Anytown, USA', phoneNumber: '234-567-8901' },
        { id: 3, Type: 'Cash', Amount: 150, date:'Wed Mar 20 2024 08:00:00', name: 'Bob Johnson', status: 'APPROVED', address: '101 Pine St, Anytown, USA', phoneNumber: '345-678-9012' },
        { id: 4, Type: 'Card', Amount: 175, date:'Wed Mar 20 2024 08:00:00', name: 'Emma Davis', status: 'DECLINED', address: '202 Maple St, Anytown, USA', phoneNumber: '456-789-0123' },
        { id: 5, Type: 'Cash', Amount: 90, date: 'Wed Mar 20 2024 08:00:00', name: 'Michael Wilson', status: 'APPROVED', address: '303 Cedar St, Anytown, USA', phoneNumber: '567-890-1234' },
        { id: 6, Type: 'Card', Amount: 220, date: 'Wed Mar 20 2024 08:00:00', name: 'Sarah Brown', status: 'DECLINED', address: '404 Birch St, Anytown, USA', phoneNumber: '678-901-2345' },
        { id: 7, Type: 'Cash', Amount: 75, date: 'Wed Mar 20 2024 08:00:00', name: 'David Lee', status: 'APPROVED', address: '505 Walnut St, Anytown, USA', phoneNumber: '789-012-3456' },
        { id: 8, Type: 'Card', Amount: 300, date: 'Wed Mar 20 2024 08:00:00', name: 'Jennifer White', status: 'APPROVED', address: '606 Pineapple St, Anytown, USA', phoneNumber: '890-123-4567' },
        { id: 9, Type: 'Cash', Amount: 120, date: 'Wed Mar 20 2024 08:00:00', name: 'Chris Taylor', status: 'DECLINED', address: '707 Banana St, Anytown, USA', phoneNumber: '901-234-5678' },
        { id: 10, Type: 'Card', Amount: 250, date: 'Wed Mar 20 2024 08:00:00', name: 'Emily Clark', status: 'APPROVED', address: '808 Strawberry St, Anytown, USA', phoneNumber: '012-345-6789' },
        { id: 11, Type: 'Cash', Amount: 80, date: 'Wed Mar 20 2024 08:00:00', name: 'Ryan Hall', status: 'DECLINED', address: '909 Orange St, Anytown, USA', phoneNumber: '123-456-7890' },
        { id: 12, Type: 'Card', Amount: 190, date: 'Wed Mar 20 2024 08:00:00', name: 'Laura King', status: 'APPROVED', address: '111 Lemon St, Anytown, USA', phoneNumber: '234-567-8901' },
        { id: 13, Type: 'Cash', Amount: 130, date: 'Wed Mar 20 2024 08:00:00', name: 'Kevin Martinez', status: 'APPROVED', address: '222 Cherry St, Anytown, USA', phoneNumber: '345-678-9012' },
        { id: 14, Type: 'Card', Amount: 280, date: 'Wed Mar 20 2024 08:00:00', name: 'Amanda Scott', status: 'DECLINED', address: '333 Grape St, Anytown, USA', phoneNumber: '456-789-0123' },
        { id: 15, Type: 'Cash', Amount: 110, date: 'Wed Mar 20 2024 08:00:00', name: 'Daniel Green', status: 'APPROVED', address: '444 Watermelon St, Anytown, USA', phoneNumber: '567-890-1234' },
        { id: 16, Type: 'Card', Amount: 320, date: 'Wed Mar 20 2024 08:00:00', name: 'Jessica Rodriguez', status: 'APPROVED', address: '555 Kiwi St, Anytown, USA', phoneNumber: '678-901-2345' },
        { id: 17, Type: 'Cash', Amount: 70, date: 'Wed Mar 20 2024 08:00:00', name: 'Justin Hernandez', status: 'DECLINED', address: '666 Mango St, Anytown, USA', phoneNumber: '789-012-3456' },
        { id: 18, Type: 'Card', Amount: 180, date: 'Wed Mar 20 2024 08:00:00', name: 'Nicole Adams', status: 'APPROVED', address: '777 Papaya St, Anytown, USA', phoneNumber: '890-123-4567' },
        { id: 19, Type: 'Cash', Amount: 140, date: 'Wed Mar 20 2024 08:00:00', name: 'Steven Campbell', status: 'DECLINED', address: '888 Blueberry St, Anytown, USA', phoneNumber: '901-234-5678' }
    ]
}

export default data;