import { defineStore } from "pinia"
import type { Category } from "@/model/types";
import categoriesData from '../data/categories.json'

// console.log(categoriesData); ////Agregamos éste console log para verificar cuál es el contenido de categoriesData; para ver si realmente estamos leyendo bien. Osea verificar si está llegando a nuestro Store categories.ts

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: categoriesData as Category []
    }),
    getters: {
        
    },
    actions: {
        
    },
})