

window.addEventListener('load', function () {

    var x = 300;
    var y = 200;

    var canvas = document.querySelector('#main-canvas');
    var context = canvas.getContext('2d');



    var drawLineLeft = function () {
        context.beginPath()
        context.moveTo(x, y);
        context.lineTo((x-5), y);
        context.stroke();
        x =  (x - 5);
    }

    var drawLineRight = function () {
        context.beginPath()
        context.moveTo(x, y);
        context.lineTo((x+ 5), y);
        context.stroke();
        x =  (x + 5);
    }

    var drawLineUp = function () {
        context.beginPath()
        context.moveTo(x, y);
        context.lineTo(x, (y -5));
        context.stroke();
        y = (y - 5);
    }

    var drawLineDown = function () {
        context.beginPath()
        context.moveTo(x, y);
        context.lineTo(x, (y + 5));
        context.stroke();
        y = (y + 5);
        console.log(y);
    }

    var keyDirection = function (event) {
        switch(event.key) {
            case 'ArrowLeft':
                drawLineLeft();
                break;
            case 'ArrowRight':
                drawLineRight()
                break;
            case 'ArrowUp':
                drawLineUp();
                break;
            case 'ArrowDown':
                drawLineDown();
                break;
        }
    }


    document.addEventListener('keydown', function (event) {
        console.log(event.key);
        keyDirection(event);
    })
})
