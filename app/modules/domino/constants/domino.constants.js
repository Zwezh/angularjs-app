export const dominoConstants = {
    urls: {
        getFaceImageUrl: '/images/domino-faces/{{face}}.svg'
    },
    faces: ['1', '2', '3', '4', '5', '6'],
    types: {
        top: 'top',
        bottom: 'bottom'
    },
    size: {
        min: 60,
        max: 120
    },
    speed: {
        min: 0,
        max: 2000
    },
    rotates: {
        toRight: 90,
        toLeft: -90
    }
}