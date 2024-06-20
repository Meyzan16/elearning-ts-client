

interface Props{
    image: string
    title: string
    promo?: number
    price: number
    iconInfo?: boolean
    rating: any
    countUser: number
    
}

const CatalogRilisData: Props[]  = [
    {
        "image" : "/assets/mycourses/test1.webp",
        "title" : "Full-stack Laravel Flutter: Build e-wallet mobile dan nextjs dan laravle dan react js",
        "price" : 690000,
        "promo" : 20,
        "iconInfo":true,
        "rating":5,
        "countUser": 1900
    },
    {
        "image" : "/assets/mycourses/test2.webp",
        "title" : "Full-stack Laravel Flutter: Build e-wallet mobile test test tetst tst etststts  ",
        "price" : 690000,
        "promo" : 20,
        "iconInfo":true,
        "rating": 4,
        "countUser": 1900
    },
    {
        "image" : "/assets/mycourses/test3.webp",
        "title" : "Full-stack Laravel Flutter: Build e-wallet mobile dan nextjs",
        "price" : 690000,
        "rating":5,
        "countUser": 1900
    },
    {
        "image" : "/assets/mycourses/test4.webp",
        "title" : "Full-stack Laravel Flutter: Build e-wallet mobile dan nextjs",
        "price" : 690000,
        "rating":5,
        "countUser": 1900
    },
 
   
]

export default CatalogRilisData;