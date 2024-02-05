import { defineStore } from "pinia";
import type { Product } from "@/model/types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: 'price' as string,
        categoryId: null as number|null,
        _products: [
            { 
                name: 'Silla', 
                price: 56, 
                id: 1, 
                image: '/products/silla.webp',
                categoryId: 1
            },
            { 
                name: 'Portátil', 
                price: 450, 
                id: 2, 
                image: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I',
                categoryId: 2
            },
            { 
                name: 'Micrófono', 
                price: 120, 
                id: 3, 
                image: '/products/microfono.webp',
                categoryId: 2
            },
            { 
                name: 'Parlantes', 
                price: 15, 
                id: 4,
                image: '/products/parlantes.jpg',
                categoryId:1
            },
            { 
                name: 'Audífonos', 
                price: 700, 
                id: 5,
                image: '/products/headphones.jpg',
                categoryId: 2
            },
            { 
                name: 'Mouse Gamer', 
                price: 512, 
                id: 6,
                image: '/products/mouse.jpg',
                categoryId: 2
            },
            { 
                name: 'Microfono Estéreo', 
                price: 10, 
                id: 7,
                image: '/products/microfono.jpg',
                categoryId: 1
            },
            { 
                name: 'Monitor', 
                price: 56, 
                id: 8,
                image: '/products/monitor.jpg',
                categoryId: 2
            },
            { 
                name: 'Computador de Escritorio', 
                price: 450, 
                id: 9,
                image: '/products/computador.jpg',
                categoryId: 1
            },
            { 
                name: 'Fisioterapéutas', 
                price: 120, 
                id: 10,
                image: '/products/fisio1.jpeg',
                categoryId: 3
            },
            { 
                name: 'Doctora', 
                price: 15, 
                id: 11,
                image: '/products/doctora.jpeg',
                categoryId: 3
            },
            { 
                name: 'Manicurista Profesional', 
                price: 700, 
                id: 12,
                image: '/products/manicure.webp',
                categoryId: 3
            },
            { 
                name: 'Pantalla', 
                price: 512, 
                id: 13,
                categoryId: 2
            },
            { 
                name: 'Usb', 
                price: 10, 
                id: 14,
                categoryId:2
            },
            { 
                name: 'Cable HDMI', 
                price: 56, 
                id: 15
            }, 
            { 
                name: 'Mouse Gamer', 
                price: 512, 
                id: 16,
                image: '/products/mouse.jpg',
                categoryId: 2
            },
            { 
                name: 'Computador de Escritorio', 
                price: 450, 
                id: 17,
                image: '/products/computador.jpg',
                categoryId: 2
            }, 
            { 
                name: 'Silla', 
                price: 56, 
                id: 18, 
                image: '/products/silla.webp',
                categoryId: 1
            },
            { 
                name: 'Portátil', 
                price: 450, 
                id: 19, 
                image: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I',
                categoryId: 1
            },          
        ] as Product []
    }),
    getters: {
        products(state) {
            let products = null;

            //Filter
            if (state.categoryId) {
                products = state._products
                    .filter(p => p.categoryId === state.categoryId);
            } else {
                products = state._products;
            }

            //Order
            if (state.order === '') {
                return products;
            }

            if (state.order == 'price') {
                return products.sort((a, b) => a.price - b.price);
            }

            if (state.order == 'priceDesc') {
                return products.sort((a, b) => b.price - a.price);
            }

            
            if (state.order === 'name') {
                return products.sort((a, b) => a.name.localeCompare(b.name));
            }

            if (state.order === 'nameDesc') {
                return products.sort((a, b) => b.name.localeCompare(a.name));
            }
        }
    },
    actions: {
        selectCategory(categoryId: number) {
            this.categoryId = categoryId;
        },
        orderByPrice() {
            this.order = 'price';
        },
        orderByName() {
            this.order = 'name';
        },
        orderByPriceDesc() {
            this.order = 'priceDesc';
        },
        orderByNameDesc() {
            this.order = 'nameDesc';
        }
    },
})