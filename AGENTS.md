# Instrucciones de trabajo — Bestia Shop

## Lectura inicial

Leer README.md y MEMORY.md antes de modificar el proyecto. Inspeccionar el árbol y las instrucciones adicionales que correspondan a la ruta de trabajo.

## Objetivo

Construir una tienda y carrito para prendas orientadas a seguidores de La 12 y Boca Juniors. Priorizar la experiencia desde celulares y el acceso mediante enlaces compartidos en Instagram.

El alcance funcional del README es una propuesta. Confirmar decisiones que cambien la compra, los servicios contratados o la arquitectura antes de asumirlas como aprobadas.

## Base tecnológica y repositorio

- Trabajar en `master`, según indicación de Julio.
- Stack aprobado: WordPress + WooCommerce, PHP y MySQL, sobre Hostinger Cloud Startup Hosting.
- Usar funcionalidades estándar antes de desarrollar extensiones.
- Implementar personalizaciones en un tema hijo o plugins propios. No editar el núcleo ni dependencias de terceros.
- Versionar documentación y personalizaciones; excluir secretos, respaldos de base de datos y datos de compradores. Respaldar por separado base de datos y medios subidos.
- El proyecto es independiente de Santé; no reutilizar sus datos o configuración por suponer una relación.
- Verificar versiones compatibles y capacidades reales del alojamiento antes de instalar.

## Reglas del proyecto

- Mantener documentación y comunicación en español.
- Inspeccionar código, configuración y recursos existentes antes de implementar; respetar el stack aprobado.
- No asumir Java, Spring, Vaadin, React u otro stack por preferencias de proyectos ajenos.
- Favorecer una solución simple acorde al volumen y al alcance acordado.
- Reutilizar las fotos y ejemplos reales cuando se localicen; conservar los originales.
- No inventar precios, stock, talles, credenciales, datos comerciales o una afiliación oficial con Boca Juniors.
- Distinguir datos de demostración de datos reales.
- No introducir animaciones por defecto. Priorizar claridad y accesibilidad.
- No ampliar silenciosamente el alcance a integración Meta, pagos, autenticación, administración o microservicios.
- No publicar ni desplegar sin autorización correspondiente.

## Catálogo, carrito y pedidos

Aplicar estas reglas cuando se implemente la funcionalidad:

- Identificar cada producto y cada variante de manera estable.
- Diferenciar las líneas del carrito por producto y variante.
- Validar cantidades enteras positivas y disponibilidad.
- Manejar importes con representación exacta y moneda explícita; evitar errores de coma flotante.
- Tratar los precios y el stock del navegador como datos no autoritativos.
- Validar precio, disponibilidad y gastos en la fuente autoritativa antes de confirmar.
- Definir cuándo se reserva o descuenta stock; agregar al carrito no implica una reserva.
- Distinguir carrito, pedido enviado, pago pendiente y pago confirmado.
- Confirmar un pago únicamente con evidencia validada del proveedor cuando exista esa integración.
- Evitar duplicar pedidos ante reintentos.
- No almacenar datos de tarjetas ni secretos en el repositorio o en el frontend.

## Experiencia de usuario

- Verificar el recorrido en pantallas pequeñas y navegación por teclado.
- Usar etiquetas claras, foco visible, contraste adecuado y texto alternativo en fotos.
- Mostrar estados de carrito vacío, sin stock, carga y error.
- Mostrar el total y los gastos conocidos antes de confirmar; informar lo pendiente.
- Mantener enlaces directos a productos y evitar perder el carrito al navegar.

## Verificación y entrega

- Ejecutar los comandos y pruebas pertinentes que realmente existan.
- Para catálogo y carrito, cubrir variantes, cantidades, importes, disponibilidad y persistencia.
- Verificar que los enlaces compartidos abran el producto esperado.
- No declarar pruebas, integración o despliegue como realizados sin evidencia.
- En cambios exclusivamente documentales, revisar coherencia, rutas y enlaces; no crear pruebas artificiales.
- Resumir qué cambió, qué se verificó y cualquier limitación real.
- Mantener README.md y MEMORY.md actualizados al resolver decisiones o incorporar capacidades.
- Preservar cambios ajenos y evitar operaciones destructivas de Git.

## Memoria persistente

Usar MEMORY.md para contexto y decisiones del proyecto, sin secretos ni datos personales de compradores. Registrar hechos comprobados y mantener explícitos los pendientes.
