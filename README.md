# Bestia Shop

Proyecto de tienda web para vender remeras, blusas y pantalones orientados a seguidores de La 12 y Boca Juniors.

## Objetivo

Ofrecer un catálogo y un carrito de compras fáciles de usar desde el celular, con enlaces que puedan compartirse en Instagram. El canal exacto de cierre de compra se definirá con Julio.

## Estado actual

Al 27 de octubre de 2026, la rama principal contiene documentación inicial. No hay una aplicación, stack tecnológico ni comandos de ejecución verificados.

Julio indicó que existen ejemplos de prendas; sus archivos y ubicación todavía deben localizarse. No se han verificado imágenes de productos en la rama principal.

## Alcance inicial propuesto

Este alcance es una propuesta para acordar antes de implementar:

- Catálogo por categorías: remeras, blusas y pantalones.
- Ficha de producto con fotos, descripción, precio y variantes de talle y color.
- Disponibilidad por variante.
- Carrito con altas, cambios de cantidad, eliminación y subtotal.
- Flujo claro para continuar la compra por el canal que se acuerde.
- Diseño adaptable a celulares, navegación accesible y enlaces directos a productos para compartir en Instagram.
- Conservación del carrito al recargar o volver a abrir la tienda, con revalidación de disponibilidad y precios al confirmar.

## Instagram

La primera interpretación de trabajo es una tienda web accesible mediante enlaces desde Instagram. Una integración con catálogo de Meta, etiquetado de productos, API o checkout nativo requiere definición y verificación propias; no está implementada ni comprometida.

## Decisiones pendientes

- Identidad visual y ubicación de fotos y ejemplos.
- Tecnología, arquitectura y alojamiento.
- Moneda, precios, talles, colores y disponibilidad inicial.
- Canal de cierre: checkout web, WhatsApp u otro.
- Medios de pago, envíos, retiro y cambios.
- Forma de administrar productos, pedidos y stock.
- Alcance concreto de la relación con Instagram.

## Criterios de aceptación propuestos

- Desde un enlace compartido se puede abrir un producto y elegir una variante disponible en un celular.
- Solo se agregan cantidades válidas de una variante seleccionada.
- Variantes distintas del mismo producto se mantienen como líneas separadas.
- Cambiar cantidades o eliminar líneas actualiza los importes de forma consistente.
- Un carrito vacío, un producto sin stock y una imagen ausente tienen estados comprensibles.
- Antes de confirmar un pedido, la fuente autoritativa valida precios, disponibilidad y gastos aplicables.
- El comprador distingue entre carrito, pedido enviado y pago confirmado.
- No se muestran productos, precios ni disponibilidad ficticios como datos comerciales reales.

## Desarrollo

Todavía no se definieron dependencias, instalación, pruebas o despliegue. Esta sección debe actualizarse con comandos comprobados cuando exista la aplicación.

## Documentación

- [Memoria del proyecto](MEMORY.md): contexto, hechos confirmados y decisiones pendientes.
- [Instrucciones de trabajo](AGENTS.md): reglas para asistentes y colaboradores.

GitHub es la referencia del código y de esta documentación. Registrar las decisiones nuevas y mantener los tres archivos consistentes.
