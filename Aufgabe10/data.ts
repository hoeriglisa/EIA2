namespace A10{
export interface Data {
    element: string;
    name: string;
    preis: number;
}
    

export let baumdaten: Data[] = [ //multidimensionales heterogenes Array
    {element: "baum", name: "", preis: 0},
    {element: "baum", name: "Fichte", preis: 15},
    {element: "baum", name: "Nordmanntanne", preis: 20},
    {element: "baum", name: "Palme", preis: 10}
];
   
export let halterungdaten: Data[] = [
    {element: "halterung", name: "", preis: 0},
    {element: "halterung", name: "Silber", preis: 10},
    {element: "halterung", name: "Gold", preis: 15},
    {element: "halterung", name: "Bambus", preis: 15}
];
    
    
export let kugeldaten: Data[] = [
    {element: "kugelR", name: "Rot", preis: 5},
    {element: "kugelG", name: "Gold", preis: 10},
    {element: "kugelB", name: "Diskokugel", preis: 15}
];    
    
    
export let kerzendaten: Data[] = [
    {element: "kerzeR", name: "Rot", preis: 10},
    {element: "kerzeB", name: "Bunt", preis: 7},
    {element: "kerzeG", name: "Gelb", preis: 7}
]; 
    
    
  export let lieferoptionen: Data[] = [
    {element: "lieferant", name: "Standard", preis: 0},
    {element: "lieferant", name: "Premium", preis: 5},
];
       
}