var buttons = document.querySelectorAll('.remove');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var parent = button.parentNode;
        parent.parentNode.removeChild(parent);

    });
});




Un entorno se refiere a un conjunto de configuraciones y ajustes específicos que se aplican a una aplicación web en función del contexto en el que se está ejecutando.
    Symfony permite definir diferentes entornos, como "dev" (desarrollo), "prod" (producción) y "test" (pruebas), entre otros.

Cada entorno tiene su propio archivo de configuración que puede definir variables de entorno, conexiones a bases de datos, ajustes de caché y otras configuraciones. Al tener entornos separados, Symfony facilita el desarrollo, las pruebas y la producción, permitiendo configuraciones específicas para cada caso.