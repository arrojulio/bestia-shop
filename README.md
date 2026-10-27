# Bestia Shop

Proyecto de tienda web para vender remeras, blusas y pantalones orientados a seguidores de La 12 y Boca Juniors.

## Objetivo

Ofrecer un catálogo y un carrito de compras fáciles de usar desde el celular, con enlaces que puedan compartirse en Instagram. El canal exacto de cierre de compra se definirá con Julio.

## Estado actual

Al 27 de octubre de 2026, la rama de trabajo acordada es `master` y contiene documentación inicial. Julio eligió WordPress + WooCommerce, PHP y MySQL para alojar la tienda en su plan Hostinger Cloud Startup Hosting. La instalación y los comandos de ejecución todavía no se verificaron.

El proyecto es independiente de Santé. No asumir código, datos, configuración ni integraciones compartidas.

Se revisaron `ejemplo-productos/demo1.jpg`, `demo2.jpg` y `demo3.jpg` en `master`: una remera, una presentación de musculosa y una referencia de estampa. Julio indicó que los pantalones seguirán una línea similar y que subirá su imagen; esa referencia aún no fue verificada. Confirmar la categoría blusas/musculosas antes de cerrar el catálogo.

Concepto: indumentaria urbana para expresar pasión y pertenencia a Boca, con La Doce y la cultura de tribuna como referencias de identidad. El [plan general](docs/PLAN_GENERAL.md) desarrolla público, productos, posicionamiento y etapas de trabajo. La segmentación es una propuesta pendiente de validar con compradores.

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

- Identidad visual definitiva, catálogo completo y referencia de pantalones.
- Versiones compatibles de WordPress, WooCommerce y PHP, y configuración del sitio en Hostinger.
- Moneda, precios, talles, colores y disponibilidad inicial.
- Canal de cierre: checkout web, WhatsApp u otro.
- Medios de pago, envíos, retiro y cambios.
- Configuración de la administración de productos, pedidos y stock en WooCommerce.
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

Usar las capacidades estándar de WooCommerce para catálogo, variantes, carrito, pedidos y administración. Versionar en GitHub la documentación, el tema hijo y los plugins propios que se necesiten; no modificar el núcleo de WordPress, WooCommerce ni plugins de terceros. La base de datos, las imágenes subidas y los secretos requieren gestión y respaldos independientes de Git.

Próximos pasos: crear un sitio con dominio temporal de Hostinger, instalar WordPress y WooCommerce, seleccionar un tema y cargar un producto de prueba con variantes. Después, configurar pagos y envíos y verificar una compra completa antes de publicar.

La instalación, las pruebas y el despliegue aún no se realizaron desde esta sesión. Actualizar esta sección con versiones y procedimientos comprobados al ejecutarlos.

## Documentación

- [Plan general](docs/PLAN_GENERAL.md): visión, cultura de hincha, público objetivo propuesto, productos, canales y plan de acción.
- [Memoria del proyecto](MEMORY.md): contexto, hechos confirmados y decisiones pendientes.
- [Instrucciones de trabajo](AGENTS.md): reglas para asistentes y colaboradores.

GitHub es la referencia del código y de esta documentación. Registrar las decisiones nuevas y mantener los tres archivos consistentes.
