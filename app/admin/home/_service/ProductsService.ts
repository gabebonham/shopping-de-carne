import Item from "@/model/Item";
import { getHomePromotions } from "./HomePromotionsService";

const a = 'ororas jasifj ajosidfjasdjofjoasijd fasjfoijasodifj oasjf osa dfoiajsidfoiasjdiofjoasjf oasijdfoasijdf oasjid foijsoidjfaoijdsjfjaosij';

async function getProducts(){
        return [
            new Item('1', 56.72, 'carne1', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 'product/Bovinos/1', 'Bovinos', a, true, false),
            new Item('1', 24.99, 'carne2', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Aves/1', 'Aves', a, false, true),
            new Item('1', 32.45, 'carne3', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Suinos/1', 'Suinos', 'a', true, true),
            new Item('1', 10.30, 'carne4', 'https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg', 'product/Frangos/1', 'Frangos', a, false, false),
            new Item('2', 45.50, 'carne5', 'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg', 'product/Bovinos/2', 'Bovinos', a, true, false),
            new Item('2', 17.99, 'carne6', 'https://images.inc.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg', 'product/Aves/2', 'Aves', a, true, true),
            new Item('2', 28.75, 'carne7', 'https://www.shutterstock.com/image-photo/beef-wagyu-lean-meat-raw-260nw-2493192807.jpg', 'product/Suinos/2', 'Suinos', a, false, false),
            new Item('2', 12.40, 'carne8', 'https://t4.ftcdn.net/jpg/00/83/36/05/360_F_83360582_oxUzWNwMqPLewOONSG5V8Kb6kfmDkdeP.jpg', 'product/Frangos/2', 'Frangos', a, true, true),
            new Item('3', 37.29, 'carne9', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Bovinos/3', 'Bovinos', a, false, false),
            new Item('3', 9.99, 'carne10', 'https://images.immediate.co.uk/production/volatile/sites/30/2024/06/Red-meat440-980233e.jpg?quality=90&resize=440,400', 'product/Aves/3', 'Aves', a, true, true),
            new Item('3', 18.89, 'carne11', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Suinos/3', 'Suinos', a, false, true),
            new Item('3', 21.50, 'carne12', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Frangos/3', 'Frangos', a, true, false),
            new Item('4', 65.70, 'carne13', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Bovinos/4', 'Bovinos', a, true, false),
            new Item('4', 53.49, 'carne14', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Aves/4', 'Aves', a, true, true),
            new Item('4', 42.30, 'carne15', 'https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg', 'product/Suinos/4', 'Suinos', a, true, false),
            new Item('4', 13.00, 'carne16', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 'product/Frangos/4', 'Frangos', a, false, true),
            new Item('5', 39.99, 'carne17', 'https://t4.ftcdn.net/jpg/00/83/36/05/360_F_83360582_oxUzWNwMqPLewOONSG5V8Kb6kfmDkdeP.jpg', 'product/Bovinos/5', 'Bovinos', a, false, true),
            new Item('5', 55.75, 'carne18', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Aves/5', 'Aves', a, true, false),
            new Item('5', 21.99, 'carne19', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Suinos/5', 'Suinos', a, true, true),
            new Item('5', 10.10, 'carne20', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Frangos/5', 'Frangos', a, false, false),
            new Item('6', 29.99, 'carne21', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Bovinos/6', 'Bovinos', a, true, true),
            new Item('6', 14.60, 'carne23', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Aves/6', 'Aves', a, true, false),
            new Item('6', 33.45, 'carne24', 'https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg', 'product/Suinos/6', 'Suinos', a, false, true),
            new Item('6', 9.49, 'carne25', 'https://t4.ftcdn.net/jpg/00/83/36/05/360_F_83360582_oxUzWNwMqPLewOONSG5V8Kb6kfmDkdeP.jpg', 'product/Frangos/6', 'Frangos', a, false, false),
            new Item('7', 48.10, 'carne26', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 'product/Bovinos/7', 'Bovinos', a, true, true),
            new Item('7', 39.20, 'carne27', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Aves/7', 'Aves', a, true, false),
            new Item('7', 55.99, 'carne28', 'https://t4.ftcdn.net/jpg/00/83/36/05/360_F_83360582_oxUzWNwMqPLewOONSG5V8Kb6kfmDkdeP.jpg', 'product/Suinos/7', 'Suinos', a, false, true),
            new Item('7', 13.50, 'carne29', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Frangos/7', 'Frangos', a, false, false),
            new Item('8', 49.99, 'carne30', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Bovinos/8', 'Bovinos', a, false, false),
            new Item('8', 20.80, 'carne31', 'https://t4.ftcdn.net/jpg/00/83/36/05/360_F_83360582_oxUzWNwMqPLewOONSG5V8Kb6kfmDkdeP.jpg', 'product/Aves/8', 'Aves', a, true, true),
            new Item('8', 22.50, 'carne32', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Suinos/8', 'Suinos', a, true, false),
            new Item('8', 15.99, 'carne33', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Frangos/8', 'Frangos', a, false, true),
            new Item('9', 63.99, 'carne34', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Bovinos/9', 'Bovinos', a, true, false),
            new Item('9', 18.50, 'carne35', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Aves/9', 'Aves', a, false, true),
            new Item('9', 35.60, 'carne36', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Suinos/9', 'Suinos', a, true, true),
            new Item('9', 25.90, 'carne37', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 'product/Frangos/9', 'Frangos', a, false, false),
            new Item('10', 15.00, 'carne38', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Bovinos/10', 'Bovinos', a, true, true),
            new Item('10', 41.60, 'carne39', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Aves/10', 'Aves', a, false, true),
            new Item('10', 18.40, 'carne40', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29_1024x1024.jpg?v=1652748098', 'product/Suinos/10', 'Suinos', a, true, false),
            new Item('10', 22.99, 'carne41', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Frangos/10', 'Frangos', a, false, true),
            new Item('11', 39.90, 'carne42', 'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg', 'product/Bovinos/11', 'Bovinos', a, true, true),
            new Item('11', 60.45, 'carne43', 'https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=', 'product/Aves/11', 'Aves', a, false, false),
            new Item('11', 48.80, 'carne44', 'https://www.meatemporium.com.au/cdn/shop/products/JA_AME_FeedTheFamily_41.jpg?v=1652748939', 'product/Suinos/11', 'Suinos', a, true, true),
            new Item('11', 25.30, 'carne45', 'https://media.gettyimages.com/id/174479270/pt/foto/frescos-ribeye-de-bifes-na-loja-de-carniceiro.jpg?s=612x612&w=gi&k=20&c=_Gd-MEDkiulIi0VnENMvX3E5GZUJUa8x5F8aTWjlgls=', 'product/Frangos/11', 'Frangos', a, false, false),
            new Item('12', 19.30, 'carne46', 'https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg', 'product/Bovinos/12', 'Bovinos', a, true, false),
            new Item('12', 42.75, 'carne47', 'https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg', 'product/Aves/12', 'Aves', a, false, true),
            
    
        ]
    };




async function getProductByIdAndCategory(id, category){
    return (await getProducts()).find(p=>p.category==category&&p.id==id);
}

async function getProductsByCategory(category){
    return (await getProducts()).filter(p=>p.category==category);
}


export {
    getProductByIdAndCategory,
    getProductsByCategory,
    getProducts
}