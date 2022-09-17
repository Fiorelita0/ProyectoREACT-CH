const products =[
    {
        id:1,
        title: "Alimento Pedigree para Cachorro Etapa 1 Sano Crecimiento (21kg) 2 A 18 MESES",
        marca: "Pedigree",
        imagen: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-CACHORRO.png",
        descripcion: "Pedigree® Cachorro Etapa 1 es un alimento completo y balanceado. Pensando especialmente para cubrir las necesidades básicas de tu cachorro a lo largo de sus primero meses de vida: CON DHA esencial para el correcto desarrollo mental y aprendizaje CON CALCIO Y PREBIÓTICOS para un  crecimiento sano y vital SISTEMA INMUNE FUERTE gracias a antioxidantes, como la vitamina E, que contribuye a mantener sus defensas saludables SALUD ORAL ÓPTIMA ya que cada croqueta ayuda a la limpieza de sus dientes, a reducir la formación del sarro y a que sus encías estén más saludables SISTEMA DIGESTIVO SALUDABLE gracias a la utilización de ingredientes de la más alta calidad que facilitan el proceso digestivo, para que su pancita absorba lo mejor de su comida PIEL Y PELO ESPECTACULARES, gracias al Omega 6 y Zinc que nutren y fortalecen su piel, protegiéndolo más efectivamente de agresiones externas, y logrando que el pelo del cachorro esté más brilloso",
        precio: 7000,
        stock: 40,
        categoria: "Alimentos Secos",

    },
    {
        id:2,
        title: "Alimento Pedigree para Perro Adulto Etapa 2 Sabor Carne y Vegetales (21kg) 1 A 7 AÑOS",
        marca: "Pedigree",
        imagen: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-ADULTO-VERDURA.png",
        descripcion: "Pedigree® Adulto Etapa 2 es alimento completo y balanceado. Elaborado con fibras naturales y proteínas de alta calidad. Para acompañar a tu perro en su etapa adulta, cubriendo las 4 necesidades universales: SISTEMA INMUNE FUERTE gracias a antioxidantes, como la vitamina E, que contribuye a mantener sus defensas saludables SALUD ORAL ÓPTIMA con cada croqueta, pues ayudan a la limpieza de sus dientes, a reducir la formación del sarro y a que sus encías estén más saludables SISTEMA DIGESTIVO SALUDABLE a razón de un balance óptimo de fibra y proteínas de alta calidad que contribuyen a un sistema digestivo saludable y heces más firmes PIEL Y PELO ESPECTACULARES, gracias al aceites escenciales como el Omega 6 y a minerales como el Zinc, que nutren y fortalecen su piel, protegiéndolo más efectivamente de agresiones externas, y logrando que su pelo esté más brilloso",
        precio: 6400,
        stock: 30,
        categoria: "Alimentos Secos",
    },
    {
        id:3,
        title: "Alimento Pedigree para Perro Adulto Etapa 2 Carne Pollo y Cereales (21kg) 1 A 7 AÑOS",
        marca: "Pedigree",
        imagen: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-ADULTO-CARNE.png",
        descripcion: "Pedigree Adulto Etapa 2 es alimento completo y balanceado. Elaborado con fibras naturales y proteínas de alta calidad. Para acompañar a tu perro en su etapa adulta, cubriendo las 4 necesidades universales: SISTEMA INMUNE FUERTE gracias a antioxidantes, como la vitamina E, que contribuye a mantener sus defensas saludables SALUD ORAL ÓPTIMA con cada croqueta, pues ayudan a la limpieza de sus dientes, a reducir la formación del sarro y a que sus encías estén más saludables SISTEMA DIGESTIVO SALUDABLE a razón de un balance óptimo de fibra y proteínas de alta calidad que contribuyen a un sistema digestivo saludable y heces más firmes PIEL Y PELO ESPECTACULARES, gracias al aceites escenciales como el Omega 6 y a minerales como el Zinc, que nutren y fortalecen su piel, protegiéndolo más efectivamente de agresiones externas, y logrando que su pelo esté más brilloso",
        precio: 6400,
        stock: 50,
        categoria: "Alimentos Secos",
    },
    {
        id:4,
        title: "Alimento Pedigree para Perro Adulto Razas Pequeñas Etapa 2 Sabor Carne Pollo y Cereales (21kg) 1 A 7 AÑOS",
        marca: "Pedigree",
        imagen: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-ADULTO-PEQUE.png",
        descripcion: "Pedigree Adulto Etapa 2 para Razas Pequeñas es alimento completo y balanceado. Pensando para perros de tamaño pequeño que en su etapa adulta pesan menos de 15 kg. Elaborado con fibras naturales y proteínas de alta calidad. Para acompañar a tu perro en su etapa adulta, cubriendo las 4 necesidades universales: SISTEMA INMUNE FUERTE gracias a antioxidantes, como la vitamina E, que contribuye a mantener sus defensas saludables SALUD ORAL ÓPTIMA con cada croqueta, pues ayudan a la limpieza de sus dientes, a reducir la formación del sarro y a que sus encías estén más saludables SISTEMA DIGESTIVO SALUDABLE a razón de un balance óptimo de fibra y proteínas de alta calidad que contribuyen a un sistema digestivo saludable y heces más firmes PIEL Y PELO ESPECTACULARES, gracias al aceites escenciales como el Omega 6 y a minerales como el Zinc, que nutren y fortalecen su piel, protegiéndolo más efectivamente de agresiones externas, y logrando que su pelo esté más brilloso",
        precio: 6600,
        stock: 45,
        categoria: "Alimentos Secos",
    },
    {
        id:5,
        title: "Alimento Pedigree para Perro Adulto Mayor Etapa 3 (21kg) +7 AÑOS",
        marca: "Pedigree",
        imagen: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.pedigree.com.ar/wp-content/uploads/2018/09/PEDIGREE-SENIOR.png",
        descripcion: "El Alimento Pedigree Adulto Mayor, está diseñado para satisfacer todos los cuidados especiales que tu perro empieza a necesitar a partir de los 7 años de edad. Tiene un balance óptimo de fibras y proteínas de alta calidad para lograr un sistema digestivo saludable, y a su vez contiene antioxidantes para proteger su sistema inmune. Además de ayudar con la limpieza de dientes de tu mascota, previniendo la formación de sarro y fortaleciendo sus encías, el alimento nutre y cuida su pelo gracias a los minerales y aceites esenciales que contiene. Beneficios: Facilita la digestión. Protege el sistema inmunológico. Cuidado dental y del pelo. Alimento pensado especialmente para tu perro adulto.",
        precio: 6000,
        stock: 60,
        categoria: "Alimentos Secos",
    },
];

export default products;