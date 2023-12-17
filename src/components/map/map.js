ymaps.ready(init);

function init() {
    document.querySelectorAll("[data-maproute]").forEach((block) => {
        const json = JSON.parse(block.dataset.maproute);

        var myMap = new ymaps.Map(block, {
            center: json.center,
            zoom: json.zoom,
            controls: [],
        });

        var pointA = json.start,
            pointB = json.finish,
            multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    referencePoints: [pointA, pointB],
                    params: {
                        routingMode: "pedestrian",
                    },
                },
                {
                    wayPointFinishIconLayout: "default#image",
                    wayPointFinishIconImageHref: json.marker.icon,
                    wayPointFinishIconImageSize: json.marker.size,
                    wayPointFinishIconImageOffset: json.marker.offset,
                    boundsAutoApply: true,
                    zoomMargin: 30,
                }
            );
        // Добавляем мультимаршрут на карту.
        myMap.geoObjects.add(multiRoute);
    });
    document.querySelectorAll("[data-map]").forEach((block) => {
        const json = JSON.parse(block.dataset.map);

        var myMap = new ymaps.Map(block, {
            center: json.center,
            zoom: json.zoom,
            controls: [],
        });
        (myPlacemark = new ymaps.Placemark(
            json.coord,
            {
                hintContent: "",
                balloonContent: "",
            },
            {
                iconLayout: "default#image",
                iconImageHref: json.marker.icon,
                iconImageSize: json.marker.size,
                iconImageOffset: json.marker.offset,
            }
        )),
            myMap.geoObjects.add(myPlacemark);
    });
}

