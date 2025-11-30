export type HomeTemplateId =
  | 'hero' 
  | 'grid'
  | 'boutique'
  | 'magazine'
  | 'sidebar'
  | 'heroGrid'
  | 'onePage'
  | 'brandStory'
  | 'categoryTiles'
  | 'bigMedia'
  | 'giftShop';

// Permitir cambiar por ENV (útil para clientes distintos)
const envTemplate = process.env.NEXT_PUBLIC_HOME_TEMPLATE as
  | HomeTemplateId
  | undefined;

export const CURRENT_HOME_TEMPLATE: HomeTemplateId = envTemplate ?? 'grid';

/* hero
Home con producto/s destacados arriba (ThreeItemGrid + Carousel). 
Ideal para resaltar lo nuevo o lo más vendido.

grid
Home clásica de tienda: título “Productos” + grid uniforme. 
Perfecta para catálogos generales.

boutique
Estilo elegante y minimalista: 1 producto grande destacado + grid pequeño abajo. 
Para marcas “premium”.

magazine
Layout tipo revista: hero editorial con un producto + bloques de “novedades”
y “explora más historias”.

sidebar
Grid con barra lateral fija de filtros (categoría, orden, etc.). 
Útil para catálogos grandes.

heroGrid
Combinación: primero hero (ThreeItemGrid + Carousel) y después la tienda tipo grid. 
Todo en una sola página.

onePage
“One Page Store”: todo el funnel en la home (hero, beneficios, planes/precios, testimonios). 
Ideal para cursos e infoproductos.

brandStory
Enfocada en la historia de la marca: sección “quiénes somos” y proceso, 
con el catálogo al final.

categoryTiles
Tarjetas grandes de categoría (Ropa, Hogar, Niños, etc.) y pocos productos destacados. 
Enfocada en navegar por categorías.

bigMedia
Hero de imagen grande a todo ancho + banners y carrusel horizontal de productos. 
Muy visual, perfecta para moda/deporte.

giftShop
Tienda de regalos: kits destacados, filtros por ocasión (cumpleaños, aniversario…) 
y bloque de “arma tu caja”.*/