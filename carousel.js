document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Spindle Assemblies",
            image: "assets/spindle.jpg",
            desc: "High-precision spindles for CNC machines."
        },
        {
            name: "Servo Motors",
            image: "assets/servo.jpg",
            desc: "Reliable, efficient motors for all major brands."
        },
        {
            name: "Drives & Controllers",
            image: "assets/drives.jpg",
            desc: "Genuine drives, controllers, and accessories."
        },
        {
            name: "Bearings & Linear Guides",
            image: "assets/bearings.jpg",
            desc: "Precision bearings and guides for smooth operation."
        },
        {
            name: "Tool Holders & Accessories",
            image: "assets/toolholders.jpg",
            desc: "Wide range of tool holders and accessories."
        },
        {
            name: "PCBs & Circuit Boards",
            image: "assets/pcb.jpg",
            desc: "Replacement circuit boards for CNC electronics."
        }
    ];

    const carousel = document.getElementById('product-carousel');
    if (carousel) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
            `;
            carousel.appendChild(card);
        });
    }
});