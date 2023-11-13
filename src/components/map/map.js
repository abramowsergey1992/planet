async function initMap() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls,
        YMapDefaultFeaturesLayer,
        YMapMarker,
    } = ymaps3;

    const { YMapZoomControl } = await ymaps3.import(
        "@yandex/ymaps3-controls@0.0.1"
    );
    document.querySelectorAll("[data-map]").forEach((it) => {
        let params = JSON.parse(it.dataset.map);

        const map = new YMap(it, {
            location: {
                center: [params.center[1], params.center[0]],
                zoom: params.zoom,
            },
        });

        let scheme;
        map.addChild((scheme = new YMapDefaultSchemeLayer()));
        map.addChild(new YMapDefaultFeaturesLayer());

        map.addChild(
            new YMapControls({ position: "right" }).addChild(
                new YMapZoomControl({})
            )
        );

        const el = document.createElement("img");
        el.className = "map-marker";
        el.src = params.marker.icon;
        map.addChild(
            new YMapMarker(
                {
                    coordinates: [
                        params.marker.coord[1],
                        params.marker.coord[0],
                    ],
                },
                el
            )
        );
    });
}
initMap();
